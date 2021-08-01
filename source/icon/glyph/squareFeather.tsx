
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const SquareFeatherGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-22,-167)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <g transform='translate(23,168)'>
                <path d='M12.5778253,9.58044348 L12.5778253,14.5715308 C12.5778253,15.1228311 12.1309081,15.5697483 11.5796078,15.5697483 L1.59743316,15.5697483 C1.04613287,15.5697483 0.599215686,15.1228311 0.599215686,14.5715308 L0.599215686,4.58935614 C0.599215686,4.03805585 1.04613287,3.59113867 1.59743316,3.59113867 L6.5885205,3.59113867' />
                <path d='M7.4077243,8.75391942 L11.2901248,4.87151894' />
                <path d='M15.5252288,0.636414961 C15.0297857,0.582778747 14.5300004,0.582778747 14.0345573,0.636414961 L12.7036007,2.75263599 L11.8843969,1.22935614 C8.91636364,2.68542269 7.75843137,6.20580296 8.85513963,7.30517313 C10.3291741,8.77987307 16.1567677,6.19715174 15.5252288,0.636414961 Z' />
            </g>
        </g>
    </g>, { viewBox: '0 0 18 18' })
