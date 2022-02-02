
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const MinusCircleGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinejoin='round'>
        <g transform='translate(-575,-402)' className={cx('svg-filling', 'stroke')}>
            <path d='M588,409 C588,412.314 585.313,415 582,415 C578.686,415 576,412.314 576,409 C576,405.687 578.686,403 582,403 C585.313,403 588,405.687 588,409 L588,409 Z' />
            <path d='M579.2725,409 L584.7265,409' strokeLinecap='round' />
        </g>
    </g>, { viewBox: '0 0 14 14' })
