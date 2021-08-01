
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const FolderGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-662,-190)' className={cx('svg-filling', 'fill')}>
            <path d='M686.166667,194.833333 L668.645833,194.833333 C668.312333,194.833333 668.041667,195.104 668.041667,195.4375 L668.041667,210.541667 C668.041667,211.874458 666.957792,212.958333 665.625,212.958333 C664.292208,212.958333 663.208333,211.874458 663.208333,210.541667 L663.208333,191.208333 L670.458333,191.208333 L670.458333,193.020833 C670.458333,193.354333 670.729,193.625 671.0625,193.625 L686.166667,193.625 L686.166667,194.833333 Z M690.395833,194.833333 L687.375,194.833333 L687.375,193.020833 C687.375,192.687333 687.104333,192.416667 686.770833,192.416667 L671.666667,192.416667 L671.666667,190.604167 C671.666667,190.270667 671.396,190 671.0625,190 L662.604167,190 C662.270667,190 662,190.270667 662,190.604167 L662,210.541667 C662,212.54025 663.626417,214.166667 665.625,214.166667 L686.770833,214.166667 C689.102917,214.166667 691,212.269583 691,209.9375 L691,195.4375 C691,195.104 690.729333,194.833333 690.395833,194.833333 L690.395833,194.833333 Z' />
        </g>
    </g>, { viewBox: '0 0 29 25' })
