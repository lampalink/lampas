
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const SpeachBubleGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-431,-363)'>
            <g transform='translate(430.078947,362.078941)'>
                <circle fill='#F2F2FC' cx='16.9210526' cy='16.9210591' r='16' />
                {/* <g transform='translate(10.921053, 10.921059)' /> */}
                <path d='M17.3157895,11 C14.2678947,10.9957959 11.7936842,13.462638 11.7894737,16.5105328 C11.7878947,17.5436907 12.0768421,18.5568486 12.6226316,19.434217 L11,22.8421117 L14.4073684,21.2194801 C16.9994737,22.8310591 20.4068421,22.0363222 22.0184211,19.444217 C23.63,16.8521117 22.8352632,13.4447433 20.2431579,11.8331643 C19.3647368,11.2868486 18.3505263,10.9984275 17.3157895,11 Z' className={cx('svg-filling', 'stroke')} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </g>
        </g>
    </g>, { viewBox: '0 0 32 32' })
