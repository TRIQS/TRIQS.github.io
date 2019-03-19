.. _install:

Installation
============

Prerequisite
-------------------

#. The :ref:`TRIQS <triqslibs:welcome>` toolbox in its development (unstable) version 2.2.
   (see :ref:`TRIQS installation instruction <triqslibs:installation>`).
   In the following, we will suppose that it is installed in the ``path_to_triqs`` directory.

Installation steps
------------------

#. Download the sources from github::

    $ git clone https://github.com/TRIQS/w2dynamics_interface

#. Create an empty build directory where you will compile the code::

    $ mkdir w2dynamics_interface/build && cd w2dynamics_interface/build

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
    | Specify an installation path other than path_to_triqs        | -DCMAKE_INSTALL_PREFIX=my_w2dynamics_path        |
    +--------------------------------------------------------------+--------------------------------------------------+
    | Build the documentation locally                              | -DBuild_Documentation=ON                         |
    +--------------------------------------------------------------+--------------------------------------------------+
