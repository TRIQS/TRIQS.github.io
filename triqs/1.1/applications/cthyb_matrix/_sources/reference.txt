.. _ctqmc_ref:

The Solver class
=================

.. autoclass:: pytriqs.applications.impurity_solvers.cthyb_matrix.Solver
  :members: 

Constructor
-----------

The constructor takes the following entries:

  =================  ==============  ============   ============================================================
  Key                Type             Default       Documentation
  =================  ==============  ============   ============================================================
  beta               float            compulsory    The inverse temperature
  gf_struct          float            compulsory    The structure of the Green's functions
  n_w                int              1025          The number of Matsubara frequencies
  =================  ==============  ============   ============================================================

The solving method
------------------

After it's constructed the solver is launched with the ``solve`` method
which has the following possible entries:

  ==================================  =====================  ==========  ============================================================
  Key                                 Default                Type        Documentation
  ==================================  =====================  ==========  ============================================================
  H_local                             compulsory             operator    The local Hamiltonian
  quantum_numbers                     compulsory             dict        A dictionary of quantum numbers
  n_cycles                            compulsory             int         Number of QMC cycles
  length_cycle                        200                    int         Length of one QMC cycle
  n_warmup_cycles                     1000                   int         Number of warming cycles
  random_seed                         34788                  int         Seed for the random generator
  random_name                         ""                     str         Name of the random number generator
  legendre_accumulation               true                   bool        Do we accumulate in legendre?
  n_legendre                          30                     int         Number of Legendre coefficients that are used in practice
  time_accumulation                   false                  bool        Do we accumulate in imaginary-time?
  fit_start                           50                     int         Frequency at which the fit starts
  fit_stop                            100                    int         Frequency at which the fit stops
  measured_operators                  {}                     dict        A dict of operators that will be averaged
  use_segment_picture                 False                  bool        Guarantee is made that the C^+ C alternate in each config
  ==================================  =====================  ==========  ============================================================
