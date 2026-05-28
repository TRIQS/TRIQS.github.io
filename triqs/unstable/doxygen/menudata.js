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
{text:"Example 1: Mesh types",url:"mesh_ex1.html"}]},
{text:"API Documentation",url:"documentation.html",children:[
{text:"Green's functions",url:"group__triqs-gfs.html"},
{text:"Lattice tools",url:"group__triqs-lattice.html",children:[
{text:"lattice::bravais_lattice",url:"classtriqs_1_1lattice_1_1bravais__lattice.html",children:[
{text:"lattice::bravais_lattice::point_t",url:"classtriqs_1_1lattice_1_1bravais__lattice_1_1point__t.html"}]},
{text:"lattice::brillouin_zone",url:"classtriqs_1_1lattice_1_1brillouin__zone.html"},
{text:"lattice::grid_generator",url:"classtriqs_1_1lattice_1_1grid__generator.html"},
{text:"lattice::tight_binding",url:"classtriqs_1_1lattice_1_1tight__binding.html"},
{text:"lattice::hopping_dict",url:"structtriqs_1_1lattice_1_1hopping__dict.html"}]},
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
{text:"Lattice meshes",url:"group__triqs-meshes-lattice.html",children:[
{text:"k-vector expressions",url:"group__triqs-meshes-kexpr.html",children:[
{text:"mesh::BzMeshPoint",url:"concepttriqs_1_1mesh_1_1BzMeshPoint.html"},
{text:"mesh::k_expr",url:"structtriqs_1_1mesh_1_1k__expr.html"},
{text:"mesh::k_expr_unary",url:"structtriqs_1_1mesh_1_1k__expr__unary.html"}]},
{text:"mesh::brzone",url:"classtriqs_1_1mesh_1_1brzone.html",children:[
{text:"mesh::brzone::mesh_point_t",url:"classtriqs_1_1mesh_1_1brzone_1_1mesh__point__t.html"}]},
{text:"mesh::cyclat",url:"classtriqs_1_1mesh_1_1cyclat.html",children:[
{text:"mesh::cyclat::mesh_point_t",url:"classtriqs_1_1mesh_1_1cyclat_1_1mesh__point__t.html"}]}]},
{text:"Imaginary time and frequency meshes",url:"group__triqs-meshes-imag.html",children:[
{text:"mesh::chebyshev",url:"classtriqs_1_1mesh_1_1chebyshev.html",children:[
{text:"mesh::chebyshev::mesh_point_t",url:"classtriqs_1_1mesh_1_1chebyshev_1_1mesh__point__t.html"}]},
{text:"mesh::dlr_imfreq",url:"classtriqs_1_1mesh_1_1dlr__imfreq.html",children:[
{text:"mesh::dlr_imfreq::mesh_point_t",url:"classtriqs_1_1mesh_1_1dlr__imfreq_1_1mesh__point__t.html"}]},
{text:"mesh::dlr_imtime",url:"classtriqs_1_1mesh_1_1dlr__imtime.html",children:[
{text:"mesh::dlr_imtime::mesh_point_t",url:"classtriqs_1_1mesh_1_1dlr__imtime_1_1mesh__point__t.html"}]},
{text:"mesh::imfreq",url:"classtriqs_1_1mesh_1_1imfreq.html",children:[
{text:"mesh::imfreq::mesh_point_t",url:"classtriqs_1_1mesh_1_1imfreq_1_1mesh__point__t.html"}]},
{text:"mesh::imtime",url:"classtriqs_1_1mesh_1_1imtime.html"},
{text:"Matsubara frequencies",url:"group__triqs-meshes-matsubara.html",children:[
{text:"mesh::matsubara_freq",url:"structtriqs_1_1mesh_1_1matsubara__freq.html"}]}]},
{text:"Other mesh types",url:"group__triqs-meshes-other.html",children:[
{text:"mesh::discrete",url:"classtriqs_1_1mesh_1_1discrete.html",children:[
{text:"mesh::discrete::mesh_point_t",url:"classtriqs_1_1mesh_1_1discrete_1_1mesh__point__t.html"}]},
{text:"mesh::detail::linear",url:"classtriqs_1_1mesh_1_1detail_1_1linear.html",children:[
{text:"mesh::detail::linear::mesh_point_t",url:"classtriqs_1_1mesh_1_1detail_1_1linear_1_1mesh__point__t.html"}]}]},
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
{text:"MC tools",url:"group__triqs-mc.html",children:[
{text:"MC concepts",url:"group__triqs-mc-concepts.html",children:[
{text:"mc_tools::DoubleOrComplex",url:"concepttriqs_1_1mc__tools_1_1DoubleOrComplex.html"},
{text:"mc_tools::MCMove",url:"concepttriqs_1_1mc__tools_1_1MCMove.html"},
{text:"mc_tools::MCMeasure",url:"concepttriqs_1_1mc__tools_1_1MCMeasure.html"}]},
{text:"MC measurements",url:"group__triqs-mc-measures.html",children:[
{text:"mc_tools::measure",url:"classtriqs_1_1mc__tools_1_1measure.html"},
{text:"mc_tools::measure_aux",url:"classtriqs_1_1mc__tools_1_1measure__aux.html"},
{text:"mc_tools::measure_set",url:"classtriqs_1_1mc__tools_1_1measure__set.html"}]},
{text:"MC moves",url:"group__triqs-mc-moves.html",children:[
{text:"mc_tools::move",url:"classtriqs_1_1mc__tools_1_1move.html"},
{text:"mc_tools::move_set",url:"classtriqs_1_1mc__tools_1_1move__set.html"}]},
{text:"MC simulation",url:"group__triqs-mc-simulation.html",children:[
{text:"mc_tools::mc_generic",url:"classtriqs_1_1mc__tools_1_1mc__generic.html"},
{text:"mc_tools::mc_generic::run_param_t",url:"structtriqs_1_1mc__tools_1_1mc__generic_1_1run__param__t.html"}]},
{text:"MC utilities",url:"group__triqs-mc-utils.html",children:[
{text:"mc_tools::random_generator",url:"classtriqs_1_1mc__tools_1_1random__generator.html"}]}]},
{text:"Many-body states and operators",url:"group__triqs-ops.html",children:[
{text:"hilbert_space::fundamental_operator_set",url:"classtriqs_1_1hilbert__space_1_1fundamental__operator__set.html"},
{text:"hilbert_space::hilbert_space",url:"classtriqs_1_1hilbert__space_1_1hilbert__space.html"},
{text:"hilbert_space::state with nda::vector",url:"classtriqs_1_1hilbert__space_1_1state_3_01HilbertSpace_00_01ScalarType_00_01false_01_4.html"},
{text:"hilbert_space::state with std::unordered_map",url:"classtriqs_1_1hilbert__space_1_1state_3_01HilbertSpace_00_01ScalarType_00_01true_01_4.html"},
{text:"hilbert_space::sub_hilbert_space",url:"classtriqs_1_1hilbert__space_1_1sub__hilbert__space.html"},
{text:"operators::canonical_ops_t",url:"structtriqs_1_1operators_1_1canonical__ops__t.html"},
{text:"operators::many_body_operator_generic",url:"classtriqs_1_1operators_1_1many__body__operator__generic.html"}]},
{text:"Atomic diagonalization",url:"group__triqs-atom-diag.html",children:[
{text:"atom_diag::atom_diag",url:"classtriqs_1_1atom__diag_1_1atom__diag.html",children:[
{text:"atom_diag::atom_diag::eigensystem_t",url:"structtriqs_1_1atom__diag_1_1atom__diag_1_1eigensystem__t.html"},
{text:"atom_diag::atom_diag::op_block_mat_t",url:"structtriqs_1_1atom__diag_1_1atom__diag_1_1op__block__mat__t.html"}]}]},
{text:"Determinant manipulation",url:"group__triqs-det-manip.html"},
{text:"Statistical tools",url:"group__triqs-stat.html"},
{text:"File List",url:"files.html"}]},
{text:"Official TRIQS website",url:"^https://triqs.github.io/triqs/latest/"}]}
