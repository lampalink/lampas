
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const SortASCGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g className={cx('svg-filling', 'fill')}>
            <path d='M106.23,0H75.86L1.496,212.467h42.273l11.172-31.92h71.37l11.012,31.92h42.207L106.23,0z M68.906,140.647l21.976-62.791 l21.664,62.791H68.906z' />
		    <polygon points='483.288,359.814 407.478,435.624 407.478,0 367.578,0 367.578,435.624 291.768,359.814 263.555,388.027 387.528,512 511.501,388.027' />
		    <polygon points='182.043,299.247 0.499,299.247 0.499,339.147 122.039,339.147 0.499,480.372 0.499,511.717 180.048,511.717 180.048,471.817 60.503,471.817 182.043,330.592' />
        </g>
    </g>, { viewBox: '0 0 512 512' })
