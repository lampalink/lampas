
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const LoveFillGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-363,-801)' className={cx('svg-filling', 'stroke', 'fill')} strokeWidth='1.5'>
            <g transform='translate(364,802)'>
                <path d='M8,13.9907071 L1.22060606,6.92 C-0.0013590373,5.69899585 -0.304189765,3.83272671 0.468989899,2.2879798 L0.468989899,2.2879798 C1.04569698,1.13489752 2.14150155,0.329300626 3.41411981,0.122824091 C4.68673808,-0.0836524435 5.98103546,0.334161262 6.89272727,1.24575758 L8,2.35232323 L9.10727273,1.24575758 C10.0189645,0.334161262 11.3132619,-0.0836524435 12.5858802,0.122824091 C13.8584984,0.329300626 14.954303,1.13489752 15.5310101,2.2879798 L15.5310101,2.2879798 C16.3031077,3.83206888 16.0006451,5.69697014 14.780101,6.91787879 L8,13.9907071 Z' />
            </g>
        </g>
    </g>, { viewBox: '0 0 18 16' })
