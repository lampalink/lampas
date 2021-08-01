
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const CheckFilledGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-231,-477)'>
            <rect className={cx('svg-filling', 'fill', 'stroke')} x='231.5' y='477.5' width='23' height='23' rx='11.5' />
            <polyline stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' points='246 486 241.695652 492 240 490.304348' />
        </g>
    </g>, { viewBox: '0 0 24 24' })
