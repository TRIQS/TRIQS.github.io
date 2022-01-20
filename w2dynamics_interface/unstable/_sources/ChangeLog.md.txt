(changelog)=

# Changelog

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
