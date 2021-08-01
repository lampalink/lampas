
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const PencilGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-481,-363)'>
            <g transform='translate(430.078947,362.078941)'>
                <g transform='translate(51,1)'>
                    <circle id='Oval' fill='#F2F2FC' cx='16' cy='16' r='16' />
                    <g transform='translate(11,11)' className={cx('svg-filling', 'stroke')} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'>
                        <path d='M9.50717533,3.01673971 L3.13285655,9.37500654 L0,10 L0.626571309,6.87503268 L7.00089009,0.516765854 C7.69011853,-0.17156028 8.80792175,-0.172393604 9.49882104,0.515099205 C9.49965647,0.51593253 9.5004919,0.516765854 9.5004919,0.516765854 L9.50717533,0.523432451 C10.1738472,1.20759196 10.1546323,2.31424705 9.50717533,3.01673971 Z' />
                    </g>
                </g>
            </g>
        </g>
    </g>, { viewBox: '0 0 32 32' })
