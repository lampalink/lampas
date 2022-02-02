
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const CheckmarkGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <polyline className={cx('svg-filling', 'stroke')} strokeWidth='2' points='7 1 2.69565217 7 1 5.30434783' />
    </g>, { viewBox: '0 0 8 8' })
