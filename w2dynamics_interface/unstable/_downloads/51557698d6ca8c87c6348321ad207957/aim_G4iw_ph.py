from triqs.gf import *
from triqs.operators import *
from h5 import HDFArchive
import triqs.utility.mpi as mpi

from w2dyn_cthyb import Solver

# Parameters
D, V, U = 1.0, 0.2, 4.0
e_f, beta = -U/2.0, 50

# Construct the impurity solver with the inverse temperature
# and the structure of the Green's functions
S = Solver(beta = beta, gf_struct = [ ('up',[0]), ('down',[0]) ])

# Initialize the non-interacting Green's function S.G0_iw
for name, g0 in S.G0_iw: g0 << inverse(iOmega_n - e_f - V**2 * Wilson(D))

# Run the solver. The results will be in S.G2_iw_ph, errors (for parallel runs)
# in S.G2_iw_ph_error
S.solve(h_int = U * n('up',0) * n('down',0),     # Local Hamiltonian
        n_cycles  = 1000000,                     # Number of QMC cycles
        length_cycle = 20,                       # Length of one cycle
        n_warmup_cycles = 100000,                # Warmup cycles
        measure_G2_iw_ph = True,                 # Measure G2_iw_ph
        measure_G2_n_bosonic = 30,               # Number of non-negative bosonic frequencies
        measure_G2_n_fermionic = 30,             # Number of non-negative fermionic frequencies
        # Do not measure one-particle quantities to avoid Z-space sampling
        measure_G_l = False,                     # Do not measure G_l
        measure_G_tau = False)                   # Do not measure G_tau

# Save the results in an HDF5 file (only on the master node)
if mpi.is_master_node():
    with HDFArchive("aim_2p_solution.h5",'w') as Results:
        Results["G2_iw_ph"] = S.G2_iw_ph
