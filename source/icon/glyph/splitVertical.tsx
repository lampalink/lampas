
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const SplitVerticalGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' className={cx('svg-filling', 'fill', 'stroke')}>
        <path
            d='M 25 0.09375 L 24.28125 0.78125 L 15.78125 9.28125 A 1.016466 1.016466 0 1 0 17.21875 10.71875 L 24 3.9375 L 24 20 L 0 20 L 0 22 L 24.8125 22 L 25.21875 22 L 50 22 L 50 20 L 26 20 L 26 3.9375 L 32.78125 10.71875 A 1.016466 1.016466 0 1 0 34.21875 9.28125 L 25.71875 0.78125 L 25 0.09375 z M 24.90625 27.96875 A 1.0001 1.0001 0 0 0 24.8125 28 L 24.78125 28 L 0 28 L 0 30 L 24 30 L 24 46.0625 L 17.21875 39.28125 A 1.0001 1.0001 0 0 0 16.28125 39 A 1.0001 1.0001 0 0 0 15.78125 40.71875 L 24.28125 49.21875 L 25 49.90625 L 25.71875 49.21875 L 34.21875 40.71875 A 1.016466 1.016466 0 1 0 32.78125 39.28125 L 26 46.0625 L 26 30 L 50 30 L 50 28 L 25.3125 28 L 25.21875 28 A 1.0001 1.0001 0 0 0 24.90625 27.96875 z'
        />
    </g>, { viewBox: '0 0 50 50' })
