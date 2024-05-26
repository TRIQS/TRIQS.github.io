.. highlight:: bash

.. _install:

Install w2dynamics_interface
****************************

Compiling w2dynamics_interface from source
==========================================

.. note:: To guarantee reproducibility in scientific calculations we strongly recommend the use of a stable `release <https://github.com/TRIQS/triqs/releases>`_ of both TRIQS and its applications.

Prerequisites
-------------

#. The :ref:`TRIQS <triqslibs:welcome>` library, see :ref:`TRIQS installation instruction <triqslibs:installation>`.
   In the following, we assume that TRIQS is installed in the directory ``path_to_triqs``.

Installation steps
------------------

#. Download the source code of the latest stable version by cloning the ``TRIQS/w2dynamics_interface`` repository from GitHub::

     $ git clone https://github.com/TRIQS/w2dynamics_interface w2dynamics_interface.src

#. Create and move to a new directory where you will compile the code::

     $ mkdir w2dynamics_interface.build && cd w2dynamics_interface.build

#. Ensure that your shell contains the TRIQS environment variables by sourcing the ``triqsvars.sh`` file from your TRIQS installation::

     $ source path_to_triqs/share/triqs/triqsvars.sh

#. In the build directory call cmake, including any additional custom CMake options, see below::

     $ cmake ../w2dynamics_interface.src

#. Compile the code, run the tests and install the application::

     $ make test
     $ make install

Version compatibility
---------------------

Keep in mind that the version of ``w2dynamics_interface`` must be compatible with your TRIQS library version,
see :ref:`TRIQS website <triqslibs:versions>`.
In particular the Major and Minor Version numbers have to be the same.
To use a particular version, go into the directory with the sources, and look at all available versions::

     $ cd w2dynamics_interface.src && git tag

Checkout the version of the code that you want::

     $ git checkout 2.2.0

and follow steps 2 to 4 above to compile the code.

Custom CMake options
--------------------

The compilation of ``w2dynamics_interface`` can be configured using CMake-options::

    cmake ../w2dynamics_interface.src -DOPTION1=value1 -DOPTION2=value2 ...

+-----------------------------------------------------------------+----------------------------------------------------------+
| Options                                                         | Syntax                                                   |
+=================================================================+==========================================================+
| Specify an installation path other than path_to_triqs           | -DCMAKE_INSTALL_PREFIX=path_to_w2dynamics_interface      |
+-----------------------------------------------------------------+----------------------------------------------------------+
| Build in Debugging Mode                                         | -DCMAKE_BUILD_TYPE=Debug                                 |
+-----------------------------------------------------------------+----------------------------------------------------------+
| Disable testing (not recommended)                               | -DBuild_Tests=OFF                                        |
+-----------------------------------------------------------------+----------------------------------------------------------+
| Build the documentation                                         | -DBuild_Documentation=ON                                 |
+-----------------------------------------------------------------+----------------------------------------------------------+
