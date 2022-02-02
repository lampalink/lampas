
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const ACStoryGlyph = withGlyph(() =>
    <g>
        <g transform='translate(-423,-574)'>
            <g transform='translate(423,574)' className={cx('svg-filling', 'fill')}>
                <circle id='Oval' cx='16' cy='16' r='16' />
            </g>
            <g
                transform='translate(434,584)' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'
                className={cx('svg-filling', 'fill', 'stroke-secondary')}
            >
                <path d='M9.53058867,11.8906515 L1.23084617,11.8906515 C0.576014565,11.8906515 0.0451686667,11.3598056 0.0451686667,10.704974' />
                <path d='M1.626072,0.0338765 C0.752963198,0.0338765 0.0451686667,0.741671031 0.0451686667,1.61477983 L0.0451686667,10.704974 C0.0451686667,10.0501424 0.576014565,9.5192965 1.23084617,9.5192965 L9.13536283,9.5192965 C9.35364003,9.5192965 9.53058867,9.34234787 9.53058867,9.12407067 L9.53058867,0.429102333 C9.53058867,0.210825133 9.35364003,0.0338765 9.13536283,0.0338765 L1.626072,0.0338765 Z' />
                <path d='M8.740137,11.8906515 L8.740137,9.5192965' />
            </g>
        </g>
    </g>, { viewBox: '0 0 32 32' })
