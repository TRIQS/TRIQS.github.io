.. _aim_G4iw_ph:

Measuring the two-particle Green's function for our AIM example
===============================================================

Let us revisit the :ref:`example <aim>` of a one-orbital Anderson
impurity embedded in a flat (Wilson) conduction bath and look at all
the changes to the Python :download:`script <aim_G4iw_ph.py>` needed
to calculate the two-particle Green's function in particle-hole
frequency convention using worm sampling:

.. literalinclude:: aim_G4iw_ph.py

Running this script takes about 5 minutes and generates an HDF5
archive file called :file:`aim_2p_solution.h5`. This file contains the
two-particle Green's function on two fermionic and one bosonic
frequency.

In detail, necessary or useful changes to calculate the two-particle
Green's function in addition to or instead of the one-particle Green's
function are:

.. literalinclude:: aim_G4iw_ph.py
  :lines: 23

The length of one cycle can be reduced considerably as we use worm
sampling, so even in cases where the hybridization operators of the
configuration have not changed much since the last measurement, the
change of the position of the worm operators can lead to a
significantly different contribution to the measurement.

.. literalinclude:: aim_G4iw_ph.py
  :lines: 25-27

Here, we set the parameter that enables measurement of the
two-particle Green's function in particle-hole convention, which we
have to do explicitly, and the number of bosonic and fermionic
Matsubara frequencies. The numbers of frequencies here are the same as
the default values, which will lead to a result with one bosonic
Matsubara axis with a total (including negative) of 59 frequencies and
two fermionic Matsubara axes with a total of 60 frequencies each.

.. literalinclude:: aim_G4iw_ph.py
  :lines: 29-30

We additionally turn off the measurement of the two one-particle
quantities that would usually be measured by default, so the part of
the calculation where partition function configurations are sampled
can be skipped entirely, as this interface can currently only be used
to measure the two-particle Green's function using worm sampling. If
we wanted to measure the one-particle Green's function in the same
solver call (and with the same parameters, including ``length_cycle``,
which may not be ideal), we could also leave these parameters at their
default values.

.. literalinclude:: aim_G4iw_ph.py
  :lines: 35

Finally, in order to write it to an HDF5 file, we access the
two-particle Green's function, which is stored in the solver object's
attribute ``S.G2_iw_ph`` as a ``Block2Gf`` after the call to
``solve()``. Additionally, if the calculation was parallelized using
MPI, we could also read estimates for the standard errors from
``S.G2_iw_ph_error``.

It should be noted that the measurement of the two-particle Green's
function is currently only available for models with diagonal
hybridization and a diagonal quadratic part of the local
Hamiltonian. As the interface does not try to identify this case
automatically, all blocks in the block structure must have size 1 or
the solver will terminate when the calculation is attempted.
