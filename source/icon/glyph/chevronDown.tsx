
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const ChevronDownGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-545,-582)' className={cx('svg-filling', 'stroke')}>
            <polyline points='552 583 548.988154 586 546 583' />
        </g>
    </g>, { viewBox: '0 0 8 5' })
