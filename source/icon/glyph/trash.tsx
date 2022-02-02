
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import { withGlyph } from '.'

export const TrashGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-1376,-29)' className={cx('svg-filling', 'stroke')} strokeWidth='1.5'>
            <path d='M1387.33413,42.9781159 L1379.98413,42.9781159 C1379.40453,42.9781159 1378.93413,42.5077159 1378.93413,41.9281159 L1378.93413,32.4781159 L1388.38413,32.4781159 L1388.38413,41.9281159 C1388.38413,42.5077159 1387.91373,42.9781159 1387.33413,42.9781159 Z' />
            <path d='M1382.08413,39.8281159 L1382.08413,35.6281159' />
            <path d='M1385.23413,39.8281159 L1385.23413,35.6281159' />
            <path d='M1376.83413,32.4781159 L1390.48413,32.4781159' />
            <path d='M1385.23413,30.3781159 L1382.08413,30.3781159 C1381.50453,30.3781159 1381.03413,30.8485159 1381.03413,31.4281159 L1381.03413,32.4781159 L1386.28413,32.4781159 L1386.28413,31.4281159 C1386.28413,30.8485159 1385.81373,30.3781159 1385.23413,30.3781159 Z' />
        </g>
    </g>, { viewBox: '0 0 16 15' })
