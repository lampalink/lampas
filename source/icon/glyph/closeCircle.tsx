
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const CloseCircleGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinejoin='round'>
        <g transform='translate(-1305,-27)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <path d='M1321.65936,35.5 C1321.65936,39.6425 1318.30186,43 1314.15936,43 C1310.01686,43 1306.65936,39.6425 1306.65936,35.5 C1306.65936,31.3575 1310.01686,28 1314.15936,28 C1318.30186,28 1321.65936,31.3575 1321.65936,35.5 L1321.65936,35.5 Z' />
            <path d='M1310.65936,39 L1317.65936,32' strokeLinecap='round' />
            <path d='M1317.65936,39 L1310.65936,32' strokeLinecap='round' />
        </g>
    </g>, { viewBox: '0 0 18 17' })
