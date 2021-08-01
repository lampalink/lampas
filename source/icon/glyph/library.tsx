
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const LibraryGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-24,-206)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <g transform='translate(25,207)'>
                <path d='M11,13.4499865 L1.375,13.4499865 C0.615388889,13.4499865 0,12.8520378 0,12.1139541 C0,12.1139541 0,12.1133603 0,12.1133603 L0,12.1133603 C0,11.3752767 0.615388889,10.7773279 1.375,10.7773279 L10.0833333,10.7773279 C10.5893333,10.7773279 11,10.3782996 11,9.88663968 L11,0.979757085 C11,0.488097166 10.5893333,0.0890688259 10.0833333,0.0890688259 L1.19594444,0.0890688259 C0.535333333,0.0890688259 0,0.609230769 0,1.25112011 C0,1.25112011 0,1.2517139 0,1.2517139 L0,12.291498' />
                <path d='M10.0833333,10.7779217 L10.0833333,13.4499865' />
            </g>
        </g>
    </g>, { viewBox: '0 0 13 16' })
