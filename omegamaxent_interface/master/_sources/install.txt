.. _install:

Installation
============

Prerequisite
-------------------

#. The :ref:`TRIQS <triqslibs:welcome>` toolbox (see :ref:`TRIQS installation instruction <triqslibs:installation>`).
   In the following, we will suppose that it is installed in the ``path_to_triqs`` directory.

#. macOs users only: Do not use your system's version of LAPACK. Instead, install LAPACK using `Homebrew <https://brew.sh/>`_::

    $ brew install lapack

Installation steps
------------------

#. Download the sources from github::

    $ git clone https://github.com/TRIQS/omegamaxent_interface

#. Create an empty build directory where you will compile the code::

    $ mkdir omegamaxent_interface/build && cd omegamaxent_interface/build

#. In the build directory call cmake::

    $ cmake ..

#. Compile the code, run the tests and install the application::

    $ make
    $ make test
    $ make install

Custom CMake options
--------------------

Using the following syntax::

    $ cmake -DOPTION1=value1 -DOPTION2=value2 ..

you can pass the following options to CMake:

    +--------------------------------------------------------------+--------------------------------------------------+
    | Options                                                      | Syntax                                           |
    +==============================================================+==================================================+
    | Specify an installation path other than path_to_triqs        | -DCMAKE_INSTALL_PREFIX=my_maxent_path            |
    +--------------------------------------------------------------+--------------------------------------------------+
    | Build the documentation locally                              | -DBuild_Documentation=ON                         |
    +--------------------------------------------------------------+--------------------------------------------------+
