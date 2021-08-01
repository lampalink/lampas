
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const RadioUncheckedGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-385,-443)' className={cx('svg-filling', 'stroke')} fill='transparent' strokeWidth='1.5'>
            <circle cx='392' cy='450' r='6' />
        </g>
    </g>, { viewBox: '0 0 14 14' })
