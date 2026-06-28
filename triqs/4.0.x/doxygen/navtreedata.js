/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "TRIQS/TRIQS", "index.html", [
    [ "Overview", "index.html", "index" ],
    [ "Integration in C++ projects", "integration.html", [
      [ "CMake", "integration.html#cmake", [
        [ "find_package", "integration.html#find_package", null ]
      ] ]
    ] ],
    [ "Examples", "examples.html", [
      [ "Mesh types", "mesh_ex.html", null ],
      [ "Green's functions", "gf_ex.html", null ]
    ] ],
    [ "API Documentation", "documentation.html", [
      [ "Atomic problem diagonalization", "group__triqs-atom-diag.html", [
        [ "atom_diag::atom_diag", "classtriqs_1_1atom__diag_1_1atom__diag.html", [
          [ "atom_diag::atom_diag::eigensystem_t", "structtriqs_1_1atom__diag_1_1atom__diag_1_1eigensystem__t.html", null ],
          [ "atom_diag::atom_diag::op_block_mat_t", "structtriqs_1_1atom__diag_1_1atom__diag_1_1op__block__mat__t.html", null ]
        ] ]
      ] ],
      [ "Determinant manipulation", "group__triqs-detmanip.html", [
        [ "det_manip::det_manip", "classtriqs_1_1det__manip_1_1det__manip.html", null ],
        [ "det_manip::det_manip_basic", "classtriqs_1_1det__manip_1_1det__manip__basic.html", null ]
      ] ],
      [ "Experimental tools", "group__triqs-experimental.html", [
        [ "Lattice tools (experimental)", "group__triqs-experimental-lattice.html", [
          [ "experimental::lattice::placeholders", "namespacetriqs_1_1experimental_1_1lattice_1_1placeholders.html", null ],
          [ "experimental::lattice::adaptive_options", "structtriqs_1_1experimental_1_1lattice_1_1adaptive__options.html", null ],
          [ "experimental::lattice::bz_int_options", "structtriqs_1_1experimental_1_1lattice_1_1bz__int__options.html", null ],
          [ "experimental::lattice::fourier_polynomial", "classtriqs_1_1experimental_1_1lattice_1_1fourier__polynomial.html", null ],
          [ "experimental::lattice::superlattice", "classtriqs_1_1experimental_1_1lattice_1_1superlattice.html", null ],
          [ "experimental::lattice::tb_hk", "classtriqs_1_1experimental_1_1lattice_1_1tb__hk.html", null ]
        ] ],
        [ "Utilities (experimental)", "group__triqs-experimental-utility.html", [
          [ "experimental::utility::integrate_1d_adapt", "classtriqs_1_1experimental_1_1utility_1_1integrate__1d__adapt.html", null ]
        ] ]
      ] ],
      [ "Green's functions", "group__triqs-gfs.html", [
        [ "GF concepts", "group__triqs-gfs-concepts.html", [
          [ "gfs::BlockGf", "concepttriqs_1_1gfs_1_1BlockGf.html", null ],
          [ "gfs::MemoryGf", "concepttriqs_1_1gfs_1_1MemoryGf.html", null ]
        ] ],
        [ "GF containers", "group__triqs-gfs-containers.html", [
          [ "Block Green's functions", "group__triqs-gfs-block.html", [
            [ "gfs::block_gf", "classtriqs_1_1gfs_1_1block__gf.html", [
              [ "gfs::block_gf::iterator_impl", "classtriqs_1_1gfs_1_1block__gf_1_1iterator__impl.html", null ]
            ] ],
            [ "gfs::block_gf_view", "classtriqs_1_1gfs_1_1block__gf__view.html", [
              [ "gfs::block_gf_view::iterator_impl", "classtriqs_1_1gfs_1_1block__gf__view_1_1iterator__impl.html", null ]
            ] ]
          ] ],
          [ "GF targets", "group__triqs-gfs-targets.html", [
            [ "gfs::_target_from_type_rank", "structtriqs_1_1gfs_1_1__target__from__type__rank.html", null ],
            [ "gfs::matrix_real_valued", "structtriqs_1_1gfs_1_1matrix__real__valued.html", null ],
            [ "gfs::matrix_valued", "structtriqs_1_1gfs_1_1matrix__valued.html", null ],
            [ "gfs::scalar_real_valued", "structtriqs_1_1gfs_1_1scalar__real__valued.html", null ],
            [ "gfs::scalar_valued", "structtriqs_1_1gfs_1_1scalar__valued.html", null ],
            [ "gfs::tensor_real_valued", "structtriqs_1_1gfs_1_1tensor__real__valued.html", null ],
            [ "gfs::tensor_valued", "structtriqs_1_1gfs_1_1tensor__valued.html", null ]
          ] ],
          [ "gfs::gf", "classtriqs_1_1gfs_1_1gf.html", [
            [ "gfs::gf::target_and_shape_t", "structtriqs_1_1gfs_1_1gf_1_1target__and__shape__t.html", null ]
          ] ],
          [ "gfs::gf_const_view", "classtriqs_1_1gfs_1_1gf__const__view.html", [
            [ "gfs::gf_const_view::target_and_shape_t", "structtriqs_1_1gfs_1_1gf__const__view_1_1target__and__shape__t.html", null ]
          ] ],
          [ "gfs::gf_view", "classtriqs_1_1gfs_1_1gf__view.html", [
            [ "gfs::gf_view::target_and_shape_t", "structtriqs_1_1gfs_1_1gf__view_1_1target__and__shape__t.html", null ]
          ] ]
        ] ],
        [ "GF functions", "group__triqs-gfs-functions.html", [
          [ "GF basis conversions", "group__triqs-gfs-basis.html", null ],
          [ "GF density", "group__triqs-gfs-density.html", null ],
          [ "GF reality and hermiticity", "group__triqs-gfs-reality.html", null ],
          [ "GF tail fitting", "group__triqs-gfs-tailfitting.html", null ]
        ] ],
        [ "GF input/output", "group__triqs-gfs-io.html", [
          [ "gfs::gf_h5_rw", "structtriqs_1_1gfs_1_1gf__h5__rw.html", null ]
        ] ],
        [ "GF transforms", "group__triqs-gfs-transforms.html", [
          [ "GF Fourier transform", "group__triqs-gfs-fourier.html", null ],
          [ "GF Legendre-Matsubara transform", "group__triqs-gfs-legendre-matsubara.html", null ],
          [ "GF Padé continuation", "group__triqs-gfs-pade.html", null ]
        ] ],
        [ "GF utilities", "group__triqs-gfs-utils.html", [
          [ "CLEF auto-assignment", "group__triqs-gfs-clef.html", null ],
          [ "GF algebra", "group__triqs-gfs-algebra.html", [
            [ "gfs::bgf_expr", "structtriqs_1_1gfs_1_1bgf__expr.html", null ],
            [ "gfs::bgf_unary_m_expr", "structtriqs_1_1gfs_1_1bgf__unary__m__expr.html", null ],
            [ "gfs::gf_expr", "structtriqs_1_1gfs_1_1gf__expr.html", null ],
            [ "gfs::gf_unary_m_expr", "structtriqs_1_1gfs_1_1gf__unary__m__expr.html", null ],
            [ "gfs::is_gf_expr", "structtriqs_1_1gfs_1_1is__gf__expr.html", null ]
          ] ],
          [ "GF block mapping", "group__triqs-gfs-map.html", null ],
          [ "GF evaluation", "group__triqs-gfs-evaluation.html", [
            [ "gfs::default_evaluator", "structtriqs_1_1gfs_1_1default__evaluator.html", null ],
            [ "gfs::gf_evaluator", "structtriqs_1_1gfs_1_1gf__evaluator.html", null ]
          ] ],
          [ "GF factories", "group__triqs-gfs-factories.html", null ],
          [ "GF MPI support", "group__triqs-gfs-mpi.html", null ],
          [ "GF reshaping and slicing", "group__triqs-gfs-reshape.html", null ],
          [ "GF symmetries", "group__triqs-gfs-symmetry.html", [
            [ "gfs::ScalarGfInitFunc", "concepttriqs_1_1gfs_1_1ScalarGfInitFunc.html", null ],
            [ "gfs::ScalarGfSymmetry", "concepttriqs_1_1gfs_1_1ScalarGfSymmetry.html", null ],
            [ "gfs::TensorGfInitFunc", "concepttriqs_1_1gfs_1_1TensorGfInitFunc.html", null ],
            [ "gfs::TensorGfSymmetry", "concepttriqs_1_1gfs_1_1TensorGfSymmetry.html", null ],
            [ "gfs::sym_grp", "classtriqs_1_1gfs_1_1sym__grp.html", null ]
          ] ],
          [ "gfs::is_instantiation_of", "structtriqs_1_1gfs_1_1is__instantiation__of.html", null ]
        ] ]
      ] ],
      [ "Hilbert space", "group__triqs-hilbert.html", [
        [ "hilbert_space::fundamental_operator_set", "classtriqs_1_1hilbert__space_1_1fundamental__operator__set.html", null ],
        [ "hilbert_space::hilbert_space", "classtriqs_1_1hilbert__space_1_1hilbert__space.html", null ],
        [ "hilbert_space::imperative_operator", "classtriqs_1_1hilbert__space_1_1imperative__operator.html", null ],
        [ "hilbert_space::space_partition", "classtriqs_1_1hilbert__space_1_1space__partition.html", null ],
        [ "hilbert_space::state with nda::vector", "classtriqs_1_1hilbert__space_1_1state_3_01HS_00_01T_00_01false_01_4.html", null ],
        [ "hilbert_space::state with std::unordered_map", "classtriqs_1_1hilbert__space_1_1state_3_01HS_00_01T_00_01true_01_4.html", null ],
        [ "hilbert_space::sub_hilbert_space", "classtriqs_1_1hilbert__space_1_1sub__hilbert__space.html", null ]
      ] ],
      [ "Lattice tools", "group__triqs-lattice.html", [
        [ "lattice::bravais_lattice", "classtriqs_1_1lattice_1_1bravais__lattice.html", [
          [ "lattice::bravais_lattice::point_t", "classtriqs_1_1lattice_1_1bravais__lattice_1_1point__t.html", null ]
        ] ],
        [ "lattice::brillouin_zone", "classtriqs_1_1lattice_1_1brillouin__zone.html", null ],
        [ "lattice::grid_generator", "classtriqs_1_1lattice_1_1grid__generator.html", null ],
        [ "lattice::hopping_dict", "structtriqs_1_1lattice_1_1hopping__dict.html", null ],
        [ "lattice::tight_binding", "classtriqs_1_1lattice_1_1tight__binding.html", null ]
      ] ],
      [ "MC tools", "group__triqs-mc.html", [
        [ "MC concepts", "group__triqs-mc-concepts.html", [
          [ "mc_tools::DoubleOrComplex", "concepttriqs_1_1mc__tools_1_1DoubleOrComplex.html", null ],
          [ "mc_tools::MCMeasure", "concepttriqs_1_1mc__tools_1_1MCMeasure.html", null ],
          [ "mc_tools::MCMove", "concepttriqs_1_1mc__tools_1_1MCMove.html", null ]
        ] ],
        [ "MC measurements", "group__triqs-mc-measures.html", [
          [ "mc_tools::measure", "classtriqs_1_1mc__tools_1_1measure.html", null ],
          [ "mc_tools::measure_aux", "classtriqs_1_1mc__tools_1_1measure__aux.html", null ],
          [ "mc_tools::measure_set", "classtriqs_1_1mc__tools_1_1measure__set.html", null ]
        ] ],
        [ "MC moves", "group__triqs-mc-moves.html", [
          [ "mc_tools::move", "classtriqs_1_1mc__tools_1_1move.html", null ],
          [ "mc_tools::move_set", "classtriqs_1_1mc__tools_1_1move__set.html", null ]
        ] ],
        [ "MC simulation", "group__triqs-mc-simulation.html", [
          [ "mc_tools::mc_generic", "classtriqs_1_1mc__tools_1_1mc__generic.html", [
            [ "mc_tools::mc_generic::run_param_t", "structtriqs_1_1mc__tools_1_1mc__generic_1_1run__param__t.html", null ]
          ] ]
        ] ],
        [ "MC utilities", "group__triqs-mc-utils.html", [
          [ "mc_tools::random_generator", "classtriqs_1_1mc__tools_1_1random__generator.html", null ]
        ] ]
      ] ],
      [ "Meshes", "group__triqs-meshes.html", [
        [ "Mesh concepts", "group__triqs-meshes-concepts.html", [
          [ "mesh::MeshPoint", "concepttriqs_1_1mesh_1_1MeshPoint.html", null ],
          [ "mesh::Mesh", "concepttriqs_1_1mesh_1_1Mesh.html", null ],
          [ "mesh::MeshWithValues", "concepttriqs_1_1mesh_1_1MeshWithValues.html", null ]
        ] ],
        [ "Mesh types", "group__triqs-meshes-types.html", [
          [ "Function space meshes", "group__triqs-meshes-func.html", [
            [ "mesh::dlr", "classtriqs_1_1mesh_1_1dlr.html", [
              [ "mesh::dlr::mesh_point_t", "classtriqs_1_1mesh_1_1dlr_1_1mesh__point__t.html", null ]
            ] ],
            [ "mesh::legendre", "classtriqs_1_1mesh_1_1legendre.html", [
              [ "mesh::legendre::mesh_point_t", "classtriqs_1_1mesh_1_1legendre_1_1mesh__point__t.html", null ]
            ] ]
          ] ],
          [ "Imaginary time and frequency meshes", "group__triqs-meshes-imag.html", [
            [ "Matsubara frequencies", "group__triqs-meshes-matsubara.html", [
              [ "mesh::matsubara_freq", "structtriqs_1_1mesh_1_1matsubara__freq.html", null ]
            ] ],
            [ "mesh::chebyshev", "classtriqs_1_1mesh_1_1chebyshev.html", [
              [ "mesh::chebyshev::mesh_point_t", "classtriqs_1_1mesh_1_1chebyshev_1_1mesh__point__t.html", null ]
            ] ],
            [ "mesh::dlr_imfreq", "classtriqs_1_1mesh_1_1dlr__imfreq.html", [
              [ "mesh::dlr_imfreq::mesh_point_t", "classtriqs_1_1mesh_1_1dlr__imfreq_1_1mesh__point__t.html", null ]
            ] ],
            [ "mesh::dlr_imtime", "classtriqs_1_1mesh_1_1dlr__imtime.html", [
              [ "mesh::dlr_imtime::mesh_point_t", "classtriqs_1_1mesh_1_1dlr__imtime_1_1mesh__point__t.html", null ]
            ] ],
            [ "mesh::imfreq", "classtriqs_1_1mesh_1_1imfreq.html", [
              [ "mesh::imfreq::mesh_point_t", "classtriqs_1_1mesh_1_1imfreq_1_1mesh__point__t.html", null ]
            ] ],
            [ "mesh::imtime", "classtriqs_1_1mesh_1_1imtime.html", null ]
          ] ],
          [ "Lattice meshes", "group__triqs-meshes-lattice.html", [
            [ "k-vector expressions", "group__triqs-meshes-kexpr.html", [
              [ "mesh::BzMeshPoint", "concepttriqs_1_1mesh_1_1BzMeshPoint.html", null ],
              [ "mesh::k_expr", "structtriqs_1_1mesh_1_1k__expr.html", null ],
              [ "mesh::k_expr_unary", "structtriqs_1_1mesh_1_1k__expr__unary.html", null ]
            ] ],
            [ "mesh::brzone", "classtriqs_1_1mesh_1_1brzone.html", [
              [ "mesh::brzone::mesh_point_t", "classtriqs_1_1mesh_1_1brzone_1_1mesh__point__t.html", null ]
            ] ],
            [ "mesh::cyclat", "classtriqs_1_1mesh_1_1cyclat.html", [
              [ "mesh::cyclat::mesh_point_t", "classtriqs_1_1mesh_1_1cyclat_1_1mesh__point__t.html", null ]
            ] ]
          ] ],
          [ "Other mesh types", "group__triqs-meshes-other.html", [
            [ "mesh::detail::linear", "classtriqs_1_1mesh_1_1detail_1_1linear.html", [
              [ "mesh::detail::linear::mesh_point_t", "classtriqs_1_1mesh_1_1detail_1_1linear_1_1mesh__point__t.html", null ]
            ] ],
            [ "mesh::discrete", "classtriqs_1_1mesh_1_1discrete.html", [
              [ "mesh::discrete::mesh_point_t", "classtriqs_1_1mesh_1_1discrete_1_1mesh__point__t.html", null ]
            ] ]
          ] ],
          [ "Product meshes", "group__triqs-meshes-prod.html", [
            [ "mesh::prod", "classtriqs_1_1mesh_1_1prod.html", [
              [ "mesh::prod_mesh_point", "classtriqs_1_1mesh_1_1prod__mesh__point.html", null ]
            ] ]
          ] ],
          [ "Real time and frequency meshes", "group__triqs-meshes-real.html", [
            [ "mesh::refreq", "classtriqs_1_1mesh_1_1refreq.html", null ],
            [ "mesh::refreq_log", "classtriqs_1_1mesh_1_1refreq__log.html", [
              [ "mesh::refreq_log::mesh_point_t", "classtriqs_1_1mesh_1_1refreq__log_1_1mesh__point__t.html", null ]
            ] ],
            [ "mesh::refreq_pts", "classtriqs_1_1mesh_1_1refreq__pts.html", [
              [ "mesh::refreq_pts::mesh_point_t", "classtriqs_1_1mesh_1_1refreq__pts_1_1mesh__point__t.html", null ]
            ] ],
            [ "mesh::retime", "classtriqs_1_1mesh_1_1retime.html", null ]
          ] ]
        ] ],
        [ "Mesh utilities", "group__triqs-meshes-utils.html", [
          [ "mesh::closest_mesh_point_t", "structtriqs_1_1mesh_1_1closest__mesh__point__t.html", null ],
          [ "mesh::energy_t", "structtriqs_1_1mesh_1_1energy__t.html", null ],
          [ "mesh::mesh_iterator", "structtriqs_1_1mesh_1_1mesh__iterator.html", null ]
        ] ],
        [ "Tail fitting tools", "group__triqs-meshes-tailfitting.html", [
          [ "mesh::tail_fitter", "classtriqs_1_1mesh_1_1tail__fitter.html", null ],
          [ "mesh::tail_fitter_handle", "classtriqs_1_1mesh_1_1tail__fitter__handle.html", null ]
        ] ]
      ] ],
      [ "Operators", "group__triqs-ops.html", [
        [ "Many-body operators", "group__triqs-ops-mbo.html", [
          [ "operators::canonical_ops_t", "structtriqs_1_1operators_1_1canonical__ops__t.html", null ],
          [ "operators::many_body_operator_generic", "classtriqs_1_1operators_1_1many__body__operator__generic.html", null ]
        ] ],
        [ "Operator utilities", "group__triqs-ops-extractors.html", null ]
      ] ],
      [ "Statistical analysis tools", "group__triqs-stat.html", [
        [ "Accumulators", "group__triqs-stat-accs.html", [
          [ "stat::lin_binning", "classtriqs_1_1stat_1_1lin__binning.html", null ],
          [ "stat::log_binning", "classtriqs_1_1stat_1_1log__binning.html", null ]
        ] ],
        [ "Concepts", "group__triqs-stat-concepts.html", [
          [ "stat::AccCompatible", "concepttriqs_1_1stat_1_1AccCompatible.html", null ],
          [ "stat::StatCompatible", "concepttriqs_1_1stat_1_1StatCompatible.html", null ],
          [ "stat::StatCompatibleRange", "concepttriqs_1_1stat_1_1StatCompatibleRange.html", null ]
        ] ],
        [ "Mean and error estimation", "group__triqs-stat-meanerr.html", null ],
        [ "Resampling techniques", "group__triqs-stat-resampling.html", null ],
        [ "Utilities", "group__triqs-stat-utils.html", [
          [ "stat::histogram", "classtriqs_1_1stat_1_1histogram.html", null ]
        ] ]
      ] ],
      [ "Test tools", "group__triqs-test-tools.html", null ],
      [ "Utilities", "group__triqs-utility.html", [
        [ "I/O streams", "group__triqs-utility-io.html", [
          [ "utility::debug_stream", "classtriqs_1_1utility_1_1debug__stream.html", null ],
          [ "utility::indented_ostream", "classtriqs_1_1utility_1_1indented__ostream.html", null ],
          [ "utility::report_stream", "classtriqs_1_1utility_1_1report__stream.html", null ]
        ] ],
        [ "Macros and exceptions", "group__triqs-utility-macros.html", [
          [ "exception", "classtriqs_1_1exception.html", null ],
          [ "runtime_error", "classtriqs_1_1runtime__error.html", null ],
          [ "keyboard_interrupt", "classtriqs_1_1keyboard__interrupt.html", null ]
        ] ],
        [ "Math helpers", "group__triqs-utility-math.html", [
          [ "utility::gmp_complex", "structtriqs_1_1utility_1_1gmp__complex.html", null ],
          [ "utility::legendre_generator", "classtriqs_1_1utility_1_1legendre__generator.html", null ],
          [ "utility::pade_approximant", "classtriqs_1_1utility_1_1pade__approximant.html", null ],
          [ "utility::real_or_complex", "classtriqs_1_1utility_1_1real__or__complex.html", null ]
        ] ],
        [ "Other utilities", "group__triqs-utility-other.html", [
          [ "utility::dressed_iterator", "structtriqs_1_1utility_1_1dressed__iterator.html", null ],
          [ "utility::dressed_iterator (no aux)", "structtriqs_1_1utility_1_1dressed__iterator_3_01IteratorType_00_01Dressing_00_01void_01_4.html", null ]
        ] ],
        [ "Runtime utilities", "group__triqs-utility-runtime.html", [
          [ "signal_handler", "namespacetriqs_1_1signal__handler.html", [
            [ "signal_handler::exception", "classtriqs_1_1signal__handler_1_1exception.html", null ]
          ] ],
          [ "utility::crash_logger", "classtriqs_1_1utility_1_1crash__logger.html", null ],
          [ "utility::time_pt", "structtriqs_1_1utility_1_1time__pt.html", null ],
          [ "utility::time_segment", "structtriqs_1_1utility_1_1time__segment.html", null ],
          [ "utility::timer", "classtriqs_1_1utility_1_1timer.html", null ]
        ] ],
        [ "Tuple and variant tools", "group__triqs-utility-tuple.html", [
          [ "utility::overloaded", "structtriqs_1_1utility_1_1overloaded.html", null ]
        ] ],
        [ "Type traits and metaprogramming", "group__triqs-utility-traits.html", [
          [ "utility::tags", "namespacetriqs_1_1utility_1_1tags.html", [
            [ "utility::tags::divides", "structtriqs_1_1utility_1_1tags_1_1divides.html", null ],
            [ "utility::tags::minus", "structtriqs_1_1utility_1_1tags_1_1minus.html", null ],
            [ "utility::tags::multiplies", "structtriqs_1_1utility_1_1tags_1_1multiplies.html", null ],
            [ "utility::tags::plus", "structtriqs_1_1utility_1_1tags_1_1plus.html", null ]
          ] ],
          [ "_and", "structtriqs_1_1__and.html", null ],
          [ "_or", "structtriqs_1_1__or.html", null ],
          [ "count_type_occurrence", "structtriqs_1_1count__type__occurrence.html", null ],
          [ "count_type_occurrence_not", "structtriqs_1_1count__type__occurrence__not.html", null ],
          [ "is_complex", "structtriqs_1_1is__complex.html", null ],
          [ "is_view", "structtriqs_1_1is__view.html", null ],
          [ "is_view_tag", "structtriqs_1_1is__view__tag.html", null ],
          [ "remove_cv_ref", "structtriqs_1_1remove__cv__ref.html", null ],
          [ "utility::callable_traits", "structtriqs_1_1utility_1_1callable__traits.html", null ],
          [ "utility::is_in_ZRC", "structtriqs_1_1utility_1_1is__in__ZRC.html", null ],
          [ "utility::operation", "structtriqs_1_1utility_1_1operation.html", null ],
          [ "utility::remove_rvalue_ref", "structtriqs_1_1utility_1_1remove__rvalue__ref.html", null ],
          [ "utility::scope_guard", "classtriqs_1_1utility_1_1scope__guard.html", null ],
          [ "utility::type_of_mult", "structtriqs_1_1utility_1_1type__of__mult.html", null ]
        ] ]
      ] ],
      [ "File List", "files.html", "files" ]
    ] ],
    [ "Official TRIQS website", "^https://triqs.github.io/triqs/latest/", null ]
  ] ]
];

var NAVTREEINDEX =
[
"MersenneRNG_8cpp.html",
"dir_6ad6efbed23654276a6cfd7144baa173.html",
"group__triqs-utility-traits.html",
"traits_8hpp.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';