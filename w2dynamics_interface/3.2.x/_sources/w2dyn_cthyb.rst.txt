.. _cthyb:

Preface
=======

w2dynamics is a hybridization-expansion continuous-time quantum Monte Carlo package, developed jointly in Vienna and Würzburg.

The algorithm is conceptually the same as in the implementation of 
`cthyb based on the TRIQS library <https://triqs.github.io/cthyb/master/index.html>`_. 
For an overview look here: 
`A word on the algorithm <https://triqs.github.io/cthyb/master/basicnotions/cthyb.html>`_. 

However there are some mayor differences in implementation, especially in the fermionic trace :math:`\mathrm{Tr} \,
\mathcal{C}`, which will be described below.

A Monte Carlo configuration
:math:`\mathcal{C}` is a set of fermionic operators (in interaction
representation) at different imaginary times:

.. math::

  \mathcal{C} = d^\dagger_{\alpha_1}(\tau_1) d_{\alpha'_1}(\tau'_1) d^\dagger_{\alpha_2}(\tau_2)
                d^\dagger_{\alpha_3}(\tau_3) \ldots d_{\alpha}(\tau_N)

triqs_cthyb calculates :math:`\mathrm{Tr} \, \mathcal{C} = \sum_n <n|\mathcal{C}|n>` in a matrix-matrix algorithm, 
i.e. it multiplies the matrix representations of the operators to save them in a binary tree, 
and in the very end contracting one matrix with the eigenstates :math:`|n>`.
w2dyn_cthyb performs matrix-vector operations by multiplying the matrix representations of the operators repeatedly on the states.

w2dyn_cthyb employs an importance sampling of the sum over the outer states :math:`|n>` (superstate-sampling or state-sampling algorithm [#sss]_), whereas triqs_cthyb performs this sum explicitely.

triqs_cthyb uses the lazy trace evaluation of 
[#haule]_ not to waste time calculating the exact trace for very unlikely configurations,
whereas w2dyn_cthyb uses the sliding window technique by Hiroshi Shinaoka to propose updates local in imaginary time 
[#shina]_.








.. [#haule] `P Sémon, CH Yee, K Haule, and AMS Tremblay, Phys. Rev. B 90, 075149 <https://journals.aps.org/prb/abstract/10.1103/PhysRevB.90.075149>`_ 
.. [#shina] `H Shinaoka, M Dolfi, M Troyer and P Werner, <https://iopscience.iop.org/article/10.1088/1742-5468/2014/06/P06012/meta>`_
.. [#sss] `A. Kowalski, A. Hausoel, M. Wallerberger, P. Gunacker, G. Sangiovanni, arxiv:1807.00361 (2019) <https://arxiv.org/abs/1807.00361>`_
