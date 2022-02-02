
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const RadioCheckedGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-299,-443)'>
            <circle className={cx('svg-filling', 'stroke')} strokeWidth='1.5' fill='transparent' cx='306' cy='450' r='6' />
            <circle className={cx('svg-filling', 'fill')} cx='306' cy='450' r='3' />
        </g>
    </g>, { viewBox: '0 0 14 14' })
