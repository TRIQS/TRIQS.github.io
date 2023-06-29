################################################################################
#
# TPRF: Two-Particle Response Function (TPRF) Toolbox for TRIQS
#
# Copyright (C) 2023 by H. U.R. Strand
# Author: H. U.R. Strand
#
# TPRF is free software: you can redistribute it and/or modify it under the
# terms of the GNU General Public License as published by the Free Software
# Foundation, either version 3 of the License, or (at your option) any later
# version.
#
# TPRF is distributed in the hope that it will be useful, but WITHOUT ANY
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
# FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
# details.
#
# You should have received a copy of the GNU General Public License along with
# TPRF. If not, see <http://www.gnu.org/licenses/>.
#
################################################################################

from common import *

filename = 'data_sc.h5'

if mpi.is_master_node():
    print(f'--> Loading: {filename}')
    with HDFArchive(filename, 'r') as a:
        p = a['ps'][-1]
else: p = None
p = mpi.bcast(p)

p.solve.worm = True
p.solve.measure_G_l = False
p.solve.length_cycle = 100 # auto-correlation estimate
p.solve.n_warmup_cycles = int(1e5)
p.solve.n_cycles = int(1e6)
p.solve.cfg_qmc = dict(
    PercentageWormInsert=0.3,
    PercentageWormReplace=0.1,
    #
    WormEta=1,
    WormSearchEta=1,
    Nwarmups2Plus=int(1e5),
    Nbatchsize_nfft_worm=int(2e6),
    nfft_mode_g4iw=1, # 0 : 3d nfft, 1 : 2d nfft for each bosonic freq
    #
    WormMeasG4iw=1,
    FourPnt=8,
    N4iwb=0,
    N4iwf=30,
    WormPHConvention=0, # Important to get correct frequency structure
    WormComponents=
        [ list(x) for x in itertools.product(range(2*p.num_orbitals), repeat=4) ],
        #[[0,0,0,0]],
    )

from w2dyn_cthyb import Solver

cthyb = Solver(**p.init.dict())

for bidx, g0 in cthyb.G0_iw:
    g0 << p.G0_w[bidx]

cthyb.solve(**p.solve.dict())

p.G2_worm_components = cthyb.G2_worm_components

if mpi.is_master_node():
    with HDFArchive(f'data_g2.h5', 'w') as a:
        a['p'] = p
