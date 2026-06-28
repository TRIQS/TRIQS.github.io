# Changelog

## Version 4.0.0

hartree_fock version 4.0.0 is a compatibility release for TRIQS version 4.0.0
that also includes an update to the latest app4triqs skeleton.
The ImpuritySolver now supports both DLR and legacy Matsubara mesh interfaces.

We thank all contributors: Jennifer Coulter, Thomas Hahn, Alexander Hampel, Henri Menke, Dylan Simon, Nils Wentzell

Find below an itemized list of changes in this release.

### General
* Support both DLR and Matsubara meshes in ImpuritySolver (#8)
* Use MeshDLRImFreq for ImpuritySolver Green's functions
* Use known high-frequency moments for accurate density computation
* Constrain flatten/unflatten to symmetric/Hermitian subspace
* Apply force_real to final density after solve
* Run port_to_triqs4 script for triqs.gf -> triqs.gfs Python module rename
* Simplify ImpuritySolver and test code

### cmake
* Preload sanitizer runtime for Python tests under ASAN/UBSAN

### doc
* Add FI support notice to README.md

### build
* Remove the setup-python step from the pypi workflow


## Version 3.3.0

hartree_fock version 3.3.0 is a compatibility release for TRIQS version 3.3.0.
We now provide pypi packages for releases in this repository.

We thank all contributors: Thomas Hahn, Alexander Hampel, Henri Menke, Nils Wentzell, alb-carta

Find below an itemized list of changes in this release.

### General
* Solved inconsistency between E_dc computed in the solver and reported in the solid_dmft observables

### doc
* Update readme
* Add sections for debian package install and docker image

### PyPi
* Add pypi workflow and project description
* Prepare automatic pypi packaging


## Version 3.2.1

hartree_fock/3.2.1 is a bug fix release.
* solved inconsistency between E_dc computed in the solver and reported in the solid_dmft observable
* add pypi publishing

We thank all contributors: Alberto Carta, Alexander Hampel

## Version 3.2.0

This is the initial release of hartree_fock, a Hartree-Fock lattice and impurity solvers based on the TRIQS library.
This release is compatible against TRIQS version 3.2.

We thank all contributors: Alberto Carta, Thomas Hahn, Alexander Hampel, Jonathan Karp, Dylan Simon, Nils Wentzell
