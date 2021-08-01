
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const TwoHorizontalLinesGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-165,-512)' fill='#5C26C9'>
            <path d='M176.5,513 L165.5,513 C165.224,513 165,512.776 165,512.5 C165,512.224 165.224,512 165.5,512 L176.5,512 C176.776,512 177,512.224 177,512.5 C177,512.776 176.776,513 176.5,513' />
            <path d='M176.5,516 L165.5,516 C165.224,516 165,515.776 165,515.5 C165,515.224 165.224,515 165.5,515 L176.5,515 C176.776,515 177,515.224 177,515.5 C177,515.776 176.776,516 176.5,516' />
        </g>
    </g>, { viewBox: '0 0 12 4' })
