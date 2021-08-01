
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const CheckCircleGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinejoin='round'>
        <g transform='translate(-22,-144)' className={cx('svg-filling', 'stroke')}>
            <g transform='translate(23,145)'>
                <path d='M19,9.5 C19,14.7455833 14.7455833,19 9.5,19 C4.25283333,19 0,14.7455833 0,9.5 C0,4.25441667 4.25283333,0 9.5,0 C14.7455833,0 19,4.25441667 19,9.5 L19,9.5 Z' />
                <polyline strokeLinecap='round' points='14.6814583 6.90855833 8.637875 13.5363917 4.31695833 9.21705833' />
            </g>
        </g>
    </g>, { viewBox: '0 0 21 21' })
