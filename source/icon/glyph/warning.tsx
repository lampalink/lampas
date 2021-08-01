
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const WarningGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-859,-153)' className={cx('svg-filling', 'fill')} fillRule='nonzero'>
            <g transform='translate(859,153)'>
                <path d='M256,0 C114.497,0 0,114.507 0,256 C0,397.503 114.507,512 256,512 C397.503,512 512,397.493 512,256 C512,114.497 397.493,0 256,0 Z M256,472 C136.607,472 40,375.385 40,256 C40,136.607 136.615,40 256,40 C375.393,40 472,136.615 472,256 C472,375.393 375.385,472 256,472 Z' />
                <path d='M256,128.877 C244.954,128.877 229,137.954 229,149 L236,277.67 C236,288.716 244.954,297.67 256,297.67 C267.046,297.67 276,288.716 276,277.67 L283,149 C283,137.954 267.046,128.877 256,128.877 Z' />
                <circle cx='256' cy='349.16' r='27' />
            </g>
        </g>
    </g>, { viewBox: '0 0 512 512' })
