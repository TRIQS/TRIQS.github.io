Additional remarks
==================

To the parameters of the preceding section, when using w2dynamics 
with the interface, the following additional parameters or comments may be 
considered.


Remark 1 - Defining the impurity
--------------------------------

There are two ways available to define the properties of the impurity, by supplying

- the noninteracting Greens function :math:`G_0` and the interaction matrix :math:`U_{\alpha\beta\gamma\delta}`
- the hybridisation function :math:`\Delta_{\alpha\beta} (i \omega_n) = \sum_k \frac{V_{k,\alpha} V^*_{k,\beta}}{i \omega_n - \epsilon_{k,\alpha}}`,  the interaction matrix :math:`U_{\alpha\beta\gamma\delta}` and the hopping matrix :math:`t_{\alpha\beta}`.


Examples
........

We define the properties of the impurity::

    spin_names = ['up', 'dn']
    orb_names  = [0]

    gf_struct = [ [s, orb_names] for s in spin_names ]

    # ==== Local Hamiltonian ====
    h_0 = - mu*( n('up',0) + n('dn',0) ) - h*( n('up',0) - n('dn',0) )
    h_int = U * n('up',0) * n('dn',0)

    # ==== Hybridization Function ====
    n_iw = int(10 * beta)
    iw_mesh = MeshImFreq(beta, 'Fermion', n_iw)
    Delta = BlockGf(mesh=iw_mesh, gf_struct=gf_struct)
    Delta << sum([V_i*V_i * inverse(iOmega_n - E_i) for V_i,E_i in zip(V, E)]);

    # ==== Non-Interacting Impurity Green function  ====
    G0_iw = BlockGf(mesh=iw_mesh, gf_struct=gf_struct)
    G0_iw['up'] << inverse(iOmega_n + mu + h - Delta['up'])
    G0_iw['dn'] << inverse(iOmega_n + mu - h - Delta['dn'])

* Now the solver is initialized the following way using the G0 interface::

    # ==== Construct the CTHYB solver using the G0 + h_int Interface ====
    constr_params = {
            'beta' : beta,
            'gf_struct' : gf_struct,
            'n_iw' : n_iw,
            'n_tau' : 1000,
            'delta_interface' : False # this line can also be omitted, since False is default
            }
    S = Solver(**constr_params)

    # --------- Initialize G0_iw ----------
    S.G0_iw << G0_iw
    
    # --------- Solve! ----------
    solve_params = {
            'h_int' : h_int,
            'n_warmup_cycles' : 100,
            'n_cycles' : 5000,
            'length_cycle' : 100
            }
    S.solve(**solve_params)

* And the following way unsing the Delta interface::

    # ==== Construct the CTHYB solver using the G0 + h_int Interface ====
    constr_params = {
            'beta' : beta,
            'gf_struct' : gf_struct,
            'n_iw' : n_iw,
            'n_tau' : 1000,
            'delta_interface' : True
            }
    S = Solver(**constr_params)

    # --------- Initialize Delta ----------
    S.Delta_tau << Fourier(Delta)
    
    # --------- Solve! ----------
    solve_params = {
            'h_int' : h_int,
            'n_warmup_cycles' : 100,
            'n_cycles' : 5000,
            'length_cycle' : 100,
            'h_0' : h_0
            }
    S.solve(**solve_params)


Remark 2 - Kramers degeneracy
-----------------------------

In systems where Kramers theorem applies, 
the one particle eigenstates are (at least) double degenerate. 
To have this deneneracy also fulfilled in the interacting result, 
special global moves are necessary. 
That means that these updates are performed on the right states,
the order of the states has e.g. in paramagnetic cases with spin
to be written::
    gf_struct = [['up', [0]], ['up', [1]], ['dn', [0]], ['dn', [1]]]
or::
    gf_struct = [['up', [0, 1]], ['dn', [0, 1]]]
    
That means, first write all spin up, then all spin down, that the spin-flip move
will be executed the right way.
Also systems with have spontanuous symmetry breaking of this degeneracy, e.g. here ferromagnetism, in order for the random walker to overcome the phase barrier between up- and down-polarisation, a spin flip move is necessary. 

One more example, in a J Jz basis, where without order (J=1/2, Jz=1/2) and (J=1/2, Jz=-1/2),
as well as (J=3/2, Jz=1/2) and (J=3/2, Jz=-1/2) are degenerate, 
and (J=3/2, Jz=3/2) and (J=3/2, Jz=-3/2) also, 
the structure should be the following::

    (J=1/2, Jz=1/2), (J=3/2, Jz=1/2), (J=3/2, Jz=3/2), (J=1/2, Jz=-1/2), (J=3/2, Jz=-1/2), (J=3/2, Jz=-3/2)

This may be fixed in later versions.

Remark 3 - The hybridization function
-------------------------------------

The hybridization function :math:`\Delta` between the bath and the impurity 
has to be given in the particle picture, even though in cthyb the hole
propagator ist needed.

.. math::

  \Delta_{\alpha\beta} (i \omega_n) = \sum_k \frac{V_{k,\alpha} V^*_{k,\beta}}{i \omega_n - \epsilon_{k,\alpha}},

With this, the non-interacting Green's function of the impurity is:

.. math::

  \hat{G}^{-1}_0 (i \omega_n) = i \omega_n + \mu - \hat h - \hat{\Delta}(i \omega_n).
