
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const CheckboxFilledGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-336,-306)'>
            <rect className={cx('svg-filling', 'fill', 'stroke')} x='336.5' y='306.5' width='19' height='19' rx='4' />
            <polyline stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' points='349 313 344.695652 319 343 317.304348' />
        </g>
    </g>, { viewBox: '0 0 20 20' })
