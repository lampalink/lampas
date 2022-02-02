
import { createElement, Fragment } from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

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

    return createElement(Fragment, {}, [
        createElement('div', {
            key: 'divider',
            className: cx('breadcrumbs-divider'),
        }, createElement(Icon, {
            type: 'chevron-right',
            size: '8px',
            color: 'grey',
        })),
        createElement('div', {
            key: 'item',
            className: cx('breadcrumbs-item', { isClickable: typeof onClick === 'function' }),
            onClick: handleClick,
        }, text)
    ])
}
