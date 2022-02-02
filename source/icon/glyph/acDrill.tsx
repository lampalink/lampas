
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const ACDrillGlyph = withGlyph(() =>
    <g>
        <g transform='translate(-303,-576)'>
            <g transform='translate(303,576)' className={cx('svg-filling', 'fill')}>
                <circle id='Oval' cx='16' cy='16' r='16' />
            </g>
            <g
                transform='translate(311,586)' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.25'
                className={cx('svg-filling', 'fill', 'stroke-secondary')}
            >
                <path d='M0.270531401,4.05797101 L0.270531401,7.30434783' />
                <path d='M12.4444444,3.97903932e-14 L12.4444444,11.3623188' />
                <path d='M0.270531401,4.86956522 L12.4444444,0.811594203' />
                <path d='M0.270531401,6.49275362 L12.4444444,10.5507246' />
                <path d='M2.63822222,7.28216425 L2.63822222,7.30434783 C2.68550833,8.82921996 3.68106557,10.1618573 5.12991103,10.6396835 C6.57875648,11.1175097 8.17176597,10.6385762 9.11690821,9.44100483' />
            </g>
        </g>
    </g>, { viewBox: '0 0 32 32' })
