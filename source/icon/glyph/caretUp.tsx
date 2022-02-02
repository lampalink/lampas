
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const CaretUpGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-1253,-149)' className={cx('svg-filling', 'fill')}>
            <path
                d='M1253.29318,150.862182 L1256.79303,154.680364 C1256.98802,154.893091 1257.24401,155 1257.5,155 C1257.75599,155 1258.01198,154.893091 1258.20697,154.680364 L1261.70682,150.862182 C1261.99281,150.550182 1262.07881,150.081091 1261.92381,149.673091 C1261.70782,149.104727 1261.17185,149 1260.99985,149 L1258.99994,149 L1256.00006,149 L1254.00015,149 C1253.83415,149 1253.29318,149.100364 1253.07619,149.673091 C1252.92119,150.081091 1253.00719,150.550182 1253.29318,150.862182 Z'
                transform='translate(1257.500000, 152.000000) scale(1, -1) translate(-1257.500000, -152.000000)'
            />
        </g>
    </g>, { viewBox: '0 0 9 6' })
