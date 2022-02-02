
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const LoaderGlyph = withGlyph(() =>
    <g>
        <path opacity='1' fillOpacity='0' className={cx('svg-filling', 'stroke')} strokeWidth='2' strokeLinecap='round' strokeOpacity='1' d='M17.5 10C17.5 10 17.5 10 17.5 10C17.5 5.86 14.14 2.5 10 2.5C10 2.5 10 2.5 10 2.5C10 2.5 10 2.5 10 2.5C5.86 2.5 2.5 5.86 2.5 10C2.5 10 2.5 10 2.5 10' />
        <path opacity='1' fillOpacity='0' className={cx('svg-filling', 'stroke')} strokeWidth='1' strokeLinecap='round' strokeOpacity='.75' d='M17.5 11.25C17.5 10.58 17.5 10.17 17.5 10C17.5 5.86 14.14 2.5 10 2.5C10 2.5 10 2.5 10 2.5C10 2.5 10 2.5 10 2.5C5.86 2.5 2.5 5.86 2.5 10C2.5 10.17 2.5 10.58 2.5 11.25' />
        <path opacity='1' fillOpacity='0' className={cx('svg-filling', 'stroke')} strokeWidth='2' strokeLinecap='round' strokeOpacity='.25' d='M17.5 12.5C17.5 11.17 17.5 10.33 17.5 10C17.5 5.86 14.14 2.5 10 2.5C10 2.5 10 2.5 10 2.5C10 2.5 10 2.5 10 2.5C5.86 2.5 2.5 5.86 2.5 10C2.5 10.33 2.5 11.17 2.5 12.5' />
    </g>, { viewBox: '0 0 20 20' })
