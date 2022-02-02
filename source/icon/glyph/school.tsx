
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const SchoolGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' className={cx('svg-filling', 'stroke', 'fill')}>
        <path d='M472,192H336v-24c0-2.56-1.225-4.966-3.296-6.472L248,99.928V72h88c4.418,0,8-3.582,8-8V16c0-4.418-3.582-8-8-8h-88 c0-4.418-3.582-8-8-8s-8,3.582-8,8v91.928l-84.704,61.6C145.225,163.034,144,165.44,144,168v24H8c-4.418,0-8,3.582-8,8v272 c0,4.418,3.582,8,8,8h464c4.418,0,8-3.582,8-8V200C480,195.582,476.418,192,472,192z M248,24h80v32h-80V24z M144,464H16V208h128 V464z M272,464h-64v-80h64V464z M320,464h-32v-88c0-4.418-3.582-8-8-8h-80c-4.418,0-8,3.582-8,8v88h-32V172.072l80-58.184 l80,58.184V464z M464,464H336V208h128V464z' />
		<rect x='40' y='232' width='32' height='16' />
		<rect x='88' y='232' width='32' height='16' />
		<rect x='40' y='264' width='32' height='16' />
		<rect x='88' y='264' width='32' height='16' />
		<rect x='40' y='296' width='32' height='16' />
		<rect x='88' y='296' width='32' height='16' />
		<rect x='40' y='328' width='32' height='16' />
		<rect x='88' y='328' width='32' height='16' />
		<rect x='40' y='360' width='32' height='16' />
		<rect x='88' y='360' width='32' height='16' />
		<rect x='360' y='232' width='32' height='16' />
		<rect x='408' y='232' width='32' height='16' />
		<rect x='360' y='264' width='32' height='16' />
		<rect x='408' y='264' width='32' height='16' />
		<rect x='360' y='296' width='32' height='16' />
		<rect x='408' y='296' width='32' height='16' />
		<rect x='360' y='328' width='32' height='16' />
		<rect x='408' y='328' width='32' height='16' />
		<rect x='360' y='360' width='32' height='16' />
		<rect x='408' y='360' width='32' height='16' />
		<path d='M184,240c0.035,30.913,25.087,55.965,56,56c30.928,0,56-25.072,56-56c0-30.928-25.072-56-56-56 C209.072,184,184,209.072,184,240z M280,240c0,22.091-17.909,40-40,40c-22.091,0-40-17.909-40-40c0.026-22.08,17.92-39.974,40-40 C262.091,200,280,217.909,280,240z' />
		<polygon points='232,232 216,232 216,248 248,248 248,208 232,208' />
    </g>, { viewBox: '0 0 480 480' })
