
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const OpenGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-1078,-61)' className={cx('svg-filling', 'stroke')} strokeWidth='2'>
            <path d='M1079,74 L1089,63.2855339' />
            <path d='M1083.25,65.0961941 L1087.75,59.8890873' transform='translate(1085.250000, 62.889087) rotate(45.000000) translate(-1085.250000, -62.889087)' />
            <path d='M1087.25,67.8106602 L1091.75,62.6035534' transform='translate(1089.250000, 65.603553) rotate(139.166309) translate(-1089.250000, -65.603553)' />
        </g>
    </g>, { viewBox: '0 0 13 14' })
