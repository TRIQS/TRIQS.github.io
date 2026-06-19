.. _documentation:

Documentation
*************

dftkit bundles the DFT-code converters that turn the output of a DFT calculation
into the TRIQS-compatible HDF5 archive consumed by
`DFTTools <https://triqs.github.io/dft_tools>`_ for DFT+DMFT calculations.
Each converter reads the native output of a given DFT package and writes the
projected local orbitals / Hamiltonian into the format expected by
:py:class:`SumkDFT <triqs_dft_tools.sumk_dft.SumkDFT>`.

Converters
==========

The following converters are available. The usage of each is described in the
corresponding guide page of the DFTTools documentation:

.. list-table::
   :header-rows: 1
   :widths: 20 40 40

   * - Converter
     - dftkit module
     - Guide
   * - Wien2k
     - :py:class:`triqs_dftkit.wien2k.Converter`
     - `conv_wien2k <https://triqs.github.io/dft_tools/latest/guide/conv_wien2k.html>`_
   * - VASP (PLOVasp)
     - :py:class:`triqs_dftkit.vasp.Converter`
     - `conv_vasp <https://triqs.github.io/dft_tools/latest/guide/conv_vasp.html>`_
   * - Elk
     - :py:class:`triqs_dftkit.elk.Converter`
     - `conv_elk <https://triqs.github.io/dft_tools/latest/guide/conv_elk.html>`_
   * - Wannier90
     - :py:class:`triqs_dftkit.wannier90.Converter`
     - `conv_W90 <https://triqs.github.io/dft_tools/latest/guide/conv_W90.html>`_
   * - H(k)
     - :py:class:`triqs_dftkit.hk.Converter`
     - `conv_generalhk <https://triqs.github.io/dft_tools/latest/guide/conv_generalhk.html>`_

Quantum Espresso is supported through the Wannier90 interface.

Tutorials
=========

End-to-end DFT+DMFT tutorials that exercise these converters live in the
DFTTools documentation:

- `SrVO3 (VASP, one-shot) <https://triqs.github.io/dft_tools/latest/tutorials/srvo3.html>`_
- `Sr2MgOsO6 without SOC <https://triqs.github.io/dft_tools/latest/tutorials/sr2mgoso6_nosoc.html>`_
- `Sr2MgOsO6 with SOC <https://triqs.github.io/dft_tools/latest/tutorials/sr2mgoso6_soc.html>`_
- `Ce-gamma Fermi surfaces (Wien2k) <https://triqs.github.io/dft_tools/latest/tutorials/ce-gamma-fscs_wien2k.html>`_

See the full `DFTTools documentation <https://triqs.github.io/dft_tools/latest/documentation.html>`_
for the DMFT self-consistency loop, post-processing and advanced topics.

Python reference manual
=======================

.. autosummary::
   :toctree: _autosummary
   :template: autosummary_module_template.rst
   :recursive:

   triqs_dftkit
