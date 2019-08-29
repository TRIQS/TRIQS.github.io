..
   Generated automatically by cpp2rst

.. highlight:: c
.. role:: red
.. role:: green
.. role:: param


.. _triqs__gfs__make_hermitian:

triqs::gfs::make_hermitian
==========================

*#include <triqs/gfs.hpp>*



**Synopsis**

 .. rst-class:: cppsynopsis

       | :green:`template<typename G>`
       | typename G::regular_type :red:`make_hermitian` (G const & :param:`g`)





Symmetrize a Green function object :math:`G[i\omega](i,j) \rightarrow \frac{1}{2} ( G[i\omega](i,j) + G[-iw](j,i)^* )`





Template parameters
^^^^^^^^^^^^^^^^^^^

 * :param:`The` Green function type


Parameters
^^^^^^^^^^

 * :param:`g` The Green function object to symmetrize


Returns
^^^^^^^

The symmetrized Green function object