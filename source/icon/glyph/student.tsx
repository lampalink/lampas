
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const StudentGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-25,-217)' className={cx('svg-filling', 'stroke')}>
            <path d='M36.0625,221.513651 C36.0625,223.204734 34.6910833,224.576151 33,224.576151 C31.3089167,224.576151 29.9375,223.204734 29.9375,221.513651 L29.9375,218.451151 L36.0625,218.451151 L36.0625,221.513651 Z' />
            <path d='M27.3125,231.576151 C27.3125,228.434901 29.85875,225.888651 33,225.888651 C36.14125,225.888651 38.6875,228.434901 38.6875,231.576151' />
            <path d='M26.4375,218.451151 L39.5625,218.451151' />
            <polyline points='30.0907417 226.688459 32.999825 228.951209 35.9094917 226.688459' />
        </g>
    </g>, { viewBox: '0 0 16 15' })

// <g id="Library" stroke="none" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
// <g id="Mylampa-planning-1-(1)" transform="translate(-20.000000, -203.000000)" class="svg-filling stroke" stroke-width="1.5">
//     <g id="setup" transform="translate(20.000000, 204.000000)">
//         <polyline id="Path" points="14.25 4.76470588 14.25 10.3524706 9.86538462 11.6470588 5.48076923 10.3524706 5.48076923 4.76470588"></polyline>
//         <polygon id="Path" points="18.6346154 3.17647059 9.86538462 0 1.09615385 3.17647059 9.86538462 6.35294118"></polygon>
//         <line x1="1.09615385" y1="3.17647059" x2="1.09615385" y2="7.41176471" id="Path"></line>
//     </g>
// </g>
//     )
