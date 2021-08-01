
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const LocationGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-582,-208)' className={cx('svg-filling', 'stroke')}>
            <g transform='translate(399,169)'>
                <path d='M191,43.5 C191,45.4338667 187.5,50.7333333 187.5,50.7333333 C187.5,50.7333333 184,45.4338667 184,43.5 C184,41.5670667 185.5666,40 187.5,40 C189.432933,40 191,41.5670667 191,43.5 L191,43.5 Z' />
                <path d='M188.9,43.5 C188.9,44.2732667 188.2728,44.9 187.5,44.9 C186.726733,44.9 186.1,44.2732667 186.1,43.5 C186.1,42.7272 186.726733,42.1 187.5,42.1 C188.2728,42.1 188.9,42.7272 188.9,43.5 L188.9,43.5 Z' />
            </g>
        </g>
    </g>, { viewBox: '0 0 9 12' })
