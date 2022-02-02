
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const CaretRightGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-858,-63)' className={cx('svg-filling', 'fill')}>
            <path
                d='M857.293177,66.8621818 L860.79303,70.6803636 C860.988022,70.8930909 861.244011,71 861.5,71 C861.755989,71 862.011978,70.8930909 862.20697,70.6803636 L865.706823,66.8621818 C865.992811,66.5501818 866.078807,66.0810909 865.923814,65.6730909 C865.707823,65.1047273 865.171846,65 864.999853,65 L862.999937,65 L860.000063,65 L858.000147,65 C857.834154,65 857.293177,65.1003636 857.076186,65.6730909 C856.921193,66.0810909 857.007189,66.5501818 857.293177,66.8621818 Z'
                transform='translate(861.500000, 68.000000) rotate(-90.000000) translate(-861.500000, -68.000000)'
            />
        </g>
    </g>, { viewBox: '0 0 7 10' })
