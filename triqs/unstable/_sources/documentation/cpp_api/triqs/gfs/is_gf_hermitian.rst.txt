..
   Generated automatically by cpp2rst

.. highlight:: c
.. role:: red
.. role:: green
.. role:: param


.. _triqs__gfs__is_gf_hermitian:

triqs::gfs::is_gf_hermitian
===========================

*#include <triqs/gfs.hpp>*



**Synopsis**

 .. rst-class:: cppsynopsis

       | :green:`template<typename G>`
       | bool :red:`is_gf_hermitian` (G const & :param:`g`, double :param:`tolerance` = 1.e-13)





Test if a Green function object fullfills the fundamental property G[iw](i,j) = conj(G[-iw](i,j))
up to a tolerance :math:`\epsilon`





Template parameters
^^^^^^^^^^^^^^^^^^^

 * :param:`The` Green function type


Parameters
^^^^^^^^^^

 * :param:`g` The Green function object to check the symmetry for

 * :param:`tolerance` The tolerance :math:`\epsilon` for the check


Returns
^^^^^^^

true iif

.. math::
		\forall n,\; \max_{ab}|g^*_{ba}(-i\omega_n)-g_{ab}(i\omega_n)|<\epsilon

..