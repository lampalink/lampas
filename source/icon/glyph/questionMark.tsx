
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const QuestionMarkGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g className={cx('svg-filling', 'fill')}>
			<circle cx='255.984' cy='492' r='20' />
			<path d='M412.979,155.775C412.321,69.765,342.147,0,255.984,0c-86.57,0-157,70.43-157,157c0,11.046,8.954,20,20,20 s20-8.954,20-20c0-64.514,52.486-117,117-117s117,52.486,117,117c0,0.356,0.009,0.71,0.028,1.062 c-0.405,46.562-28.227,88.348-71.12,106.661c-40.038,17.094-65.908,56.675-65.908,100.839V412c0,11.046,8.954,20,20,20 c11.046,0,20-8.954,20-20v-46.438c0-28.117,16.334-53.258,41.614-64.051c57.979-24.754,95.433-81.479,95.418-144.516 C413.016,156.585,413.003,156.179,412.979,155.775z' />
        </g>
    </g>, { viewBox: '0 0 512 512' })
