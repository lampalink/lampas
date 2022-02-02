
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const DotsHorizontalGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinejoin='round'>
        <g transform='translate(-33,-279)' className={cx('svg-filling', 'stroke')}>
            <path d='M37,281.5 C37,282.328 36.328,283 35.5,283 C34.672,283 34,282.328 34,281.5 C34,280.672 34.672,280 35.5,280 C36.328,280 37,280.672 37,281.5 L37,281.5 Z' />
            <path d='M43,281.5 C43,282.328 42.328,283 41.5,283 C40.672,283 40,282.328 40,281.5 C40,280.672 40.672,280 41.5,280 C42.328,280 43,280.672 43,281.5 L43,281.5 Z' />
            <path d='M49,281.5 C49,282.328 48.328,283 47.5,283 C46.672,283 46,282.328 46,281.5 C46,280.672 46.672,280 47.5,280 C48.328,280 49,280.672 49,281.5 L49,281.5 Z' />
        </g>
    </g>, { viewBox: '0 0 17 5' })
