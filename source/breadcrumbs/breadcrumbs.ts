
import { createElement } from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import './styles.scss'

export { Item, ItemProps } from './item'

export interface BreadcrumbsProps {
    children?: React.ReactNode
}

const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
    return createElement('div', {
        className: cx('breadcrumbs-container'),
    }, children)
}

Breadcrumbs.Item = Item

export { Breadcrumbs }
