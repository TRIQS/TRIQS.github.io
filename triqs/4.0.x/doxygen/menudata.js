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
var menudata={children:[
{text:"Main Page",url:"index.html"},
{text:"Integration in C++ projects",url:"integration.html",children:[
{text:"CMake",url:"integration.html#cmake",children:[
{text:"find_package",url:"integration.html#find_package"}]}]},
{text:"Examples",url:"examples.html",children:[
{text:"Mesh types",url:"mesh_ex.html"},
{text:"Green's functions",url:"gf_ex.html"}]},
{text:"API Documentation",url:"documentation.html",children:[
{text:"Atomic problem diagonalization",url:"group__triqs-atom-diag.html",children:[
{text:"atom_diag::atom_diag",url:"classtriqs_1_1atom__diag_1_1atom__diag.html",children:[
{text:"atom_diag::atom_diag::eigensystem_t",url:"structtriqs_1_1atom__diag_1_1atom__diag_1_1eigensystem__t.html"},
{text:"atom_diag::atom_diag::op_block_mat_t",url:"structtriqs_1_1atom__diag_1_1atom__diag_1_1op__block__mat__t.html"}]}]},
{text:"Determinant manipulation",url:"group__triqs-detmanip.html",children:[
{text:"det_manip::det_manip",url:"classtriqs_1_1det__manip_1_1det__manip.html"},
{text:"det_manip::det_manip_basic",url:"classtriqs_1_1det__manip_1_1det__manip__basic.html"}]},
{text:"Experimental tools",url:"group__triqs-experimental.html",children:[
{text:"Lattice tools (experimental)",url:"group__triqs-experimental-lattice.html",children:[
{text:"experimental::lattice::placeholders",url:"namespacetriqs_1_1experimental_1_1lattice_1_1placeholders.html"},
{text:"experimental::lattice::adaptive_options",url:"structtriqs_1_1experimental_1_1lattice_1_1adaptive__options.html"},
{text:"experimental::lattice::bz_int_options",url:"structtriqs_1_1experimental_1_1lattice_1_1bz__int__options.html"},
{text:"experimental::lattice::fourier_polynomial",url:"classtriqs_1_1experimental_1_1lattice_1_1fourier__polynomial.html"},
{text:"experimental::lattice::superlattice",url:"classtriqs_1_1experimental_1_1lattice_1_1superlattice.html"},
{text:"experimental::lattice::tb_hk",url:"classtriqs_1_1experimental_1_1lattice_1_1tb__hk.html"}]},
{text:"Utilities (experimental)",url:"group__triqs-experimental-utility.html",children:[
{text:"experimental::utility::integrate_1d_adapt",url:"classtriqs_1_1experimental_1_1utility_1_1integrate__1d__adapt.html"}]}]},
{text:"Green's functions",url:"group__triqs-gfs.html",children:[
{text:"GF concepts",url:"group__triqs-gfs-concepts.html",children:[
{text:"gfs::BlockGf",url:"concepttriqs_1_1gfs_1_1BlockGf.html"},
{text:"gfs::MemoryGf",url:"concepttriqs_1_1gfs_1_1MemoryGf.html"}]},
{text:"GF containers",url:"group__triqs-gfs-containers.html",children:[
{text:"Block Green's functions",url:"group__triqs-gfs-block.html",children:[
{text:"gfs::block_gf",url:"classtriqs_1_1gfs_1_1block__gf.html",children:[
{text:"gfs::block_gf::iterator_impl",url:"classtriqs_1_1gfs_1_1block__gf_1_1iterator__impl.html"}]},
{text:"gfs::block_gf_view",url:"classtriqs_1_1gfs_1_1block__gf__view.html",children:[
{text:"gfs::block_gf_view::iterator_impl",url:"classtriqs_1_1gfs_1_1block__gf__view_1_1iterator__impl.html"}]}]},
{text:"GF targets",url:"group__triqs-gfs-targets.html",children:[
{text:"gfs::_target_from_type_rank",url:"structtriqs_1_1gfs_1_1__target__from__type__rank.html"},
{text:"gfs::matrix_real_valued",url:"structtriqs_1_1gfs_1_1matrix__real__valued.html"},
{text:"gfs::matrix_valued",url:"structtriqs_1_1gfs_1_1matrix__valued.html"},
{text:"gfs::scalar_real_valued",url:"structtriqs_1_1gfs_1_1scalar__real__valued.html"},
{text:"gfs::scalar_valued",url:"structtriqs_1_1gfs_1_1scalar__valued.html"},
{text:"gfs::tensor_real_valued",url:"structtriqs_1_1gfs_1_1tensor__real__valued.html"},
{text:"gfs::tensor_valued",url:"structtriqs_1_1gfs_1_1tensor__valued.html"}]},
{text:"gfs::gf",url:"classtriqs_1_1gfs_1_1gf.html",children:[
{text:"gfs::gf::target_and_shape_t",url:"structtriqs_1_1gfs_1_1gf_1_1target__and__shape__t.html"}]},
{text:"gfs::gf_const_view",url:"classtriqs_1_1gfs_1_1gf__const__view.html",children:[
{text:"gfs::gf_const_view::target_and_shape_t",url:"structtriqs_1_1gfs_1_1gf__const__view_1_1target__and__shape__t.html"}]},
{text:"gfs::gf_view",url:"classtriqs_1_1gfs_1_1gf__view.html",children:[
{text:"gfs::gf_view::target_and_shape_t",url:"structtriqs_1_1gfs_1_1gf__view_1_1target__and__shape__t.html"}]}]},
{text:"GF functions",url:"group__triqs-gfs-functions.html",children:[
{text:"GF basis conversions",url:"group__triqs-gfs-basis.html"},
{text:"GF density",url:"group__triqs-gfs-density.html"},
{text:"GF reality and hermiticity",url:"group__triqs-gfs-reality.html"},
{text:"GF tail fitting",url:"group__triqs-gfs-tailfitting.html"}]},
{text:"GF input/output",url:"group__triqs-gfs-io.html",children:[
{text:"gfs::gf_h5_rw",url:"structtriqs_1_1gfs_1_1gf__h5__rw.html"}]},
{text:"GF transforms",url:"group__triqs-gfs-transforms.html",children:[
{text:"GF Fourier transform",url:"group__triqs-gfs-fourier.html"},
{text:"GF Legendre-Matsubara transform",url:"group__triqs-gfs-legendre-matsubara.html"},
{text:"GF Padé continuation",url:"group__triqs-gfs-pade.html"}]},
{text:"GF utilities",url:"group__triqs-gfs-utils.html",children:[
{text:"CLEF auto-assignment",url:"group__triqs-gfs-clef.html"},
{text:"GF algebra",url:"group__triqs-gfs-algebra.html",children:[
{text:"gfs::bgf_expr",url:"structtriqs_1_1gfs_1_1bgf__expr.html"},
{text:"gfs::bgf_unary_m_expr",url:"structtriqs_1_1gfs_1_1bgf__unary__m__expr.html"},
{text:"gfs::gf_expr",url:"structtriqs_1_1gfs_1_1gf__expr.html"},
{text:"gfs::gf_unary_m_expr",url:"structtriqs_1_1gfs_1_1gf__unary__m__expr.html"},
{text:"gfs::is_gf_expr",url:"structtriqs_1_1gfs_1_1is__gf__expr.html"}]},
{text:"GF block mapping",url:"group__triqs-gfs-map.html"},
{text:"GF evaluation",url:"group__triqs-gfs-evaluation.html",children:[
{text:"gfs::default_evaluator",url:"structtriqs_1_1gfs_1_1default__evaluator.html"},
{text:"gfs::gf_evaluator",url:"structtriqs_1_1gfs_1_1gf__evaluator.html"}]},
{text:"GF factories",url:"group__triqs-gfs-factories.html"},
{text:"GF MPI support",url:"group__triqs-gfs-mpi.html"},
{text:"GF reshaping and slicing",url:"group__triqs-gfs-reshape.html"},
{text:"GF symmetries",url:"group__triqs-gfs-symmetry.html",children:[
{text:"gfs::ScalarGfInitFunc",url:"concepttriqs_1_1gfs_1_1ScalarGfInitFunc.html"},
{text:"gfs::ScalarGfSymmetry",url:"concepttriqs_1_1gfs_1_1ScalarGfSymmetry.html"},
{text:"gfs::TensorGfInitFunc",url:"concepttriqs_1_1gfs_1_1TensorGfInitFunc.html"},
{text:"gfs::TensorGfSymmetry",url:"concepttriqs_1_1gfs_1_1TensorGfSymmetry.html"},
{text:"gfs::sym_grp",url:"classtriqs_1_1gfs_1_1sym__grp.html"}]},
{text:"gfs::is_instantiation_of",url:"structtriqs_1_1gfs_1_1is__instantiation__of.html"}]}]},
{text:"Hilbert space",url:"group__triqs-hilbert.html",children:[
{text:"hilbert_space::fundamental_operator_set",url:"classtriqs_1_1hilbert__space_1_1fundamental__operator__set.html"},
{text:"hilbert_space::hilbert_space",url:"classtriqs_1_1hilbert__space_1_1hilbert__space.html"},
{text:"hilbert_space::imperative_operator",url:"classtriqs_1_1hilbert__space_1_1imperative__operator.html"},
{text:"hilbert_space::space_partition",url:"classtriqs_1_1hilbert__space_1_1space__partition.html"},
{text:"hilbert_space::state with nda::vector",url:"classtriqs_1_1hilbert__space_1_1state_3_01HS_00_01T_00_01false_01_4.html"},
{text:"hilbert_space::state with std::unordered_map",url:"classtriqs_1_1hilbert__space_1_1state_3_01HS_00_01T_00_01true_01_4.html"},
{text:"hilbert_space::sub_hilbert_space",url:"classtriqs_1_1hilbert__space_1_1sub__hilbert__space.html"}]},
{text:"Lattice tools",url:"group__triqs-lattice.html",children:[
{text:"lattice::bravais_lattice",url:"classtriqs_1_1lattice_1_1bravais__lattice.html",children:[
{text:"lattice::bravais_lattice::point_t",url:"classtriqs_1_1lattice_1_1bravais__lattice_1_1point__t.html"}]},
{text:"lattice::brillouin_zone",url:"classtriqs_1_1lattice_1_1brillouin__zone.html"},
{text:"lattice::grid_generator",url:"classtriqs_1_1lattice_1_1grid__generator.html"},
{text:"lattice::hopping_dict",url:"structtriqs_1_1lattice_1_1hopping__dict.html"},
{text:"lattice::tight_binding",url:"classtriqs_1_1lattice_1_1tight__binding.html"}]},
{text:"MC tools",url:"group__triqs-mc.html",children:[
{text:"MC concepts",url:"group__triqs-mc-concepts.html",children:[
{text:"mc_tools::DoubleOrComplex",url:"concepttriqs_1_1mc__tools_1_1DoubleOrComplex.html"},
{text:"mc_tools::MCMeasure",url:"concepttriqs_1_1mc__tools_1_1MCMeasure.html"},
{text:"mc_tools::MCMove",url:"concepttriqs_1_1mc__tools_1_1MCMove.html"}]},
{text:"MC measurements",url:"group__triqs-mc-measures.html",children:[
{text:"mc_tools::measure",url:"classtriqs_1_1mc__tools_1_1measure.html"},
{text:"mc_tools::measure_aux",url:"classtriqs_1_1mc__tools_1_1measure__aux.html"},
{text:"mc_tools::measure_set",url:"classtriqs_1_1mc__tools_1_1measure__set.html"}]},
{text:"MC moves",url:"group__triqs-mc-moves.html",children:[
{text:"mc_tools::move",url:"classtriqs_1_1mc__tools_1_1move.html"},
{text:"mc_tools::move_set",url:"classtriqs_1_1mc__tools_1_1move__set.html"}]},
{text:"MC simulation",url:"group__triqs-mc-simulation.html",children:[
{text:"mc_tools::mc_generic",url:"classtriqs_1_1mc__tools_1_1mc__generic.html",children:[
{text:"mc_tools::mc_generic::run_param_t",url:"structtriqs_1_1mc__tools_1_1mc__generic_1_1run__param__t.html"}]}]},
{text:"MC utilities",url:"group__triqs-mc-utils.html",children:[
{text:"mc_tools::random_generator",url:"classtriqs_1_1mc__tools_1_1random__generator.html"}]}]},
{text:"Meshes",url:"group__triqs-meshes.html",children:[
{text:"Mesh concepts",url:"group__triqs-meshes-concepts.html",children:[
{text:"mesh::MeshPoint",url:"concepttriqs_1_1mesh_1_1MeshPoint.html"},
{text:"mesh::Mesh",url:"concepttriqs_1_1mesh_1_1Mesh.html"},
{text:"mesh::MeshWithValues",url:"concepttriqs_1_1mesh_1_1MeshWithValues.html"}]},
{text:"Mesh types",url:"group__triqs-meshes-types.html",children:[
{text:"Function space meshes",url:"group__triqs-meshes-func.html",children:[
{text:"mesh::dlr",url:"classtriqs_1_1mesh_1_1dlr.html",children:[
{text:"mesh::dlr::mesh_point_t",url:"classtriqs_1_1mesh_1_1dlr_1_1mesh__point__t.html"}]},
{text:"mesh::legendre",url:"classtriqs_1_1mesh_1_1legendre.html",children:[
{text:"mesh::legendre::mesh_point_t",url:"classtriqs_1_1mesh_1_1legendre_1_1mesh__point__t.html"}]}]},
{text:"Imaginary time and frequency meshes",url:"group__triqs-meshes-imag.html",children:[
{text:"Matsubara frequencies",url:"group__triqs-meshes-matsubara.html",children:[
{text:"mesh::matsubara_freq",url:"structtriqs_1_1mesh_1_1matsubara__freq.html"}]},
{text:"mesh::chebyshev",url:"classtriqs_1_1mesh_1_1chebyshev.html",children:[
{text:"mesh::chebyshev::mesh_point_t",url:"classtriqs_1_1mesh_1_1chebyshev_1_1mesh__point__t.html"}]},
{text:"mesh::dlr_imfreq",url:"classtriqs_1_1mesh_1_1dlr__imfreq.html",children:[
{text:"mesh::dlr_imfreq::mesh_point_t",url:"classtriqs_1_1mesh_1_1dlr__imfreq_1_1mesh__point__t.html"}]},
{text:"mesh::dlr_imtime",url:"classtriqs_1_1mesh_1_1dlr__imtime.html",children:[
{text:"mesh::dlr_imtime::mesh_point_t",url:"classtriqs_1_1mesh_1_1dlr__imtime_1_1mesh__point__t.html"}]},
{text:"mesh::imfreq",url:"classtriqs_1_1mesh_1_1imfreq.html",children:[
{text:"mesh::imfreq::mesh_point_t",url:"classtriqs_1_1mesh_1_1imfreq_1_1mesh__point__t.html"}]},
{text:"mesh::imtime",url:"classtriqs_1_1mesh_1_1imtime.html"}]},
{text:"Lattice meshes",url:"group__triqs-meshes-lattice.html",children:[
{text:"k-vector expressions",url:"group__triqs-meshes-kexpr.html",children:[
{text:"mesh::BzMeshPoint",url:"concepttriqs_1_1mesh_1_1BzMeshPoint.html"},
{text:"mesh::k_expr",url:"structtriqs_1_1mesh_1_1k__expr.html"},
{text:"mesh::k_expr_unary",url:"structtriqs_1_1mesh_1_1k__expr__unary.html"}]},
{text:"mesh::brzone",url:"classtriqs_1_1mesh_1_1brzone.html",children:[
{text:"mesh::brzone::mesh_point_t",url:"classtriqs_1_1mesh_1_1brzone_1_1mesh__point__t.html"}]},
{text:"mesh::cyclat",url:"classtriqs_1_1mesh_1_1cyclat.html",children:[
{text:"mesh::cyclat::mesh_point_t",url:"classtriqs_1_1mesh_1_1cyclat_1_1mesh__point__t.html"}]}]},
{text:"Other mesh types",url:"group__triqs-meshes-other.html",children:[
{text:"mesh::detail::linear",url:"classtriqs_1_1mesh_1_1detail_1_1linear.html",children:[
{text:"mesh::detail::linear::mesh_point_t",url:"classtriqs_1_1mesh_1_1detail_1_1linear_1_1mesh__point__t.html"}]},
{text:"mesh::discrete",url:"classtriqs_1_1mesh_1_1discrete.html",children:[
{text:"mesh::discrete::mesh_point_t",url:"classtriqs_1_1mesh_1_1discrete_1_1mesh__point__t.html"}]}]},
{text:"Product meshes",url:"group__triqs-meshes-prod.html",children:[
{text:"mesh::prod",url:"classtriqs_1_1mesh_1_1prod.html",children:[
{text:"mesh::prod_mesh_point",url:"classtriqs_1_1mesh_1_1prod__mesh__point.html"}]}]},
{text:"Real time and frequency meshes",url:"group__triqs-meshes-real.html",children:[
{text:"mesh::refreq",url:"classtriqs_1_1mesh_1_1refreq.html"},
{text:"mesh::refreq_log",url:"classtriqs_1_1mesh_1_1refreq__log.html",children:[
{text:"mesh::refreq_log::mesh_point_t",url:"classtriqs_1_1mesh_1_1refreq__log_1_1mesh__point__t.html"}]},
{text:"mesh::refreq_pts",url:"classtriqs_1_1mesh_1_1refreq__pts.html",children:[
{text:"mesh::refreq_pts::mesh_point_t",url:"classtriqs_1_1mesh_1_1refreq__pts_1_1mesh__point__t.html"}]},
{text:"mesh::retime",url:"classtriqs_1_1mesh_1_1retime.html"}]}]},
{text:"Mesh utilities",url:"group__triqs-meshes-utils.html",children:[
{text:"mesh::closest_mesh_point_t",url:"structtriqs_1_1mesh_1_1closest__mesh__point__t.html"},
{text:"mesh::energy_t",url:"structtriqs_1_1mesh_1_1energy__t.html"},
{text:"mesh::mesh_iterator",url:"structtriqs_1_1mesh_1_1mesh__iterator.html"}]},
{text:"Tail fitting tools",url:"group__triqs-meshes-tailfitting.html",children:[
{text:"mesh::tail_fitter",url:"classtriqs_1_1mesh_1_1tail__fitter.html"},
{text:"mesh::tail_fitter_handle",url:"classtriqs_1_1mesh_1_1tail__fitter__handle.html"}]}]},
{text:"Operators",url:"group__triqs-ops.html",children:[
{text:"Many-body operators",url:"group__triqs-ops-mbo.html",children:[
{text:"operators::canonical_ops_t",url:"structtriqs_1_1operators_1_1canonical__ops__t.html"},
{text:"operators::many_body_operator_generic",url:"classtriqs_1_1operators_1_1many__body__operator__generic.html"}]},
{text:"Operator utilities",url:"group__triqs-ops-extractors.html"}]},
{text:"Statistical analysis tools",url:"group__triqs-stat.html",children:[
{text:"Accumulators",url:"group__triqs-stat-accs.html",children:[
{text:"stat::lin_binning",url:"classtriqs_1_1stat_1_1lin__binning.html"},
{text:"stat::log_binning",url:"classtriqs_1_1stat_1_1log__binning.html"}]},
{text:"Concepts",url:"group__triqs-stat-concepts.html",children:[
{text:"stat::AccCompatible",url:"concepttriqs_1_1stat_1_1AccCompatible.html"},
{text:"stat::StatCompatible",url:"concepttriqs_1_1stat_1_1StatCompatible.html"},
{text:"stat::StatCompatibleRange",url:"concepttriqs_1_1stat_1_1StatCompatibleRange.html"}]},
{text:"Mean and error estimation",url:"group__triqs-stat-meanerr.html"},
{text:"Resampling techniques",url:"group__triqs-stat-resampling.html"},
{text:"Utilities",url:"group__triqs-stat-utils.html",children:[
{text:"stat::histogram",url:"classtriqs_1_1stat_1_1histogram.html"}]}]},
{text:"Test tools",url:"group__triqs-test-tools.html"},
{text:"Utilities",url:"group__triqs-utility.html",children:[
{text:"I/O streams",url:"group__triqs-utility-io.html",children:[
{text:"utility::debug_stream",url:"classtriqs_1_1utility_1_1debug__stream.html"},
{text:"utility::indented_ostream",url:"classtriqs_1_1utility_1_1indented__ostream.html"},
{text:"utility::report_stream",url:"classtriqs_1_1utility_1_1report__stream.html"}]},
{text:"Macros and exceptions",url:"group__triqs-utility-macros.html",children:[
{text:"exception",url:"classtriqs_1_1exception.html"},
{text:"runtime_error",url:"classtriqs_1_1runtime__error.html"},
{text:"keyboard_interrupt",url:"classtriqs_1_1keyboard__interrupt.html"}]},
{text:"Math helpers",url:"group__triqs-utility-math.html",children:[
{text:"utility::gmp_complex",url:"structtriqs_1_1utility_1_1gmp__complex.html"},
{text:"utility::legendre_generator",url:"classtriqs_1_1utility_1_1legendre__generator.html"},
{text:"utility::pade_approximant",url:"classtriqs_1_1utility_1_1pade__approximant.html"},
{text:"utility::real_or_complex",url:"classtriqs_1_1utility_1_1real__or__complex.html"}]},
{text:"Other utilities",url:"group__triqs-utility-other.html",children:[
{text:"utility::dressed_iterator",url:"structtriqs_1_1utility_1_1dressed__iterator.html"},
{text:"utility::dressed_iterator (no aux)",url:"structtriqs_1_1utility_1_1dressed__iterator_3_01IteratorType_00_01Dressing_00_01void_01_4.html"}]},
{text:"Runtime utilities",url:"group__triqs-utility-runtime.html",children:[
{text:"signal_handler",url:"namespacetriqs_1_1signal__handler.html",children:[
{text:"signal_handler::exception",url:"classtriqs_1_1signal__handler_1_1exception.html"}]},
{text:"utility::crash_logger",url:"classtriqs_1_1utility_1_1crash__logger.html"},
{text:"utility::time_pt",url:"structtriqs_1_1utility_1_1time__pt.html"},
{text:"utility::time_segment",url:"structtriqs_1_1utility_1_1time__segment.html"},
{text:"utility::timer",url:"classtriqs_1_1utility_1_1timer.html"}]},
{text:"Tuple and variant tools",url:"group__triqs-utility-tuple.html",children:[
{text:"utility::overloaded",url:"structtriqs_1_1utility_1_1overloaded.html"}]},
{text:"Type traits and metaprogramming",url:"group__triqs-utility-traits.html",children:[
{text:"utility::tags",url:"namespacetriqs_1_1utility_1_1tags.html",children:[
{text:"utility::tags::divides",url:"structtriqs_1_1utility_1_1tags_1_1divides.html"},
{text:"utility::tags::minus",url:"structtriqs_1_1utility_1_1tags_1_1minus.html"},
{text:"utility::tags::multiplies",url:"structtriqs_1_1utility_1_1tags_1_1multiplies.html"},
{text:"utility::tags::plus",url:"structtriqs_1_1utility_1_1tags_1_1plus.html"}]},
{text:"_and",url:"structtriqs_1_1__and.html"},
{text:"_or",url:"structtriqs_1_1__or.html"},
{text:"count_type_occurrence",url:"structtriqs_1_1count__type__occurrence.html"},
{text:"count_type_occurrence_not",url:"structtriqs_1_1count__type__occurrence__not.html"},
{text:"is_complex",url:"structtriqs_1_1is__complex.html"},
{text:"is_view",url:"structtriqs_1_1is__view.html"},
{text:"is_view_tag",url:"structtriqs_1_1is__view__tag.html"},
{text:"remove_cv_ref",url:"structtriqs_1_1remove__cv__ref.html"},
{text:"utility::callable_traits",url:"structtriqs_1_1utility_1_1callable__traits.html"},
{text:"utility::is_in_ZRC",url:"structtriqs_1_1utility_1_1is__in__ZRC.html"},
{text:"utility::operation",url:"structtriqs_1_1utility_1_1operation.html"},
{text:"utility::remove_rvalue_ref",url:"structtriqs_1_1utility_1_1remove__rvalue__ref.html"},
{text:"utility::scope_guard",url:"classtriqs_1_1utility_1_1scope__guard.html"},
{text:"utility::type_of_mult",url:"structtriqs_1_1utility_1_1type__of__mult.html"}]}]},
{text:"File List",url:"files.html"}]},
{text:"Official TRIQS website",url:"^https://triqs.github.io/triqs/latest/"}]}
