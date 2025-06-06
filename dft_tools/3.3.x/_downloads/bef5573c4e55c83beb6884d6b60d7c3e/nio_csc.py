from itertools import *
import triqs.utility.mpi as mpi
from h5 import HDFArchive
from triqs.gf import *
import sys, triqs.version as triqs_version
from triqs_dft_tools.sumk_dft import *
from triqs_dft_tools.sumk_dft_tools import *
from triqs.operators.util.hamiltonians import *
from triqs.operators.util.U_matrix import *
from triqs_cthyb import *
import triqs_cthyb.version as cthyb_version
import triqs_dft_tools.version as dft_tools_version
from triqs_dft_tools.converters.vasp import *


import warnings
warnings.filterwarnings("ignore", category=FutureWarning)


def dmft_cycle():
    filename = 'vasp'

    Converter = VaspConverter(filename=filename, proj_or_hk='hk')
    Converter.convert_dft_input()

    beta = 5.0
    mesh = MeshImFreq(beta=beta, S='Fermion', n_iw=500)

    SK = SumkDFT(hdf_file=filename+'.h5', use_dft_blocks=False, mesh=mesh)

    G = SK.extract_G_loc(transform_to_solver_blocks=False, with_Sigma=False)
    SK.analyse_block_structure_from_gf(G, threshold=1e-2)
    for i_sh in range(len(SK.deg_shells)):
        num_block_deg_orbs = len(SK.deg_shells[i_sh])
        mpi.report('found {0:d} blocks of degenerate orbitals in shell {1:d}'.format(
            num_block_deg_orbs, i_sh))
        for iblock in range(num_block_deg_orbs):
            mpi.report('block {0:d} consists of orbitals:'.format(iblock))
            for keys in list(SK.deg_shells[i_sh][iblock].keys()):
                mpi.report('  '+keys)

    # Setup CTQMC Solver

    n_orb = SK.corr_shells[0]['dim']
    spin_names = ['up', 'down']

    gf_struct = SK.gf_struct_solver_list[0]
    mpi.report('Sumk to Solver: %s' % SK.sumk_to_solver)
    mpi.report('GF struct sumk: %s' % SK.gf_struct_sumk)
    mpi.report('GF struct solver: %s' % SK.gf_struct_solver)

    S = Solver(beta=beta, gf_struct=gf_struct, n_iw=500)

    # Construct the Hamiltonian and save it in Hamiltonian_store.txt
    H = Operator()
    U = 8.0
    J = 1.0

    U_sph = U_matrix_slater(l=2, U_int=U, J_hund=J)
    U_cubic = transform_U_matrix(U_sph, spherical_to_cubic(l=2, convention='vasp'))
    Umat, Upmat = reduce_4index_to_2index(U_cubic)

    H = h_int_density(spin_names, n_orb,
                      map_operator_structure=SK.sumk_to_solver[0], U=Umat, Uprime=Upmat)

    # Print some information on the master node
    mpi.report('Greens function structure is: %s ' % gf_struct)
    mpi.report('U Matrix set to:\n%s' % Umat)
    mpi.report('Up Matrix set to:\n%s' % Upmat)

    # Parameters for the CTQMC Solver
    p = {}
    p["max_time"] = -1
    p["random_name"] = ""
    p["length_cycle"] = 400
    p["n_warmup_cycles"] = 2000
    p["n_cycles"] = 80000
    p["fit_max_moment"] = 4
    p["fit_min_w"] = 20
    p["fit_max_w"] = 30
    p["perform_tail_fit"] = True
    # measure impurity density matrix to get self-energy moments for improved tail fit
    p["measure_density_matrix"] = True
    p["use_norm_as_weight"] = True

    # Double Counting: 0 FLL, 1 Held, 2 AMF
    DC_type = 0
    DC_value = 59.0

    # Prepare hdf file and and check for previous iterations
    n_iterations = 1

    iteration_offset = 0
    if mpi.is_master_node():
        with HDFArchive(filename+'.h5', 'a') as ar:
            if 'DMFT_results' not in ar:
                ar.create_group('DMFT_results')
            if 'Iterations' not in ar['DMFT_results']:
                ar['DMFT_results'].create_group('Iterations')
            if 'DMFT_input' not in ar:
                ar.create_group('DMFT_input')
            if 'Iterations' not in ar['DMFT_input']:
                ar['DMFT_input'].create_group('Iterations')
            if not 'code_versions' not in ar['DMFT_input']:
                ar['DMFT_input'].create_group('code_versions')
            ar['DMFT_input']['code_versions']["triqs_version"] = triqs_version.version
            ar['DMFT_input']['code_versions']["triqs_git"] = triqs_version.git_hash
            ar['DMFT_input']['code_versions']["cthyb_version"] = cthyb_version.version
            ar['DMFT_input']['code_versions']["cthyb_git"] = cthyb_version.triqs_cthyb_hash
            ar['DMFT_input']['code_versions']["dft_tools_version"] = dft_tools_version.version
            ar['DMFT_input']['code_versions']["dft_tools_git"] = dft_tools_version.triqs_dft_tools_hash
            ar['DMFT_input']['sumk_block_structure'] = SK.block_structure
            if 'iteration_count' in ar['DMFT_results']:
                iteration_offset = ar['DMFT_results']['iteration_count']+1
                S.Sigma_iw = ar['DMFT_results']['Iterations']['Sigma_it'+str(iteration_offset-1)]
                SK.dc_imp = ar['DMFT_results']['Iterations']['dc_imp'+str(iteration_offset-1)]
                SK.dc_energ = ar['DMFT_results']['Iterations']['dc_energ'+str(iteration_offset-1)]
                SK.chemical_potential = ar['DMFT_results']['Iterations']['chemical_potential' +
                                                                         str(iteration_offset-1)].real
            ar['DMFT_input']["dmft_script_it"+str(iteration_offset)] = open(sys.argv[0]).read()
    iteration_offset = mpi.bcast(iteration_offset)
    S.Sigma_iw = mpi.bcast(S.Sigma_iw)
    SK.dc_imp = mpi.bcast(SK.dc_imp)
    SK.dc_energ = mpi.bcast(SK.dc_energ)
    SK.chemical_potential = mpi.bcast(SK.chemical_potential)

    # Calc the first G0
    SK.symm_deg_gf(S.Sigma_iw, ish=0)
    SK.put_Sigma(Sigma_imp=[S.Sigma_iw])
    SK.calc_mu(precision=0.01)
    S.G_iw << SK.extract_G_loc()[0]
    SK.symm_deg_gf(S.G_iw, ish=0)

    # Init the DC term and the self-energy if no previous iteration was found
    if iteration_offset == 0:
        dm = S.G_iw.density()
        SK.calc_dc(dm, U_interact=U, J_hund=J, orb=0,
                   use_dc_formula=DC_type, use_dc_value=DC_value)
        S.Sigma_iw << SK.dc_imp[0]['up'][0, 0]

    mpi.report('%s DMFT cycles requested. Starting with iteration %s.' %
               (n_iterations, iteration_offset))

    # The infamous DMFT self consistency cycle
    for it in range(iteration_offset, iteration_offset + n_iterations):
        mpi.report('Doing iteration: %s' % it)

        # Get G0
        S.G0_iw << inverse(S.Sigma_iw + inverse(S.G_iw))
        # Solve the impurity problem
        S.solve(h_int=H, **p)
        if mpi.is_master_node():
            with HDFArchive(filename+'.h5', 'a') as ar:
                ar['DMFT_input']['Iterations']['solver_dict_it'+str(it)] = p
                ar['DMFT_results']['Iterations']['Gimp_it'+str(it)] = S.G_iw
                ar['DMFT_results']['Iterations']['Gtau_it'+str(it)] = S.G_tau
                ar['DMFT_results']['Iterations']['Sigma_uns_it'+str(it)] = S.Sigma_iw
        # Calculate double counting
        dm = S.G_iw.density()
        SK.calc_dc(dm, U_interact=U, J_hund=J, orb=0,
                   use_dc_formula=DC_type, use_dc_value=DC_value)
        # Get new G
        SK.symm_deg_gf(S.Sigma_iw, ish=0)
        SK.put_Sigma(Sigma_imp=[S.Sigma_iw])
        SK.calc_mu(precision=0.001)
        S.G_iw << SK.extract_G_loc()[0]

        # print densities
        for sig, gf in S.G_iw:
            mpi.report("Orbital %s density: %.6f" % (sig, dm[sig][0, 0].real))
        mpi.report('Total charge of Gloc : %.6f' % S.G_iw.total_density().real)

        if mpi.is_master_node():
            with HDFArchive(filename+'.h5', 'a') as ar:
                ar['DMFT_results']['iteration_count'] = it
                ar['DMFT_results']['Iterations']['Sigma_it'+str(it)] = S.Sigma_iw
                ar['DMFT_results']['Iterations']['Gloc_it'+str(it)] = S.G_iw
                ar['DMFT_results']['Iterations']['G0loc_it'+str(it)] = S.G0_iw
                ar['DMFT_results']['Iterations']['dc_imp'+str(it)] = SK.dc_imp
                ar['DMFT_results']['Iterations']['dc_energ'+str(it)] = SK.dc_energ
                ar['DMFT_results']['Iterations']['chemical_potential'+str(it)] = SK.chemical_potential

    if mpi.is_master_node():
        print('calculating mu...')
    SK.chemical_potential = SK.calc_mu(precision=0.000001)

    if mpi.is_master_node():
        print('calculating charge density update')
    SK.calc_density_correction(dm_type='vasp')

    if mpi.is_master_node():
        print('calculating energy corrections')

    correnerg = 0.5 * (S.G_iw * S.Sigma_iw).total_density()

    dm = S.G_iw.density()  # compute the density matrix of the impurity problem
    SK.calc_dc(dm, U_interact=U, J_hund=J, orb=0, use_dc_formula=DC_type, use_dc_value=DC_value)

    if mpi.is_master_node():
        with HDFArchive(filename+'.h5', 'a') as ar:
            ar['DMFT_results']['Iterations']['corr_energy_it'+str(it)] = correnerg
            ar['DMFT_results']['Iterations']['dc_energy_it'+str(it)] = SK.dc_energ[0]

    return correnerg, SK
