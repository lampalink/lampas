
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const GraduateHatGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-22,-244)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <g transform='translate(22,245)'>
                <polyline points='14.25 4.76470588 14.25 10.3524706 9.86538462 11.6470588 5.48076923 10.3524706 5.48076923 4.76470588' />
                <polygon points='18.6346154 3.17647059 9.86538462 0 1.09615385 3.17647059 9.86538462 6.35294118' />
                <path d='M1.09615385,3.17647059 L1.09615385,7.41176471' />
            </g>
        </g>
    </g>, { viewBox: '0 0 20 14' })
