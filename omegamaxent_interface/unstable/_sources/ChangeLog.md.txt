# Changelog

## Version 4.0.0

omegamaxent_interface version 4.0.0 is a compatibility release for TRIQS version 4.0.0 that
* introduces compatibility with TRIQS 4.0 (renamed `triqs.gf` Python module to `triqs.gfs`)
* uses the latest [app4triqs](https://github.com/TRIQS/app4triqs) skeleton (python-only variant)

We thank all contributors: Jennifer Coulter, Thomas Hahn, Alexander Hampel, Henri Menke, Dylan Simon, Nils Wentzell

Find below an itemized list of changes in this release.

### General
* Run port_to_triqs4 porting script for the triqs.gf -> triqs.gfs module rename
* Use the latest app4triqs/4.0.x skeleton
* Fetch and build the OmegaMaxEnt program from a fork (Thoemi09/OmegaMaxEnt)
* Fix invalid escape sequences in string literals

### jenkins
* Migrate to the new k8s-based Jenkins system
* Link to openblas on macOS

### ghactions
* Add a workflow to publish the package to PyPI
* Link to openblas on macOS

### doc
* Add FI support notice to README.md


## Version 3.3.0

omegamaxent_interface version 3.3.0 is a compatibility release for TRIQS version 3.3.0.

We thank all contributors: Thomas Hahn, Alexander Hampel, Henri Menke, Nils Wentzell

Find below an itemized list of changes in this release.

### ghactions
* Add gsl dependency to macos builds


## Version 3.2.0

omegamaxent_interface version 3.2.0 is a compatibility release for TRIQS version 3.2.0.

We thank all contributors: Thomas Hahn, Alexander Hampel, Dylan Simon, Nils Wentzell

Find below an itemized list of changes in this release.

### General
* Remove use of Gf Indices and restore compatibility against TRIQS/unstable
* Fix: Iterable should be imported from collections.abc

### cmake
* Improve omegamaxent cmake to use existing nda/triqs targets and to use find_package(GSL)


## Version 3.1.0

omegamaxent_interface version 3.1.0 is a compatibility
release for TRIQS version 3.1.0 that
* uses the latest [app4triqs/3.1.x](https://github.com/TRIQS/app4triqs) skeleton
* switches documentation to read-the-docs theme
* improves ghactions and jenkins configuration

We thank all contributors: Alexander Hampel, Dylan Simon, Nils Wentzell


## Version 3.0.0

omegamaxent_interface version 3.0.0 is a compatibility
release for TRIQS version 3.0.0 that
introduces compatibility with Python 3 (Python 2 no longer supported).

We provide a more detailed description of the changes below.

General
-------
* Fix various dead links
* Synchronize project structure with app4triqs application skeleton
* unused cmake folder removed

py3
---
* Port all python scripts and notebooks to Python3
* Run port_to_triqs3 porting script

doc
---
* Add github logo image

Contributors: Dominic Bergeron, Philipp Dumitrescu, Olivier Parcollet, Dylan Simon, Hugo U. R. Strand, Nils Wentzell

## Version 2.2.0

omegamaxent_interface version 2.2.0 is solely
a compatibility release against TRIQS version 2.2.0.

We provide a detailed description of the changes below.

jenkins
-------
* Synchronize Jenkinsfile with app4triqs

General
-------
* Synchronize the Jenkinsfile with app4triqs
* Bump Version number and triqs requirement to 2.2(dev)
