
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const ChevronUpGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-541,-573)' className={cx('svg-filling', 'stroke')}>
            <polyline transform='translate(545,575) scale(1, -1) translate(-545,-575)' points='548 574 544.988154 577 542 574' />
        </g>
    </g>, { viewBox: '0 0 8 5' })
