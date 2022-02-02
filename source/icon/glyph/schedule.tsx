
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const ScheduleGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' className={cx('svg-filling', 'stroke')}>
        <rect strokeWidth='3' x='1' y='1' width='94' height='78' rx='16' />
        <path d='M7.10542736e-15,20 L96,20' strokeWidth='3' />
        <g
            // opacity='.71'
            strokeWidth='2'
        >
            <path d='M7.10542736e-15,60 L96,60' />
            <path d='M0,40 L96,40' />
            <path d='M24,20 L24,80' />
            <path d='M48,20 L48,80' />
            <path d='M70,20 L70,80' />
        </g>
    </g>, { viewBox: '0 0 96 80' })
