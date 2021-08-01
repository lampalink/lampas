
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const CalendarGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-22,-131)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <g transform='translate(23,132)'>
                <path d='M1.01315789,1.93421053 L12.9868421,1.93421053 C13.4952632,1.93421053 13.9078947,2.34684211 13.9078947,2.85526316 L13.9078947,12.9868421 C13.9078947,13.4952632 13.4952632,13.9078947 12.9868421,13.9078947 L1.01315789,13.9078947 C0.504736842,13.9078947 0.0921052632,13.4952632 0.0921052632,12.9868421 L0.0921052632,2.85526316 C0.0921052632,2.34684211 0.504736842,1.93421053 1.01315789,1.93421053 Z' />
                <path d='M3.08552632,7.92105263 C2.95842105,7.92105263 2.85526316,8.02421053 2.85526316,8.15131579 C2.85526316,8.27842105 2.95842105,8.38157895 3.08552632,8.38157895 C3.21263158,8.38157895 3.31578947,8.27842105 3.31578947,8.15131579 C3.31578947,8.02421053 3.21263158,7.92105263 3.08552632,7.92105263 L3.08552632,7.92105263' />
                <path d='M3.08552632,11.1447368 C2.95842105,11.1447368 2.85526316,11.2478947 2.85526316,11.375 C2.85526316,11.5021053 2.95842105,11.6052632 3.08552632,11.6052632 C3.21263158,11.6052632 3.31578947,11.5021053 3.31578947,11.375 C3.31578947,11.2478947 3.21263158,11.1447368 3.08552632,11.1447368' />
                <path d='M7,7.92105263 C6.87289474,7.92105263 6.76973684,8.02421053 6.76973684,8.15131579 C6.76973684,8.27842105 6.87289474,8.38157895 7,8.38157895 C7.12710526,8.38157895 7.23026316,8.27842105 7.23026316,8.15131579 C7.23026316,8.02421053 7.12710526,7.92105263 7,7.92105263 L7,7.92105263' />
                <path d='M7,11.1447368 C6.87289474,11.1447368 6.76973684,11.2478947 6.76973684,11.375 C6.76973684,11.5021053 6.87289474,11.6052632 7,11.6052632 C7.12710526,11.6052632 7.23026316,11.5021053 7.23026316,11.375 C7.23026316,11.2478947 7.12710526,11.1447368 7,11.1447368' />
                <path d='M10.9144737,7.92105263 C10.7873684,7.92105263 10.6842105,8.02421053 10.6842105,8.15131579 C10.6842105,8.27842105 10.7873684,8.38157895 10.9144737,8.38157895 C11.0415789,8.38157895 11.1447368,8.27842105 11.1447368,8.15131579 C11.1447368,8.02421053 11.0415789,7.92105263 10.9144737,7.92105263 L10.9144737,7.92105263' />
                <path d='M10.9144737,11.1447368 C10.7873684,11.1447368 10.6842105,11.2478947 10.6842105,11.375 C10.6842105,11.5021053 10.7873684,11.6052632 10.9144737,11.6052632 C11.0415789,11.6052632 11.1447368,11.5021053 11.1447368,11.375 C11.1447368,11.2478947 11.0415789,11.1447368 10.9144737,11.1447368' />
                <path d='M0.0921052632,5.61842105 L13.9078947,5.61842105' />
                <path d='M3.77631579,3.31578947 L3.77631579,0.0921052632' />
                <path d='M10.2236842,3.31578947 L10.2236842,0.0921052632' />
            </g>
        </g>
    </g>, { viewBox: '0 0 16 16' })

// <g id="Schedule" stroke="none" stroke-width="1" fill="none"  stroke-linecap="round" stroke-linejoin="round">
//     <g id="Mylampa-8" transform="translate(-21.000000, -127.000000)" class="svg-filling stroke" stroke-width="1.5">
//         <g id="calendar" transform="translate(22.105263, 128.105263)">
//             <path d="M1.05263158,2.10526316 L14.7368421,2.10526316 C15.3178947,2.10526316 15.7894737,2.57684211 15.7894737,3.15789474 L15.7894737,14.7368421 C15.7894737,15.3178947 15.3178947,15.7894737 14.7368421,15.7894737 L1.05263158,15.7894737 C0.471578947,15.7894737 -6.1284311e-14,15.3178947 -6.1284311e-14,14.7368421 L-6.1284311e-14,3.15789474 C-6.1284311e-14,2.57684211 0.471578947,2.10526316 1.05263158,2.10526316 Z" id="Path"></path>
//             <path d="M3.42105263,8.94736842 C3.27578947,8.94736842 3.15789474,9.06526316 3.15789474,9.21052632 C3.15789474,9.35578947 3.27578947,9.47368421 3.42105263,9.47368421 C3.56631579,9.47368421 3.68421053,9.35578947 3.68421053,9.21052632 C3.68421053,9.06526316 3.56631579,8.94736842 3.42105263,8.94736842 L3.42105263,8.94736842" id="Path"></path>
//             <path d="M3.42105263,12.6315789 C3.27578947,12.6315789 3.15789474,12.7494737 3.15789474,12.8947368 C3.15789474,13.04 3.27578947,13.1578947 3.42105263,13.1578947 C3.56631579,13.1578947 3.68421053,13.04 3.68421053,12.8947368 C3.68421053,12.7494737 3.56631579,12.6315789 3.42105263,12.6315789" id="Path"></path>
//             <path d="M7.89473684,8.94736842 C7.74947368,8.94736842 7.63157895,9.06526316 7.63157895,9.21052632 C7.63157895,9.35578947 7.74947368,9.47368421 7.89473684,9.47368421 C8.04,9.47368421 8.15789474,9.35578947 8.15789474,9.21052632 C8.15789474,9.06526316 8.04,8.94736842 7.89473684,8.94736842 L7.89473684,8.94736842" id="Path"></path>
//             <path d="M7.89473684,12.6315789 C7.74947368,12.6315789 7.63157895,12.7494737 7.63157895,12.8947368 C7.63157895,13.04 7.74947368,13.1578947 7.89473684,13.1578947 C8.04,13.1578947 8.15789474,13.04 8.15789474,12.8947368 C8.15789474,12.7494737 8.04,12.6315789 7.89473684,12.6315789" id="Path"></path>
//             <path d="M12.3684211,8.94736842 C12.2231579,8.94736842 12.1052632,9.06526316 12.1052632,9.21052632 C12.1052632,9.35578947 12.2231579,9.47368421 12.3684211,9.47368421 C12.5136842,9.47368421 12.6315789,9.35578947 12.6315789,9.21052632 C12.6315789,9.06526316 12.5136842,8.94736842 12.3684211,8.94736842 L12.3684211,8.94736842" id="Path"></path>
//             <path d="M12.3684211,12.6315789 C12.2231579,12.6315789 12.1052632,12.7494737 12.1052632,12.8947368 C12.1052632,13.04 12.2231579,13.1578947 12.3684211,13.1578947 C12.5136842,13.1578947 12.6315789,13.04 12.6315789,12.8947368 C12.6315789,12.7494737 12.5136842,12.6315789 12.3684211,12.6315789" id="Path"></path>
//             <line x1="-6.1284311e-14" y1="6.31578947" x2="15.7894737" y2="6.31578947" id="Path"></line>
//             <line x1="4.21052632" y1="3.68421053" x2="4.21052632" y2="2.37587727e-14" id="Path"></line>
//             <line x1="11.5789474" y1="3.68421053" x2="11.5789474" y2="2.37587727e-14" id="Path"></line>
//         </g>
//     </g>
// </g>)
