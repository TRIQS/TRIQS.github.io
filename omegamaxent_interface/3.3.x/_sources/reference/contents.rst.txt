.. _UserGuide_OME_TRIQS:

User Guide
==========

This is the user guide for the omegamaxent_interface.
The information presented here is sufficient for many cases, however, for a more advanced use, see the :math:`\Omega MaxEnt` `user guide`_.


In the following, we refer to the function to be analytically continued as the *"Green's function"*, but it can be also a two-particle correlation function, a self-energy, or any function having a representation of the form

.. _`(1)`:

.. math::

    \mathbf{G}(i\omega_n)=\int_{-\infty}^{\infty} d\omega \frac{\mathbf{A}(\omega)}{i\omega_n-\omega},\qquad (1)

where :math:`\omega_n` is a fermionic or bosonic Matsubara frequency, or

.. _`(2)`:

.. math::

    \mathbf{G}(\tau)=-\int_{-\infty}^{\infty} d\omega \frac{e^{-\omega\tau}\mathbf{A}(\omega)}{1\pm e^{-\beta\omega}},\qquad (2)

where the + and - signs apply to the fermionic and bosonic cases, respectively, and :math:`\mathbf{A}(\omega)` is a positive semi-definite matrix in the fermionic case or :math:`\mathbf{A}(\omega)/\omega` is positive semi-definite in the bosonic case.

.. note::

    The code works internally with the imaginary frequency Green's function. Therefore, if you provide :math:`\mathbf{G}(\tau)`, it will be Fourier-transformed by the code before the analytic continuation begins.


Obtain the retarded Green's function
------------------------------------

Whether you have a scalar-, a matrix-valued or a block Green's function, the real frequency Green's function is obtained with the function **compute_GfReFreq()**, which takes a TRIQS Matsubara `Green's function`_ as input, and returns the corresponding `retarded Green's function`_. The function signature is::

    GR=compute_GfReFreq(G, **kwa)


Input parameters
----------------

.. _`Green's function`:

*G:*
    Only mandatory parameter of type Gf_, GfImFreq_, GfImTime_, or BlockGf_ containing objects of one of those types.

    Input Matsubara Green's function.


The following parameters, to be passed as keyword arguments, are the most common ones. The more advanced parameters are defined in the dictionaries *OmegaMaxEnt_input_params* and *OmegaMaxEnt_other_params* (defined in *OmegaMaxEnt_parameters.py*) and are described in details in the :math:`\Omega MaxEnt` `user guide`_:

.. _ERR:

*ERR:*
    Optional real or complex numpy array.

    Standard deviation if *G* is scalar or has a single element.

    *ERR* must have the same shape as *G.data*.

    See section `Setting errors`_ for non-diagonal covariance matrix.


.. _output_grid_params:

*output_grid_params:*
    Optional list of the form :math:`[\omega_{min}, \Delta\omega, \omega_{max}]`.

    Defines the minimum frequency, the frequency step, and the maximum frequency, respectively, of the frequency grid on   which the output Green's function will be defined.

    If not provided, the output grid is set by :math:`\Omega MaxEnt`. See section `Frequency grids`_ for more details.

    Note: this is not the grid used in the calculation, which can be set instead with comp_grid_params_.

*name:*
    Optional string.

    Name parameter of the returned GfReFreq_ object.


.. _interactive_mode:

*interactive_mode:*
    Optional boolean. Default: *True*.

    See section `Interactive mode`_ for more details.

.. _save_figures_data:

*save_figures_data:*
    Optional boolean. Default: *True*  (scalar *G*  only).

    If *G* is scalar, :math:`\Omega MaxEnt` saves files that allow to display the output figures after execution with the function **display_figures()**. See section `Display figures`_ for more details. Always *False* for non-scalar Green's functions.

*save_G:*
    Optional boolean. Default: *True*.

    By default, the result is saved in hdf5 format as *'G'*  in the file *G_Re_Freq.h5*.

.. _comp_grid_params:

*comp_grid_params:*
    Optional list of the form [:math:`\Delta\omega`] or [:math:`\Delta\omega`, SW] or [:math:`\Delta\omega`, SW, SC].

    Grid parameters used in the computation.

    :math:`\Delta\omega` is the frequency step used in the main spectral region, namely, the part of the grid where most of the spectral weight is located. It can also be set separately with parameter *freq_step*.

    SW is the width of the main spectral region (should be between 2 and 4 standard deviations typically). It can also be set separately with parameter *spectrum_width*.

    SC is the center of the main spectral region. It can also be set separately with parameter *spectrum_center*.

    See section `Frequency grids`_ for more details.


.. _non_uniform_grid:

*non_uniform_grid:*
    Optional boolean. Default: *False*.

    Tells :math:`\Omega MaxEnt` to use a non-uniform grid in the main spectral region for the computation.

    This accelerates the calculation if the spectrum has a peak at zero frequency that is very narrow compared to the total width of the spectrum. See section `Frequency grids`_ for more details.

.. _inv_sym:

*inv_sym:*
    Optional boolean. Default: *False*.

    If *G* is a matrix or a BlockGf_, set *inv_sym=True* if :math:`G_{ji}=G_{ij}`. The calculation time for the off diagonal elements will then be halved.

.. _`mu and nu`:

*mu, nu:*
    Optional floats. Default: *mu=1, nu=1*.

    Parameters involved in the calculation of off-diagonal elements of matrix-valued Green functions. See section `Matrix-valued functions`_ for more details.

*inv_sym_time:*
    Optional boolean. Default: *False*.

    For **bosonic** Green's function: if :math:`G(i\omega_n)=G(-i\omega_n)`, i.e. :math:`G(i\omega_n)` is purely real,
    i.e. :math:`G(\tau)=G(-\tau)`, i.e. :math:`G(\beta-\tau)=G(\tau)`, set *inv_sym_time=True*. The MaxEnt calculation will then be
    performed over positive real frequencies only.

Return parameter
----------------

.. _`retarded Green's function`:

*GR:*

    GfReFreq_ object or BlockGf_ of GfReFreq_ objects.

    The retarded Green's function.

Interactive mode
----------------

If interactive_mode_ *=True*, :math:`\Omega MaxEnt` displays figures during the execution. Also, if *displ_preproc_figs=True*, figures are displayed during the preprocessing stage. Otherwise, figures are displayed at the end of the calculation, showing the resulting Green's function, along with different quantities used as diagnostic tools. Using those tools is very useful to assess, first, if the result is valid and, second, if it is the best result possible given the data. Therefore, when processing a set of data for the first time, it is strongly advised to use the interactive mode. Details about how to interpret the diagnostic quantities are given in the :math:`\Omega MaxEnt` `user guide`_.

You can also force the calculation to pause and display the results at different points by setting the minimal value of alpha_ with parameter *alpha_min*, or by setting the maximum number of values of alpha_ to be computed with parameter *n_alpha_values* and look at the results at different stages (i.e. different values of alpha_). If you use the latter option, you can resume the calculation at the point of interuption after closing the figures.

Note that you can change parameters during a pause by modifying the file **OmegaMaxEnt_input_params.dat** and the changes will be applied when execution is resumed at the point of interruption. For example, if you have set *alpha_min* to a certain value (that parameter will appear as *"minimum value of alpha:"* in the file), you can modify that value (or remove the corresponding line completely) during the pause occuring when *alpha_min* is reached, and resume the computation at the next value of :math:`\alpha` after having closed the figures. On the other hand, if you would want to add a *new* parameter during a pause, say *new_param*, in **OmegaMaxEnt_input_params.dat** you have to define it using the string *OmegaMaxEnt_input_params['new_param']*. The parameter names are only understood by the python interface.

When the calculation is over and you are satisfied with the result displayed, you can exit the execution by closing all the figures and entering any character other than *'y'*  in the terminal. This will resume the execution of the python function **compute_GfReFreq()**.

If *interactive_mode=False*, :math:`\Omega MaxEnt` will not display any figure and **compute_GfReFreq()** will resume as soon as the calculation is over.

If you find that there are too many figures, instead of completely disable the interactive mode to eliminate all of them, you can reduce the number of figures displayed by setting to *False* one of the parameters: *displ_alpha_opt_figs*, *displ_alpha_min_figs* and *displ_alpha_curves*.

.. note::

    For the continuation of **matrix-valued** Green's functions, :math:`\Omega MaxEnt` is called  the same number of times as there are elements in the matrix (or in the upper part if *inv_sym=True*). If you are in interactive mode, figures showing the result will appear each time and, once you have closed them, you have to tell the program **not** to continue execution, to let the analytic continuation of the matrix or block function continue.

Setting errors
--------------

In the current version, you can provide errors only for a scalar-valued Green's function. If the covariance matrix is diagonal, you can use parameter ERR_ to provide the standard deviation as a real or complex numpy array having the same shape as *G.data*. For a non-diagonal covariance, you can provide the name of the files containing the covariance matrix with parameter *cov_tau* for imaginary time data or *cov_re_re*, *cov_im_im* and *cov_re_im* for imaginary frequency data. The file type must be one of the valid `armadillo types <http://arma.sourceforge.net/docs.html#save_load_mat>`_.

For matrix-valued Green's function, the error is assumed to be constant. The value of that constant is not relevant since it has no effect on the results.


Imaginary time data
~~~~~~~~~~~~~~~~~~~

If your data is a scalar GfImTime_ and you do not have an estimate of the error, or the error is constant, do not provide errors. Otherwise, because :math:`\Omega MaxEnt` works internally in Matsubara frequency, it will Fourier transform the covariance matrix, which takes time, but is not useful in that case because the result will also be a constant diagonal covariance in frequency, while the result does not depend on the absolute value of the error.

On the other hand, if the error depends on :math:`\tau` and you *do* provide errors, either with parameter *ERR* or *cov_tau* (file name for a covariance matrix), note that the Fourier transform of the Green function is saved by default as a GfImFreq_ object called *'G'* in file *G_im_freq.h5* and the Fourier transform of the covariance matrix is saved in files *covar_ReRe.dat*, *covar_ImIm.dat* and *covar_ReIm.dat* in directory *Fourier_transformed_data*. This can be useful if you want to perform the continuation again on the same data, without having to wait during the Fourier transform of the covariance matrix, which takes some time if there are many :math:`\tau` points. To do so, you pass to **compute_GfReFreq()** the saved GfImFreq_ object and the paths to the covariance files with parameters *cov_re_re*, *cov_im_im* and *cov_re_im* instead of the original GfImTime_ object and the error on :math:`G(\tau)` with *ERR*.


Display figures
---------------

For a scalar Green's function, if save_figures_data_ =True, regardless of the value of *interactive_mode*, you can display the same figures that are displayed in interactive mode by calling the function **display_figures()** after the execution of **compute_GfReFreq()**. For the matrix case, *save_figures_data* is always *False*. Details about the output figures are given in the :math:`\Omega MaxEnt` `user guide`_.

Frequency grids
---------------

There are two different real frequency grids: the *output grid* and the *computational grid*.

The output grid is the grid on which the output Green's function is defined. You can control it with parameter output_grid_params_. This frequency grid has a uniform density and is defined between :math:`\omega_{min}` and :math:`\omega_{max}` with a step :math:`\Delta\omega`. This is an optional parameter. If not provided, :math:`\Omega MaxEnt` generates an output frequency grid that is usually well adapted to the spectrum.

For computational efficiency reasons, the real frequency grid used in the calculation is different from the output grid. In many cases the default computational grid generated by :math:`\Omega MaxEnt` is well suited to the spectrum and there is no need to modify it. It can however happen that the calculation fails (no optimal value of alpha_ is found) because the default grid is not appropriate. Even when the calculation terminates successfully, the result might not always be as disired. For those cases you can use the input parameter comp_grid_params_ to control the computational grid in the region where most of the spectral weight is located. Outside that region, a particular non-uniform grid is always used by :math:`\Omega MaxEnt`. More advanced parameters are also available to control the computational grid in the dictionary *OmegaMaxEnt_input_params* (section FREQUENCY GRID PARAMETERS in *OmegaMaxEnt_parameters.py*). See the :math:`\Omega MaxEnt` `user guide`_ for more details on those parameters.

For a spectrum having a peak centered at zero frequency that is very narrow compared to the total width of the spectrum, a simple way to optimize the computational grid is to set non_uniform_grid_ =True. :math:`\Omega MaxEnt` will then use a grid with a density that is high in a narrow region around :math:`\omega=0` and decreases as :math:`|\omega|` increases. The detailed definition of this grid are given in the :math:`\Omega MaxEnt` `user guide`_.

.. _alpha:

Maximum entropy method and choice of entropy weight :math:`\alpha`
------------------------------------------------------------------

The maximum entropy method consists in minimizing the functional

.. math::

    Q_\alpha[A]=\chi^2-\alpha S

with

.. math::

    \chi^2=\left(G-\mathbf{K}A\right)^T C^{-1}\left(G-\mathbf{K}A\right),

where :math:`G` is the input data vector, :math:`A` is a vector containing the spectrum values on a discretized frequency grid, :math:`\mathbf{K}` is a matrix such that :math:`\mathbf{K}A` performs the integral `(1)`_ (in :math:`\Omega MaxEnt`, but also `(2)`_ or another representation in general), :math:`C` is the data's covariance matrix, :math:`\alpha` is an adjustable parameter, and :math:`S` is a differential entropy, defined as

.. math::

    S=-\int d\omega \left [A(\omega) \ln \left(\frac{A(\omega)}{D(\omega)}\right)-A(\omega)+D(\omega)\right],

where :math:`D(\omega)` is called the *default model* and is the solution that minimizes :math:`Q` if :math:`\chi^2` is negligible, i.e., at very large :math:`\alpha`. :math:`D(\omega)` is defined in a way to include information known in advanced about the spectrum. By default, in :math:`\Omega MaxEnt`, :math:`D(\omega)` is a gaussian with the same norm and first two moments associated with :math:`A(\omega)`, which are extracted from the input data.

The weight :math:`\alpha` of the entropy term can be chosen in `different ways`_. In :math:`\Omega MaxEnt`, the spectra are computed for a large range of :math:`\alpha`, starting at large :math:`\alpha`, and the optimal value is chosen where the curvature of :math:`log(\chi^2)` as a function of :math:`\gamma log(\alpha)` is maximal [#OME]_. Here :math:`\gamma<1` (parameter name: *gamma*) reduces the probability of a wrong value of :math:`\alpha` to be chosen (default value: :math:`\gamma=0.2`). Despite the use of :math:`\gamma` and some smoothing of the curve :math:`log(\chi^2)` vs :math:`\gamma log(\alpha)` in the computation of the curvature, there is still a chance that a wrong value of :math:`\alpha` will be selected because of some irregularities in :math:`log(\chi^2)` vs :math:`\gamma log(\alpha)` that produce parasitic peaks in the curvature. This is one of the reasons why the diagnostic tools are useful.

Matrix-valued functions
-----------------------

If the Green's function is matrix-valued, the calculation is done using the auxiliary Green's function approach described in [#AuxME]_ and also in appendix C of the :math:`\Omega MaxEnt` `user guide`_. In that calculation, the off-diagonal elements of the retarded function are obtained *indirectly* from the spectral functions of the diagonal elements and auxiliary functions that are linear combinations of diagonal and non-diagonal elements. Those auxiliary functions are constructed to have positive semi-definite spectral functions, so that they can be computed with the standard maximum entropy approach. As for the diagonal elements (of the form :math:`\langle T_{\tau} c_i(\tau) c_i^\dagger\rangle`), they always have positive semi-definite spectral functions. Therefore, in that calculation, the retarded functions corresponding to the diagonal and the auxiliary Matsubara functions are first computed with :math:`\Omega MaxEnt`, and are then combined at the python level to obtain the retarded off-diagonal elements.

mu and nu
---------

For Green or correlation functions of the form :math:`\langle T_{\tau} o_i(\tau) o_j^\dagger\rangle`, where :math:`o_i` and :math:`o_j` are operators corresponding to the same type of excitations, e.g. electronic excitations, the parameters `mu and nu`_ should be left equal to 1. On the other hand, for a correlation function of the form :math:`\langle T_{\tau} p(\tau) q^\dagger\rangle`, where :math:`p` and :math:`q` correspond to different types of excitations, different values of `mu and nu`_ should be tried to find a stable result. See Ref. [#AuxME]_ for more details.

If your matrix Green's function has the symmetry :math:`G_{ji}=G_{ij}`, set inv_sym_ =True. Then, only the upper part of the matrix will actually be computed, which reduces the required computational demand by a factor of two.


Simple example of usage
-----------------------

Suppose you have saved a Matsubara Green's function as a TRIQS object 'G' in a hdf5 file "G.h5". The quickest way to obtain the corresponding
real frequency Green's function is::

    from h5 import HDFArchive as HA
    import OmegaMaxEnt_TRIQS as OT

    #load the Matsubara Green's function
    with HA("G.h5",'r') as A:
        G=A['G']

    #obtain the retarded Green's function
    GR=OT.compute_GfReFreq(G)

Additionally, if you know that the spectrum has a sharp peak at :math:`\omega=0` and that the spectrum is mostly located between :math:`\omega=-2` and :math:`\omega=2`, you can use::

    Dw=0.001
    SW=4

    GR=OT.compute_GfReFreq(G, comp_grid_params=[Dw,SW], non_uniform_grid=True)


For more advanced examples, see the :ref:`tutorials <OME_TRIQS_tutorials>`.

.. _`user guide`: https://www.physique.usherbrooke.ca/MaxEnt/index.php/User_Guide
.. _`maximum entropy`: https://triqs.github.io/maxent/jenkins/basicnotions/mathematics.html
.. _`different ways`: https://triqs.github.io/maxent/jenkins/basicnotions/maxentflavors.html#maxent-flavors
.. _BlockGf: https://triqs.github.io/triqs/latest/documentation/manual/triqs/gfs/py/full.html
.. _GfReFreq: https://triqs.github.io/triqs/latest/documentation/manual/triqs/gfs/py/block/GfReFreq.html
.. _GfImTime: https://triqs.github.io/triqs/latest/documentation/manual/triqs/gfs/py/block/GfImTime.html
.. _GfImFreq: https://triqs.github.io/triqs/latest/documentation/manual/triqs/gfs/py/block/GfImFreq.html
.. _Gf: https://triqs.github.io/triqs/latest/documentation/manual/triqs/gfs/py/block.html

.. [#OME] `D.Bergeron and A.-M.S. Tremblay. Phys. Rev. E, 94:023303, 2016 <https://journals.aps.org/pre/abstract/10.1103/PhysRevE.94.023303>`_

.. [#AuxME] `A. Reymbaut, A.-M. Gagnon, D. Bergeron, A.-M. S. Tremblay. Phys. Rev. B 95:121104, 2017 <https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.121104>`_
