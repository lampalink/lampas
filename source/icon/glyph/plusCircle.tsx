
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const PlusCircleGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinejoin='round'>
        <g transform='translate(-654,-402)' className={cx('svg-filling', 'stroke')}>
            <path d='M667,409 C667,412.314 664.314,415 661,415 C657.686,415 655,412.314 655,409 C655,405.687 657.686,403 661,403 C664.314,403 667,405.687 667,409 L667,409 Z' />
            <path d='M658.2725,409 L663.7265,409' strokeLinecap='round' />
            <path d='M661,411.7275 L661,406.2735' strokeLinecap='round' />
        </g>
    </g>, { viewBox: '0 0 14 14' })
