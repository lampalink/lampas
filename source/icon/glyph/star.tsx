
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const StarGlyph = withGlyph(() =>
    <g className={cx('svg-filling', 'fill')}>
        <path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' />
    </g>, { viewBox: '0 0 24 24' })
