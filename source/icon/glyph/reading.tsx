
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const ReadingGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-391,-363)'>
            <g transform='translate(391,363)'>
                <circle fill='#F2F2FC' cx='16' cy='16' r='16' />
                <g className={cx('svg-filling', 'stroke')}>
                    <path d='M11.2631579,14 C13.0798246,14 14.5526316,15.472807 14.5526316,17.2894737 C14.5526316,19.1061404 13.0798246,20.5789474 11.2631579,20.5789474 C9.44649123,20.5789474 7.97368421,19.1061404 7.97368421,17.2894737 C7.97368421,15.472807 9.44649123,14 11.2631579,14 Z' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M20.4736842,14 C22.2903509,14 23.7631579,15.472807 23.7631579,17.2894737 C23.7631579,19.1061404 22.2903509,20.5789474 20.4736842,20.5789474 C18.6570175,20.5789474 17.1842105,19.1061404 17.1842105,17.2894737 C17.1842105,15.472807 18.6570175,14 20.4736842,14 Z' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M14.5526316,17.3517544 C14.5526316,16.6254386 15.1421053,16.0359649 15.8684211,16.0359649 C16.5947368,16.0359649 17.1842105,16.6254386 17.1842105,17.3517544' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    <line x1='25.7368421' y1='17.2894737' x2='23.7631579' y2='17.2894737' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    <line x1='7.97368421' y1='17.2894737' x2='6' y2='17.2894737' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                </g>
            </g>
        </g>
    </g>, { viewBox: '0 0 32 32' })
