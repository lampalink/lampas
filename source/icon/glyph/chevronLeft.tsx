
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const ChevronLeftGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-479,-49)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <polyline
                transform='translate(483,54.9095) rotate(90) translate(-483,-54.9095)'
                points='478 52.4095 483 57.4095 488 52.4095'
            />
        </g>
    </g>, { viewBox: '0 0 8 13' })
