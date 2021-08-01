
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const PeopleTalkingGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-1034,-186)' className={cx('svg-filling', 'fill')}>
            <g transform='translate(1034,186)'>
                <g transform='translate(0,12)'>
                    <path d='M4.77675,5.75657078 C4.80975,5.65619578 4.8895,5.57644578 4.9885,5.54207078 C5.088875,5.50632078 5.198875,5.51869578 5.28825,5.57644578 C6.494125,6.34782078 7.9255,6.79744578 9.464125,6.79744578 C9.9165,6.79744578 10.360625,6.75894578 10.792375,6.68332078 C10.896875,6.66544578 11.004125,6.69707078 11.0825,6.76719578 C11.160875,6.83869578 11.202125,6.94182078 11.193875,7.04769578 C11.066,8.75682078 9.634625,10.0946958 7.90625,10.0946958 C6.0885,10.0946958 4.607625,8.61519578 4.607625,6.79744578 C4.607625,6.43444578 4.668125,6.08382078 4.77675,5.75657078 M11.50325,12.2726958 C11.397375,12.2190708 11.32725,12.1131958 11.317625,11.9935708 C11.308,11.8753208 11.361625,11.7598208 11.457875,11.6883208 C12.969,10.5896958 13.9535,8.80632078 13.9535,6.79744578 C13.9535,3.46169578 11.240625,0.74882078 7.90625,0.74882078 C4.571875,0.74882078 1.857625,3.46169578 1.857625,6.79744578 C1.857625,8.80632078 2.842125,10.5896958 4.35325,11.6883208 C4.450875,11.7598208 4.503125,11.8753208 4.4935,11.9935708 C4.48525,12.1131958 4.415125,12.2190708 4.30925,12.2726958 C1.753125,13.5844458 0,16.2478208 0,19.3113208 C0,19.6921958 0.308,19.9988208 0.6875,19.9988208 L15.125,19.9988208 C15.5045,19.9988208 15.8125,19.6921958 15.8125,19.3113208 C15.8125,16.2478208 14.059375,13.5844458 11.50325,12.2726958' />
                    <path d='M28.6056375,12.6704833 C28.2852625,12.5329833 27.9140125,12.6567333 27.7407625,12.9592333 L26.0797625,15.8439833 C26.0178875,15.9512333 25.9037625,16.0172333 25.7813875,16.0172333 C25.6576375,16.0172333 25.5448875,15.9512333 25.4830125,15.8439833 L23.8220125,12.9592333 C23.6487625,12.6567333 23.2775125,12.5329833 22.9571375,12.6704833 C20.3762625,13.7718583 18.5626375,16.3348583 18.5626375,19.3131083 C18.5626375,19.6926083 18.8692625,20.0006083 19.2501375,20.0006083 L32.3126375,20.0006083 C32.6921375,20.0006083 33.0001375,19.6926083 33.0001375,19.3131083 C33.0001375,16.3348583 31.1865125,13.7718583 28.6056375,12.6704833' />
                    <path d='M25.7811128,9.68824618 C24.2094878,9.68824618 22.9087377,8.50987113 22.7134877,6.99049606 C22.6901127,6.80899605 22.8138627,6.64124605 22.9939877,6.60962104 C23.4106127,6.53399604 23.8629877,6.41437104 24.2438628,6.22324603 C24.8969878,5.89737101 25.2819878,5.51099599 25.5033628,5.20574598 C25.5679878,5.11774598 25.6711128,5.06549597 25.7811128,5.06549597 C25.8911128,5.06549597 25.9942378,5.11774598 26.0588628,5.20574598 C26.2802378,5.51099599 26.6652379,5.89737101 27.3183629,6.22324603 C27.6992379,6.41437104 28.1516129,6.53399604 28.568238,6.60962104 C28.749738,6.64124605 28.872113,6.80899605 28.848738,6.99049606 C28.653488,8.50987113 27.3527379,9.68824618 25.7811128,9.68824618 M31.6248631,6.57112104 C31.6124881,3.3591209 28.994488,0.75074578 25.7811128,0.75074578 C22.5663627,0.75074578 19.9497376,3.3591209 19.9373626,6.57112104 C19.9153626,8.62812113 19.3749875,9.40499617 18.9707375,9.80512119 C18.4303625,10.3399962 18.4248625,11.2089963 18.9597375,11.7493713 C19.2278625,12.0216213 19.5826125,12.1577463 19.9373626,12.1577463 C20.2866126,12.1577463 20.6358626,12.0243713 20.9039876,11.7603713 C21.1143626,11.5513713 21.3068626,11.3286213 21.4787376,11.0907462 C21.5351126,11.0123712 21.6217376,10.9614962 21.7166126,10.9491212 C21.8128626,10.9381212 21.9091127,10.9683712 21.9806127,11.0302462 C23.0036127,11.9074963 24.3318628,12.4382463 25.7811128,12.4382463 C27.2303629,12.4382463 28.558613,11.9074963 29.581613,11.0302462 C29.653113,10.9683712 29.749363,10.9381212 29.845613,10.9504962 C29.940488,10.9614962 30.027113,11.0123712 30.083488,11.0907462 C30.255363,11.3286213 30.447863,11.5513713 30.658238,11.7603713 C30.9263631,12.0243713 31.2756131,12.1577463 31.6248631,12.1577463 C31.9796131,12.1577463 32.3343631,12.0216213 32.6024881,11.7493713 C33.1373632,11.2089963 33.1318632,10.3399962 32.5914881,9.80512119 C32.1872381,9.40499617 31.6468631,8.62812113 31.6248631,6.57112104' />
                </g>
                <g transform='translate(13,0)'>
                    <path d='M6.112032,9.913968 C5.287872,9.913968 4.479072,9.682128 3.772032,9.242928 C3.634272,9.157008 3.460032,9.147408 3.312672,9.217488 L1.800672,9.937488 C1.754592,9.959568 1.699872,9.949968 1.663872,9.913968 C1.627872,9.877968 1.618752,9.823728 1.640832,9.777648 L2.360832,8.265648 C2.430432,8.118288 2.421312,7.945008 2.334912,7.805808 C1.896192,7.099728 1.663872,6.290928 1.663872,5.466288 C1.663872,3.013968 3.659712,1.019088 6.112032,1.019088 C8.564352,1.019088 10.560192,3.013968 10.560192,5.466288 C10.560192,7.918608 8.564352,9.913968 6.112032,9.913968 M6.112032,0.059088 C3.129792,0.059088 0.703872,2.485008 0.703872,5.466288 C0.703872,6.381648 0.938592,7.280688 1.384032,8.082768 L0.046272,10.891728 C-0.040608,11.074608 -0.003168,11.293488 0.140832,11.437008 C0.211392,11.508048 0.426432,11.655408 0.686112,11.531088 L3.495552,10.193808 C4.298112,10.639248 5.197152,10.873968 6.112032,10.873968 C9.094272,10.873968 11.520192,8.448048 11.520192,5.466288 C11.520192,2.485008 9.094272,0.059088 6.112032,0.059088' />
                    <path d='M3.84,3.898752 C3.44256,3.898752 3.12,4.220832 3.12,4.618752 C3.12,5.016192 3.44256,5.338752 3.84,5.338752 C4.23744,5.338752 4.56,5.016192 4.56,4.618752 C4.56,4.220832 4.23744,3.898752 3.84,3.898752' />
                    <path d='M8.4,3.898752 C8.00256,3.898752 7.68,4.220832 7.68,4.618752 C7.68,5.016192 8.00256,5.338752 8.4,5.338752 C8.79744,5.338752 9.12,5.016192 9.12,4.618752 C9.12,4.220832 8.79744,3.898752 8.4,3.898752' />
                    <path d='M7.32,6.06648 L4.93584,6.06648 C4.80336,6.06648 4.69584,6.174 4.69584,6.30648 C4.69584,7.09608 5.33808,7.73832 6.12816,7.73832 C6.91776,7.73832 7.56,7.09608 7.56,6.30648 C7.56,6.174 7.45248,6.06648 7.32,6.06648' />
                </g>
            </g>
        </g>
    </g>, { viewBox: '0 0 33 32' })
