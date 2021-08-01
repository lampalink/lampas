
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const CopyGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-739,-60)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <g transform='translate(740,61)'>
                <path
                    d='M7.41394286,12.952381 L0.863492063,12.952381 C0.386844444,12.952381 0,12.5655365 0,12.0888889 L0,0.863492063 C0,0.386844444 0.386844444,0 0.863492063,0 L12.0888889,0 C12.5655365,0 12.952381,0.386844444 12.952381,0.863492063 L12.952381,7.41394286 C12.952381,7.64305608 12.8614265,7.86238307 12.6996656,8.02414392 L8.02414392,12.6996656 C7.86238307,12.8614265 7.64305608,12.952381 7.41394286,12.952381 Z'
                />
                <path
                    d='M10.4615619,16 L3.91111111,16 C3.43446349,16 3.04761905,15.6131556 3.04761905,15.1365079 L3.04761905,3.91111111 C3.04761905,3.43446349 3.43446349,3.04761905 3.91111111,3.04761905 L15.1365079,3.04761905 C15.6131556,3.04761905 16,3.43446349 16,3.91111111 L16,10.4615619 C16,10.6906751 15.9090455,10.9100021 15.7472847,11.071763 L11.071763,15.7472847 C10.9100021,15.9090455 10.6906751,16 10.4615619,16 Z'
                    fill='#FFFFFF'
                />
                <path
                    d='M10.6666667,16 L10.6666667,11.5690919 C10.6666667,11.0709532 11.0709532,10.6666667 11.5690919,10.6666667 L16,10.6666667'
                />
                <path
                    d='M6.85714286,6.47619048 L13.7142857,6.47619048'
                />
                <path
                    d='M6.85714286,8.76190476 L9.9047619,8.76190476'
                />
            </g>
        </g>
    </g>, { viewBox: '0 0 18 18' })
