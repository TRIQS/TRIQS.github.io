import matplotlib.pyplot as plt
import numpy as np
from triqs_maxent.omega_meshes import *

for mesh in [LinearOmegaMesh, LorentzianOmegaMesh,
     LorentzianSmallerOmegaMesh, HyperbolicOmegaMesh]:

     m = mesh(omega_min=-10,omega_max=10,n_points=100)
     plt.plot(list(m),label=mesh.__name__)
plt.xlabel('Data point number $i$')
plt.ylabel('Value of $\\omega_i$')
plt.legend()