
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

export { Item, ItemProps } from './item'

import { Item } from './item'

export interface BreadcrumbsProps {
    children?: React.ReactNode
}

const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
    return (
        <div
            className={cx('breadcrumbs-container')}
        >{children}</div>
    )
}

Breadcrumbs.Item = Item

export { Breadcrumbs }
