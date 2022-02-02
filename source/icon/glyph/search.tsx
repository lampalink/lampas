
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const SearchGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinejoin='round'>
        <g transform='translate(-520,-353)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <path d='M528,357.5 C528,359.432438 526.432875,361 524.5,361 C522.567125,361 521,359.432438 521,357.5 C521,355.567125 522.567125,354 524.5,354 C526.432875,354 528,355.567125 528,357.5 L528,357.5 Z' />
            <path d='M527,360 L531,364' strokeLinecap='round' />
        </g>
    </g>, { viewBox: '0 0 12 12' })
