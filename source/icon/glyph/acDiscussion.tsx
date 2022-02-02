
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const ACDiscussionGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-687,-552)'>
            <g transform='translate(687,552)' className={cx('svg-filling', 'fill')}>
                <circle cx='16' cy='16' r='16' />
            </g>
            <g strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' className={cx('svg-filling', 'stroke-secondary')}>
                <path d='M710,568.85 C710.000196,567.828857 709.590539,566.849481 708.861188,566.127424 C708.131837,565.405367 707.142569,564.999806 706.111111,565 L703.888889,565 C701.741115,565 700,566.723704 700,568.85 C700,570.976296 701.741115,572.7 703.888889,572.7 L704.444444,572.7 L707.777778,576 L707.777778,572.315733 C709.132346,571.682209 709.997371,570.333135 710,568.85 L710,568.85 Z' />
                <path d='M698.065981,568.800002 L696.033569,571 L696.033569,567.315737 C694.53043,566.547086 693.721565,564.75206 694.087324,562.996649 C694.453082,561.241237 695.895455,559.995825 697.557878,560 L699.59029,560 C701.163526,560 702.550076,561.118175 703,562.750008' />
            </g>
        </g>
    </g>, { viewBox: '0 0 32 32' })
