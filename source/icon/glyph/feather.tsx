
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const FeatherGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-376,-113)' strokeWidth='1.5' className={cx('svg-filling', 'stroke')}>
            <g transform='translate(362,113)'>
                <path d='M14.8154486,17.5078388 L22.5802496,9.74303788' />
                <path d='M31.0504575,1.27282992 C30.0595714,1.16555749 29.0600008,1.16555749 28.0691147,1.27282992 L25.4072014,5.50527199 L23.7687938,2.45871228 C17.8327273,5.37084537 15.5168627,12.4116059 17.7102793,14.6103463 C20.6583482,17.5597461 32.3135354,12.3943035 31.0504575,1.27282992 Z' />
            </g>
        </g>
    </g>, { viewBox: '0 0 18 19' })
