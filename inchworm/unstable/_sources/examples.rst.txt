.. _examples:

Examples
********

The scripts below show how to set up and run the ``Solver`` on Anderson
impurity models. Each one builds a hybridization function :math:`\Delta(\tau)`,
defines a local interaction Hamiltonian, runs the Inchworm QMC solver and stores
the results in an HDF5 archive. They can be run in parallel with, e.g.
``mpirun python onesite.py``.

Single-site Anderson impurity model
====================================

.. literalinclude:: ../examples/onesite.py
   :language: python
   :start-at: """Solve

Two-site Anderson impurity model
=================================

.. literalinclude:: ../examples/twosite.py
   :language: python
   :start-at: """Solve
