
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const CheckRingGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-230,-380)' fill='#FFFFFF' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <circle cx='243' cy='393' r='12' />
        </g>
    </g>, { viewBox: '0 0 26 26' })
