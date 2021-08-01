
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { withGlyph } from '.'

export const StopGlyph = withGlyph(() =>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g transform='translate(-976,-59)' className={cx('svg-filling', 'stroke')} strokeWidth='2'>
            <g transform='translate(977,60)'>
                <path d='M7.99872,0.32128 C12.24064,0.32128 15.67872,3.75936 15.67872,8.00128 C15.67872,12.2432 12.24064,15.68128 7.99872,15.68128 C3.7568,15.68128 0.31872,12.2432 0.31872,8.00128 C0.31872,3.75936 3.7568,0.32128 7.99872,0.32128 Z' />
                <path d='M2.56896,13.42976 L13.42848,2.57024' />
            </g>
        </g>
    </g>, { viewBox: '0 0 18 18' })
