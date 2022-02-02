
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const DotsVerticalGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinejoin='round'>
        <g transform='translate(-39,-273)' className={cx('svg-filling', 'stroke')}>
            <path d='M43,275.5 C43,276.328 42.328,277 41.5,277 C40.672,277 40,276.328 40,275.5 C40,274.672 40.672,274 41.5,274 C42.328,274 43,274.672 43,275.5 L43,275.5 Z' transform='translate(41.5,275.5) rotate(90) translate(-41.5,-275.5)' />
            <path d='M43,281.5 C43,282.328 42.328,283 41.5,283 C40.672,283 40,282.328 40,281.5 C40,280.672 40.672,280 41.5,280 C42.328,280 43,280.672 43,281.5 L43,281.5 Z' transform='translate(41.5,281.5) rotate(90) translate(-41.5,-281.5)' />
            <path d='M43,287.5 C43,288.328 42.328,289 41.5,289 C40.672,289 40,288.328 40,287.5 C40,286.672 40.672,286 41.5,286 C42.328,286 43,286.672 43,287.5 L43,287.5 Z' transform='translate(41.5,287.5) rotate(90) translate(-41.5,-287.5)' />
        </g>
    </g>, { viewBox: '0 0 5 17' })
