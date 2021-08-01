
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const CommentGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-663,-470)'>
            <path
                d='M677,476.005 C677.000255,474.677514 676.4677,473.404326 675.519544,472.465651 C674.571388,471.526977 673.285339,470.999747 671.944444,471 L669.055555,471 C666.263449,471 664,473.240815 664,476.005 C664,478.769185 666.263449,481.01 669.055555,481.01 L669.777778,481.01 L674.111111,485.3 L674.111111,480.510453 C675.87205,479.686872 676.996582,477.933075 677,476.005 L677,476.005 Z'
                className={cx('svg-filling', 'stroke')}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </g>
    </g>, { viewBox: '0 0 15 17' })
