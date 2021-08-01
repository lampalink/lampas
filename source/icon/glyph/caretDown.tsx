
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const CaretDownGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-926,-149)' className={cx('svg-filling', 'fill')}>
            <path
                d='M926.293177,150.862182 L929.79303,154.680364 C929.988022,154.893091 930.244011,155 930.5,155 C930.755989,155 931.011978,154.893091 931.20697,154.680364 L934.706823,150.862182 C934.992811,150.550182 935.078807,150.081091 934.923814,149.673091 C934.707823,149.104727 934.171846,149 933.999853,149 L931.999937,149 L929.000063,149 L927.000147,149 C926.834154,149 926.293177,149.100364 926.076186,149.673091 C925.921193,150.081091 926.007189,150.550182 926.293177,150.862182 Z'
            />
        </g>
    </g>, { viewBox: '0 0 9 6' })
