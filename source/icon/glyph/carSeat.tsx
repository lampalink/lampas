
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const CarSeatGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-327,-189)'>
            <g transform='translate(327,189)'>
                <path d='M0,13.5 C0,20.944125 6.057,27 13.5,27 C20.944125,27 27,20.944125 27,13.5 C27,6.055875 20.944125,0 13.5,0 C6.057,0 0,6.055875 0,13.5 Z' className={cx('svg-filling', 'fill')} />
                <path d='M16.869,18.838 C16.68,19.044 16.362,19.053 16.162,18.869 L10.162,13.369 C10.059,13.274 10,13.141 10,13 L10,7.5 C10,7.224 10.224,7 10.5,7 C10.776,7 11,7.224 11,7.5 L11,12.78 L16.838,18.131 C17.042,18.318 17.055,18.635 16.869,18.838' stroke='#fff' fill='#fff' />
            </g>
        </g>
    </g>, { viewBox: '0 0 27 27' })
