
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const EyeGlyph = withGlyph(() =>
    <g fill='none' className={cx('svg-filling', 'stroke')} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
        <circle cx='12' cy='12' r='3' />
    </g>, { viewBox: '0 0 24 24' })
