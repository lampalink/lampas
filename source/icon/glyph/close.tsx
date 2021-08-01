
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const CloseGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-789,-316)' className={cx('svg-filling', 'stroke')} strokeWidth='2'>
            <path d='M790,326 L799,317' />
            <path d='M799,326 L790,317' />
        </g>
    </g>, { viewBox: '0 0 11 11' })
