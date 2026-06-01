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
      [ "Example 1: Mesh types", "mesh_ex1.html", null ]
    ] ],
    [ "API Documentation", "documentation.html", [
      [ "Green's functions", "group__triqs-gfs.html", null ],
      [ "Lattice tools", "group__triqs-lattice.html", [
        [ "lattice::bravais_lattice", "classtriqs_1_1lattice_1_1bravais__lattice.html", [
          [ "lattice::bravais_lattice::point_t", "classtriqs_1_1lattice_1_1bravais__lattice_1_1point__t.html", null ]
        ] ],
        [ "lattice::brillouin_zone", "classtriqs_1_1lattice_1_1brillouin__zone.html", null ],
        [ "lattice::grid_generator", "classtriqs_1_1lattice_1_1grid__generator.html", null ],
        [ "lattice::tight_binding", "classtriqs_1_1lattice_1_1tight__binding.html", null ],
        [ "lattice::hopping_dict", "structtriqs_1_1lattice_1_1hopping__dict.html", null ]
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
          [ "Imaginary time and frequency meshes", "group__triqs-meshes-imag.html", [
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
            [ "mesh::imtime", "classtriqs_1_1mesh_1_1imtime.html", null ],
            [ "Matsubara frequencies", "group__triqs-meshes-matsubara.html", [
              [ "mesh::matsubara_freq", "structtriqs_1_1mesh_1_1matsubara__freq.html", null ]
            ] ]
          ] ],
          [ "Other mesh types", "group__triqs-meshes-other.html", [
            [ "mesh::discrete", "classtriqs_1_1mesh_1_1discrete.html", [
              [ "mesh::discrete::mesh_point_t", "classtriqs_1_1mesh_1_1discrete_1_1mesh__point__t.html", null ]
            ] ],
            [ "mesh::detail::linear", "classtriqs_1_1mesh_1_1detail_1_1linear.html", [
              [ "mesh::detail::linear::mesh_point_t", "classtriqs_1_1mesh_1_1detail_1_1linear_1_1mesh__point__t.html", null ]
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
      [ "MC tools", "group__triqs-mc.html", [
        [ "MC concepts", "group__triqs-mc-concepts.html", [
          [ "mc_tools::DoubleOrComplex", "concepttriqs_1_1mc__tools_1_1DoubleOrComplex.html", null ],
          [ "mc_tools::MCMove", "concepttriqs_1_1mc__tools_1_1MCMove.html", null ],
          [ "mc_tools::MCMeasure", "concepttriqs_1_1mc__tools_1_1MCMeasure.html", null ]
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
          [ "mc_tools::mc_generic", "classtriqs_1_1mc__tools_1_1mc__generic.html", null ],
          [ "mc_tools::mc_generic::run_param_t", "structtriqs_1_1mc__tools_1_1mc__generic_1_1run__param__t.html", null ]
        ] ],
        [ "MC utilities", "group__triqs-mc-utils.html", [
          [ "mc_tools::random_generator", "classtriqs_1_1mc__tools_1_1random__generator.html", null ]
        ] ]
      ] ],
      [ "Many-body states and operators", "group__triqs-ops.html", [
        [ "hilbert_space::fundamental_operator_set", "classtriqs_1_1hilbert__space_1_1fundamental__operator__set.html", null ],
        [ "hilbert_space::hilbert_space", "classtriqs_1_1hilbert__space_1_1hilbert__space.html", null ],
        [ "hilbert_space::state with nda::vector", "classtriqs_1_1hilbert__space_1_1state_3_01HilbertSpace_00_01ScalarType_00_01false_01_4.html", null ],
        [ "hilbert_space::state with std::unordered_map", "classtriqs_1_1hilbert__space_1_1state_3_01HilbertSpace_00_01ScalarType_00_01true_01_4.html", null ],
        [ "hilbert_space::sub_hilbert_space", "classtriqs_1_1hilbert__space_1_1sub__hilbert__space.html", null ],
        [ "operators::canonical_ops_t", "structtriqs_1_1operators_1_1canonical__ops__t.html", null ],
        [ "operators::many_body_operator_generic", "classtriqs_1_1operators_1_1many__body__operator__generic.html", null ]
      ] ],
      [ "Atomic diagonalization", "group__triqs-atom-diag.html", [
        [ "atom_diag::atom_diag", "classtriqs_1_1atom__diag_1_1atom__diag.html", [
          [ "atom_diag::atom_diag::eigensystem_t", "structtriqs_1_1atom__diag_1_1atom__diag_1_1eigensystem__t.html", null ],
          [ "atom_diag::atom_diag::op_block_mat_t", "structtriqs_1_1atom__diag_1_1atom__diag_1_1op__block__mat__t.html", null ]
        ] ]
      ] ],
      [ "Determinant manipulation", "group__triqs-det-manip.html", null ],
      [ "Statistical analysis tools", "group__triqs-stat.html", [
        [ "Accumulators", "group__triqs-stat-accs.html", [
          [ "stat::lin_binning", "classtriqs_1_1stat_1_1lin__binning.html", null ],
          [ "stat::log_binning", "classtriqs_1_1stat_1_1log__binning.html", null ]
        ] ],
        [ "Concepts", "group__triqs-stat-concepts.html", [
          [ "stat::StatCompatible", "concepttriqs_1_1stat_1_1StatCompatible.html", null ],
          [ "stat::AccCompatible", "concepttriqs_1_1stat_1_1AccCompatible.html", null ],
          [ "stat::StatCompatibleRange", "concepttriqs_1_1stat_1_1StatCompatibleRange.html", null ]
        ] ],
        [ "Mean and error estimation", "group__triqs-stat-meanerr.html", null ],
        [ "Resampling techniques", "group__triqs-stat-resampling.html", null ],
        [ "Utilities", "group__triqs-stat-utils.html", [
          [ "stat::histogram", "classtriqs_1_1stat_1_1histogram.html", null ]
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
"functions_8cpp_source.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';