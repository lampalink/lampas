
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const UnderlineGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-343,-938)' className={cx('svg-filling', 'fill')} fillRule='nonzero'>
            <g transform='translate(343,938)'>
                <path d='M1.40129032,6.82393548 L1.40825806,6.82393548 C1.48025806,8.97658065 3.24967742,10.7067097 5.41935484,10.7067097 C7.58903226,10.7067097 9.35845161,8.97658065 9.43045161,6.82393548 L9.43741935,6.82393548 L9.43741935,0.834 L10.700129,0.834 L10.700129,0.14516129 L7.48567742,0.14516129 L7.48567742,0.834 L8.74858065,0.834 L8.74858065,6.68883871 C8.74858065,8.52445161 7.25496774,10.0180645 5.41935484,10.0180645 C3.58374194,10.0180645 2.09012903,8.52445161 2.09012903,6.68883871 L2.09012903,0.834 L3.35303226,0.834 L3.35303226,0.14516129 L0.138580645,0.14516129 L0.138580645,0.834 L1.40129032,0.834 L1.40129032,6.82393548 Z' />
                <rect x='1.74580645' y='11.166' width='7.34729032' height='1' />
            </g>
        </g>
    </g>, { viewBox: '0 0 11 12' })