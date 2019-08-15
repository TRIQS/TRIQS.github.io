..
   Generated automatically by cpp2rst

.. highlight:: c
.. role:: red
.. role:: green
.. role:: param


.. _triqs__gfs__gf_const_view:

triqs::gfs::gf_const_view
=========================

*#include <triqs/gfs.hpp>*

.. rst-class:: cppsynopsis

     template<typename Var, typename Target> class  :red:`gf_const_view`

The const view of a Green function


Template parameters
-------------------

 * **Var**:      The domain of definition

 * **Target**:   The target domain


Member types
------------

+----------------------+---------------------------------------------+-------------------------------------+
| mutable_view_type    | gf_view<Var, Target>                        |                                     |
+----------------------+---------------------------------------------+-------------------------------------+
| const_view_type      | gf_const_view<Var, Target>                  |  Associated const view type         |
+----------------------+---------------------------------------------+-------------------------------------+
| view_type            | gf_const_view<Var, Target>                  |  Associated (non const) view type   |
+----------------------+---------------------------------------------+-------------------------------------+
| regular_type         | gf<Var, Target>                             |  Associated regular type (gf<....>) |
+----------------------+---------------------------------------------+-------------------------------------+
| real_t               | gf_const_view<Var, typename Target::real_t> |  The associated real type           |
+----------------------+---------------------------------------------+-------------------------------------+
| variable_t           | Var                                         |  Template type                      |
+----------------------+---------------------------------------------+-------------------------------------+
| target_t             | Target                                      |  Template type                      |
+----------------------+---------------------------------------------+-------------------------------------+
| mesh_t               | gf_mesh<Var>                                |  Mesh type                          |
+----------------------+---------------------------------------------+-------------------------------------+
| domain_t             | typename mesh_t::domain_t                   |  Domain type                        |
+----------------------+---------------------------------------------+-------------------------------------+
| mesh_point_t         | typename mesh_t::mesh_point_t               |  Type of the mesh point             |
+----------------------+---------------------------------------------+-------------------------------------+
| mesh_index_t         | typename mesh_t::index_t                    |                                     |
+----------------------+---------------------------------------------+-------------------------------------+
| linear_mesh_index_t  | typename mesh_t::linear_index_t             |                                     |
+----------------------+---------------------------------------------+-------------------------------------+
| indices_t            | gf_indices                                  |                                     |
+----------------------+---------------------------------------------+-------------------------------------+
| evaluator_t          | gf_evaluator<Var, Target>                   |                                     |
+----------------------+---------------------------------------------+-------------------------------------+
| scalar_t             | typename Target::scalar_t                   |  Real or Complex                    |
+----------------------+---------------------------------------------+-------------------------------------+
| data_regular_t       | arrays::array<scalar_t, data_rank>          |                                     |
+----------------------+---------------------------------------------+-------------------------------------+
| data_view_t          | typename data_regular_t::view_type          |                                     |
+----------------------+---------------------------------------------+-------------------------------------+
| data_const_view_t    | typename data_regular_t::const_view_type    |                                     |
+----------------------+---------------------------------------------+-------------------------------------+
| data_t               | gf_const_view::data_const_view_t            |  Type of the data array             |
+----------------------+---------------------------------------------+-------------------------------------+
| data_memory_layout_t | memory_layout_t<data_rank>                  |  Type of the memory layout          |
+----------------------+---------------------------------------------+-------------------------------------+
| target_shape_t       | arrays::mini_vector<int, Target::rank>      |                                     |
+----------------------+---------------------------------------------+-------------------------------------+


Member functions
----------------

+---------------------------------------------------------------+--+
| :ref:`(constructor) <triqs__gfs__gf_const_view__constructor>` |  |
+---------------------------------------------------------------+--+
| :ref:`mesh <triqs__gfs__gf_const_view__mesh>`                 |  |
+---------------------------------------------------------------+--+
| :ref:`domain <triqs__gfs__gf_const_view__domain>`             |  |
+---------------------------------------------------------------+--+
| :ref:`indices <triqs__gfs__gf_const_view__indices>`           |  |
+---------------------------------------------------------------+--+
| :ref:`rebind <triqs__gfs__gf_const_view__rebind>`             |  |
+---------------------------------------------------------------+--+
| :ref:`hdf5_scheme <triqs__gfs__gf_const_view__hdf5_scheme>`   |  |
+---------------------------------------------------------------+--+
| :ref:`serialize <triqs__gfs__gf_const_view__serialize>`       |  |
+---------------------------------------------------------------+--+


Accessors
~~~~~~~~~

+-------------------------------------------------------------------+--+
| :ref:`data <triqs__gfs__gf_const_view__data>`                     |  |
+-------------------------------------------------------------------+--+
| :ref:`data_shape <triqs__gfs__gf_const_view__data_shape>`         |  |
+-------------------------------------------------------------------+--+
| :ref:`target_shape <triqs__gfs__gf_const_view__target_shape>`     |  |
+-------------------------------------------------------------------+--+
| :ref:`target_indices <triqs__gfs__gf_const_view__target_indices>` |  |
+-------------------------------------------------------------------+--+
| :ref:`memory_layout <triqs__gfs__gf_const_view__memory_layout>`   |  |
+-------------------------------------------------------------------+--+

.. toctree::
    :hidden:

    gf_const_view/constructor
    gf_const_view/mesh
    gf_const_view/domain
    gf_const_view/data
    gf_const_view/data_shape
    gf_const_view/target_shape
    gf_const_view/target_indices
    gf_const_view/memory_layout
    gf_const_view/indices
    gf_const_view/rebind
    gf_const_view/hdf5_scheme
    gf_const_view/serialize


Non Member functions
--------------------

+---------------------------------------------------------------+--+
| :ref:`h5_write <triqs__gfs__gf_const_view__h5_write>`         |  |
+---------------------------------------------------------------+--+
| :ref:`h5_read <triqs__gfs__gf_const_view__h5_read>`           |  |
+---------------------------------------------------------------+--+
| :ref:`operator\<\< <triqs__gfs__gf_const_view__operatorLTLT>` |  |
+---------------------------------------------------------------+--+

.. toctree::
    :hidden:

    gf_const_view/h5_write
    gf_const_view/h5_read
    gf_const_view/operator<<