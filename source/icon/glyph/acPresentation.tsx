
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const ACPresentationGlyph = withGlyph(() =>
    <g>
        <g transform='translate(-643,-471)'>
            <g transform='translate(643,471)' className={cx('svg-filling', 'fill')}>
                <circle cx='16' cy='16' r='16' />
            </g>
            <g
                transform='translate(654,480)' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25'
                className={cx('svg-filling', 'fill', 'stroke-secondary')}
            >
                <path d='M4.74074089,10.4107747 L4.74074089,14.1818186' />
                <path d='M2.85521894,14.1818186 L6.62626283,14.1818186' />
                <path d='M0.0269360278,4.7542089 L0.0269360278,6.63973085 C0.0269360278,8.72242088 1.71528989,10.4107747 3.79797992,10.4107747 L5.68350186,10.4107747 C7.76619189,10.4107747 9.45454575,8.72242088 9.45454575,6.63973085 L9.45454575,4.7542089' />
                <path d='M5.68350186,8.52525279 L3.79797992,8.52525279 C2.69269338,8.45781553 1.84984483,7.50961092 1.91245797,6.4040406 L1.91245797,2.16161623 C1.84984483,1.05604592 2.69269338,0.107841307 3.79797992,0.0404040417 L5.68350186,0.0404040417 C6.7887884,0.107841307 7.63163694,1.05604592 7.56902381,2.16161623 L7.56902381,6.4040406 C7.63163694,7.50961092 6.7887884,8.45781553 5.68350186,8.52525279 Z' />
                <path d='M1.91245797,2.86868696 L3.79797992,2.86868696' />
                <path d='M5.68350186,2.86868696 L7.56902381,2.86868696' />
                <path d='M1.91245797,4.7542089 L3.79797992,4.7542089' />
                <path d='M5.68350186,4.7542089 L7.56902381,4.7542089' />
            </g>
        </g>
    </g>, { viewBox: '0 0 32 32' })