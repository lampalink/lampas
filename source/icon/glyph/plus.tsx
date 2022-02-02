

import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const PlusGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-588,-425)' className={cx('svg-filling', 'stroke')}>
            <path d='M589,429 L595,429' />
            <path d='M592,432 L592,426' />
        </g>
    </g>, { viewBox: '0 0 8 8' })
