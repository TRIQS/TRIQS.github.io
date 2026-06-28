.. _documentation:

Documentation
*************

dftkit bundles the DFT-code interfaces that connect various DFT packages to
`DFTTools <https://triqs.github.io/dft_tools>`_ for DFT+DMFT calculations.

General idea
============

For each supported DFT code dftkit provides up to two components:

- a **Converter**, which reads the native output of a DFT run and writes the
  projected local orbitals / Hamiltonian into the TRIQS-compatible HDF5 archive
  expected by :py:class:`SumkDFT <triqs_dft_tools.sumk_dft.SumkDFT>`. This is all
  that is needed for one-shot DFT+DMFT calculations.
- a **Driver**, which wraps the DFT executable itself and drives a full run
  (and, for charge self-consistent DFT+DMFT, the repeated DFT updates inside the
  DMFT loop). A driver typically calls the matching converter at the end of each
  DFT step.

The two are organised per code under ``triqs_dftkit.<code>``, e.g.
``triqs_dftkit.wien2k.Converter`` and ``triqs_dftkit.wien2k.Driver``. Some codes
share a converter: Quantum Espresso and Abinit reuse the Wannier90 converter and
only add their own driver.

Converters and drivers
======================

The following interfaces are available. The usage of each converter is described
in the corresponding guide page of the DFTTools documentation:

.. list-table::
   :header-rows: 1
   :widths: 16 32 22 30

   * - Code
     - Converter
     - Driver
     - Guide
   * - Wien2k
     - :py:class:`triqs_dftkit.wien2k.Converter`
     - :py:class:`triqs_dftkit.wien2k.Driver`
     - `conv_wien2k <https://triqs.github.io/dft_tools/latest/guide/conv_wien2k.html>`_
   * - VASP
     - :py:class:`triqs_dftkit.vasp.Converter` (PLOVasp) or via Wannier90
     - :py:class:`triqs_dftkit.vasp.Driver`
     - `conv_vasp <https://triqs.github.io/dft_tools/latest/guide/conv_vasp.html>`_
   * - Quantum Espresso
     - via Wannier90
     - :py:class:`triqs_dftkit.qe.Driver`
     - `conv_W90 <https://triqs.github.io/dft_tools/latest/guide/conv_W90.html>`_
   * - Abinit
     - via Wannier90
     - :py:class:`triqs_dftkit.abinit.Driver`
     - `conv_W90 <https://triqs.github.io/dft_tools/latest/guide/conv_W90.html>`_
   * - Elk
     - :py:class:`triqs_dftkit.elk.Converter`
     - ✗
     - `conv_elk <https://triqs.github.io/dft_tools/latest/guide/conv_elk.html>`_
   * - Wannier90
     - :py:class:`triqs_dftkit.wannier90.Converter`
     - ✗
     - `conv_W90 <https://triqs.github.io/dft_tools/latest/guide/conv_W90.html>`_
   * - H(k)
     - :py:class:`triqs_dftkit.hk.Converter`
     - ✗
     - `conv_generalhk <https://triqs.github.io/dft_tools/latest/guide/conv_generalhk.html>`_

Tutorials
=========

End-to-end DFT+DMFT tutorials that exercise the converters live in the
DFTTools documentation:

- `SrVO3 (VASP, one-shot) <https://triqs.github.io/dft_tools/latest/tutorials/srvo3.html>`_
- `Sr2MgOsO6 without SOC <https://triqs.github.io/dft_tools/latest/tutorials/sr2mgoso6_nosoc.html>`_
- `Sr2MgOsO6 with SOC <https://triqs.github.io/dft_tools/latest/tutorials/sr2mgoso6_soc.html>`_
- `Ce-gamma Fermi surfaces (Wien2k) <https://triqs.github.io/dft_tools/latest/tutorials/ce-gamma-fscs_wien2k.html>`_

A full charge self-consistent DFT+DMFT calculation driven end-to-end through the
dftkit VASP ``Driver`` is documented in the ModEST documentation:

- `Charge self-consistent DFT+DMFT with VASP: SrVO3 <https://triqs.github.io/modest/latest/tutorials/vasp_csc_svo/svo_csc.html>`_

See the full `DFTTools documentation <https://triqs.github.io/dft_tools/latest/documentation.html>`_
for the DMFT self-consistency loop, post-processing and advanced topics.

Python reference manual
=======================

.. autosummary::
   :toctree: _autosummary
   :template: autosummary_module_template.rst
   :recursive:

   triqs_dftkit
