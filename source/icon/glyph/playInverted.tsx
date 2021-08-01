
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const PlayInvertedGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-165,-423)' className={cx('svg-filling', 'fill')}>
            <path d='M173.095385,428.326154 C173.633538,428.639077 173.588308,429.388615 173.094462,429.674769 L169.679077,431.664923 C169.678154,431.664923 169.678154,431.665846 169.678154,431.665846 C169.161231,431.962154 168.519692,431.590154 168.519692,430.991077 L168.519692,427.009846 C168.519692,426.42 169.152923,426.034154 169.678154,426.335077 L173.095385,428.326154 Z M177,424.384615 C177,423.621231 176.379692,423 175.615385,423 L166.384615,423 C165.621231,423 165,423.621231 165,424.384615 L165,433.615385 C165,434.379692 165.621231,435 166.384615,435 L175.615385,435 C176.379692,435 177,434.379692 177,433.615385 L177,424.384615 Z' />
        </g>
    </g>, { viewBox: '0 0 12 12' })