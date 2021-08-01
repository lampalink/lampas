
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const CheckboxGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-336,-254)' className={cx('svg-filling', 'stroke')}>
            <rect x='336.5' y='254.5' width='19' height='19' rx='4' />
        </g>
    </g>, { viewBox: '0 0 20 20' })
