..
   Generated automatically by cpp2rst

.. highlight:: c
.. role:: red
.. role:: green
.. role:: param


.. _triqs__gfs__gf:

triqs::gfs::gf
==============

*#include <triqs/gfs.hpp>*

.. rst-class:: cppsynopsis

     template<typename Var, typename Target> class  :red:`gf`

The Green function container.


Template parameters
-------------------

 * **Var**:      The domain of definition

 * **Target**:   The target domain


Member types
------------

+----------------------+----------------------------------------+-------------------------------------+
| mutable_view_type    | gf_view<Var, Target>                   |                                     |
+----------------------+----------------------------------------+-------------------------------------+
| const_view_type      | gf_const_view<Var, Target>             |  Associated const view type         |
+----------------------+----------------------------------------+-------------------------------------+
| view_type            | gf_view<Var, Target>                   |  Associated (non const) view type   |
+----------------------+----------------------------------------+-------------------------------------+
| regular_type         | gf<Var, Target>                        |  Associated regular type (gf<....>) |
+----------------------+----------------------------------------+-------------------------------------+
| real_t               | gf<Var, typename Target::real_t>       |  The associated real type           |
+----------------------+----------------------------------------+-------------------------------------+
| variable_t           | Var                                    |  Template type                      |
+----------------------+----------------------------------------+-------------------------------------+
| target_t             | Target                                 |  Template type                      |
+----------------------+----------------------------------------+-------------------------------------+
| mesh_t               | gf_mesh<Var>                           |  Mesh type                          |
+----------------------+----------------------------------------+-------------------------------------+
| domain_t             | typename mesh_t::domain_t              |  Domain type                        |
+----------------------+----------------------------------------+-------------------------------------+
| mesh_point_t         | typename mesh_t::mesh_point_t          |  Type of the mesh point             |
+----------------------+----------------------------------------+-------------------------------------+
| mesh_index_t         | typename mesh_t::index_t               |                                     |
+----------------------+----------------------------------------+-------------------------------------+
| linear_mesh_index_t  | typename mesh_t::linear_index_t        |                                     |
+----------------------+----------------------------------------+-------------------------------------+
| indices_t            | gf_indices                             |                                     |
+----------------------+----------------------------------------+-------------------------------------+
| evaluator_t          | gf_evaluator<Var, Target>              |                                     |
+----------------------+----------------------------------------+-------------------------------------+
| scalar_t             | typename Target::scalar_t              |  Real or Complex                    |
+----------------------+----------------------------------------+-------------------------------------+
| data_t               | arrays::array<scalar_t, data_rank>     |  Type of the data array             |
+----------------------+----------------------------------------+-------------------------------------+
| data_memory_layout_t | memory_layout_t<data_rank>             |  Type of the memory layout          |
+----------------------+----------------------------------------+-------------------------------------+
| target_shape_t       | arrays::mini_vector<int, Target::rank> |                                     |
+----------------------+----------------------------------------+-------------------------------------+


Member functions
----------------

+----------------------------------------------------+--+
| :ref:`(constructor) <triqs__gfs__gf__constructor>` |  |
+----------------------------------------------------+--+
| :ref:`mesh <triqs__gfs__gf__mesh>`                 |  |
+----------------------------------------------------+--+
| :ref:`domain <triqs__gfs__gf__domain>`             |  |
+----------------------------------------------------+--+
| :ref:`indices <triqs__gfs__gf__indices>`           |  |
+----------------------------------------------------+--+
| :ref:`operator= <triqs__gfs__gf__operator=>`       |  |
+----------------------------------------------------+--+
| :ref:`hdf5_scheme <triqs__gfs__gf__hdf5_scheme>`   |  |
+----------------------------------------------------+--+
| :ref:`serialize <triqs__gfs__gf__serialize>`       |  |
+----------------------------------------------------+--+


Accessors
~~~~~~~~~

+--------------------------------------------------------+--+
| :ref:`data <triqs__gfs__gf__data>`                     |  |
+--------------------------------------------------------+--+
| :ref:`data_shape <triqs__gfs__gf__data_shape>`         |  |
+--------------------------------------------------------+--+
| :ref:`target_shape <triqs__gfs__gf__target_shape>`     |  |
+--------------------------------------------------------+--+
| :ref:`target_indices <triqs__gfs__gf__target_indices>` |  |
+--------------------------------------------------------+--+
| :ref:`memory_layout <triqs__gfs__gf__memory_layout>`   |  |
+--------------------------------------------------------+--+

.. toctree::
    :hidden:

    gf/constructor
    gf/mesh
    gf/domain
    gf/data
    gf/data_shape
    gf/target_shape
    gf/target_indices
    gf/memory_layout
    gf/indices
    gf/operator=
    gf/hdf5_scheme
    gf/serialize


Non Member functions
--------------------

+----------------------------------------------------+--+
| :ref:`swap <triqs__gfs__gf__swap>`                 |  |
+----------------------------------------------------+--+
| :ref:`h5_write <triqs__gfs__gf__h5_write>`         |  |
+----------------------------------------------------+--+
| :ref:`h5_read <triqs__gfs__gf__h5_read>`           |  |
+----------------------------------------------------+--+
| :ref:`operator\<\< <triqs__gfs__gf__operatorLTLT>` |  |
+----------------------------------------------------+--+

.. toctree::
    :hidden:

    gf/swap
    gf/h5_write
    gf/h5_read
    gf/operator<<