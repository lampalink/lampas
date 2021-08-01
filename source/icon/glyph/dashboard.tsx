

import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const DashboardGlyph = withGlyph(() =>
    <g>
        <path d='M0 0h48v48h-48z' fill='none' />
        <path
            className={cx('svg-filling', 'fill')}
            d='M6 26h16v-20h-16v20zm0 16h16v-12h-16v12zm20 0h16v-20h-16v20zm0-36v12h16v-12h-16z'
        />
    </g>, { viewBox: '0 0 48 48' })
