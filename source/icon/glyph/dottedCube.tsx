
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const DottedCubeGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-427,-994)' className={cx('svg-filling', 'fill')} fillRule='nonzero'>
            <g transform='translate(427,994)'>
                <path d='M14.6285714,1.37142857 L14.6285714,14.6285714 L1.37142857,14.6285714 L1.37142857,1.37142857 L14.6285714,1.37142857 M15.52,0 L0.822857143,0 C0.365714286,0 0,0.365714286 0,0.822857143 L0,15.1542857 C0,15.6114286 0.365714286,15.9771429 0.822857143,15.9771429 L15.1542857,15.9771429 C15.6114286,15.9771429 15.9771429,15.6114286 15.9771429,15.1542857 L15.9771429,0.48 C16,0.205714286 15.7942857,0 15.52,0 L15.52,0 Z' />
                <circle cx='8' cy='8' r='1.16571429' />
                <circle cx='4' cy='3.88571429' r='1.16571429' />
                <circle cx='4' cy='12' r='1.16571429' />
                <circle cx='12' cy='3.88571429' r='1.16571429' />
                <circle cx='12' cy='12' r='1.16571429' />
            </g>
        </g>
    </g>, { viewBox: '0 0 16 16' })
