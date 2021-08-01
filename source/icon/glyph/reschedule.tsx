
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const RescheduleGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-836,-61)' className={cx('svg-filling', 'stroke')} strokeWidth='2'>
            <g transform='translate(837,62)'>
                <path d='M15.7142857,3.71085714 L4.57142857,3.71085714 C2.20457143,3.71085714 0.285714286,5.62971429 0.285714286,7.99657143 C0.285714286,10.3634286 2.20457143,12.2822857 4.57142857,12.2822857' />
                <polyline points='12.2857143 0.282285714 15.7142857 3.71085714 12.2857143 7.13942857' />
            </g>
        </g>
    </g>, { viewBox: '0 0 18 15' })

export const RescheduleGlyphOld = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-1272,-27)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <g transform='translate(1281.5,35.5) scale(-1, 1) translate(-1281.5,-35.5) translate(1273,28)'>
                <polyline points='0.000269781689 5.02315448 2.3184516 8.50042721 5.02299705 5.40951812' />
                <path d='M2.32301069,8.50042721 C1.73882887,3.79915448 5.33741978,0.154199938 9.3896016,0.00506357424 C13.4410107,-0.144072789 16.8464198,3.01947267 16.9947834,7.07088176 C17.146238,11.1230636 13.9811471,14.5284727 9.92973796,14.6768363' />
                <polyline points='9.65936069 3.47244539 9.65936069 7.72244539 13.5229971 7.72244539' />
            </g>
        </g>
    </g>, { viewBox: '0 0 19 17' })