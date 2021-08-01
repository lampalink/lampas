
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { Icon } from '../icon'

export interface ItemProps {
    text?: React.ReactNode
    onClick?: () => any
}

export const Item = ({ text, onClick }: ItemProps) => {
    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick()
        }
    }

    return (
        <React.Fragment>
            <div
                className={cx('breadcrumbs-divider')}
            ><Icon type='chevron-right' size='8px' color='grey' /></div>
        <div
            className={cx('breadcrumbs-item', { isClickable: typeof onClick === 'function' })}
            onClick={handleClick}
        >
            {text}
        </div>
        </React.Fragment>
    )
}
