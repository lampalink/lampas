
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const HomeGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-21,-95)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <g transform='translate(22,96)'>
                <path d='M2.07434211,7.81323529 L2.07434211,13.1211397 L6.02171053,13.1211397 L6.02171053,9.26084559 C6.02171053,8.728125 6.46381579,8.29577206 7.00855263,8.29577206 L7.99539474,8.29577206 C8.54013158,8.29577206 8.98223684,8.728125 8.98223684,9.26084559 L8.98223684,13.1211397 L12.9296053,13.1211397 L12.9296053,7.81323529' />
                <path d='M0.100657895,6.84816176 L6.80394737,0.292738971 C7.18947368,-0.0842830882 7.81381579,-0.0842830882 8.19934211,0.292095588 C8.19934211,0.292095588 8.19934211,0.292095588 8.2,0.292738971 L14.9032895,6.84816176' />
            </g>
        </g>
    </g>, { viewBox: '0 0 17 15' })