(changelog)=

# Changelog

## Version 3.1.0

w2dynamics_interface version 3.1.0 is a compatibility
release for TRIQS version 3.1.0 that
* uses the latest [app4triqs/3.1.x](https://github.com/TRIQS/app4triqs) skeleton
* switches documentation to read-the-docs theme
* improves ghactions and jenkins configuration

We thank all contributors: Alexander Hampel, Alexander Kowalski, Dylan Simon, Nils Wentzell

Find below an itemized list of changes in this release.

### General
* After gcc stdlib update in <random> add reference data vor gcc version 11+
* Manual porting to triqs 3.1 + nda + meshes
* Adjust for new gf_struct type
* Update to v1.1.1 of w2dynamics and update test ref files
* Add worm_components parameter, limit test to subset of components
* Make one-particle Green's function measurement optional
* Add diagonalized version of two-orbital test for 2p-GF
* Adapt to triqs 3, w2dynamics 1.1, and make code less redundant
* Converter and solver interface for the two-particle Green's function
* Use different ref test data when compiling with libcxx

### doc
* Add new parameters and short instructions on 2p-GF measurement

### cmake
* Let cmake of w2dynamics detect Fortran compiler
* Clone from main w2dynamics repository and apply w2dynamics.patch
* Detect use of libcxx through try_compile

### CI
* Enable ghactions builds for unstable
* Specify BLAS_ROOT and LAPACK_ROOT for OSX builds
* Build 2pgf branch against triqs/unstable


## Version 3.0.0

w2dynamics_interface version 3.0.0 is a compatibility
release for TRIQS version 3.0.0 that
* introduces compatibility with Python 3 (Python 2 no longer supported)
* fixes several application issues

We provide a more detailed description of the changes below.

General
-------
* Update to latest version of w2dynamics (d4f8b6b)
* Bump scipy requirement
* Adjust requirements.txt to guarantee up-to-date numpy/scipy/h5py
* Get banner and version string directly from w2dynamics
* Reduce precision of first comparison in 2orb_Discrete_Bath
* Update reference data

jenkins
-------
* Build only on one core due to dependency problems in w2dyn cmake
* Disable osx-clang build as libcxx usage leads to different rng sequences -> test failures
* Unset CXXFLAGS for docker-builds to use libstdcxx over libcxx, build in serial mode
* remove osx-gcc FC=gfortran-7

cmake
-----
* In Dockerfile unset CXXFLAGS to always build using libstdc++
* Do not set BLAS/LAPACK for w2dynamics
* Use latest version of w2dynamics
* Add FORTRAN to list of languages

solver
------
* Respect new tuple order of solve_component result
* Ensure gtau is processed as DistributedSample in all cases

converters
----------
* Let converter take DistributedSample instead of dict

py3
---
* Port all python files to Python3
* Run port_to_triqs3 porting script

jenkins,py3
-----------
* install nfft from el7 for centos

Contributors: Philipp Dumitrescu, Alexander Kowalski, Dylan Simon, Nils Wentzell


## Version 2.2.0

This is the initial release of w2dynamics_interface,
a lightweight interface to the w2dynamics cthyb code.
It is compatible against TRIQS Version 2.2.
