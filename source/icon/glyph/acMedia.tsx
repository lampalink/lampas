
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const ACMediaGlyph = withGlyph(() =>
    <g>
        <g transform='translate(-643,-574)'>
            <g transform='translate(643,574)' className={cx('svg-filling', 'fill')}>
                <circle id='Oval' cx='16' cy='16' r='16' />
            </g>
            <g
                transform='translate(653,584)' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25'
                className={cx('svg-filling', 'fill', 'stroke-secondary')}
            >
                <path d='M11.2346651,11.2004826 C11.2346651,11.640981 10.8775707,11.9980754 10.4370723,11.9980754 L0.865957962,11.9980754 C0.425459589,11.9980754 0.0683651023,11.640981 0.0683651023,11.2004826 L0.0683651023,0.831775411 C0.0683651023,0.391277038 0.425459589,0.0341825511 0.865957962,0.0341825511 L8.84188656,0.0341825511 C9.04989756,0.0341825511 9.2496705,0.115486382 9.39860638,0.260698923 L10.9937921,1.7936724 C11.1477868,1.94377519 11.2346651,2.14970191 11.2346651,2.36474889 L11.2346651,11.2004826 Z' />
                <path d='M4.71460938,8.36105201 C4.57352037,8.43140897 4.40606979,8.42374264 4.27199979,8.34078817 C4.13792978,8.25783371 4.0563294,8.11140644 4.0563294,7.95374792 L4.0563294,4.87610294 C4.0563294,4.71844442 4.13792978,4.57201715 4.27199979,4.48906269 C4.40606979,4.40610822 4.57352037,4.39844189 4.71460938,4.46879885 L7.79278609,6.00815307 C7.94696162,6.08510736 8.04438002,6.24261159 8.04438002,6.41492543 C8.04438002,6.58723927 7.94696162,6.7447435 7.79278609,6.82169779 L4.71460938,8.36105201 Z' />
            </g>
        </g>
    </g>, { viewBox: '0 0 32 32' })
