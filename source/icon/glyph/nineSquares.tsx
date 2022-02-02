

import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const NineSquaresGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
		<g className={cx('svg-filling', 'fill')}>
			<rect x='128' y='128' width='85.333' height='85.333' />
			<rect x='0' y='0' width='85.333' height='85.333' />
			<rect x='128' y='256' width='85.333' height='85.333' />
			<rect x='0' y='128' width='85.333' height='85.333' />
			<rect x='0' y='256' width='85.333' height='85.333' />
			<rect x='256' y='0' width='85.333' height='85.333' />
			<rect x='128' y='0' width='85.333' height='85.333' />
			<rect x='256' y='128' width='85.333' height='85.333' />
			<rect x='256' y='256' width='85.333' height='85.333' />
		</g>
    </g>, { viewBox: '0 0 341.333 341.333' })
