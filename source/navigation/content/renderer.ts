
import {
    createElement,
    Fragment,
    useEffect,
} from 'react'
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom'
import {
    get,
    isArray,
} from 'lodash'
import * as cx from 'classnames'

import {
    NavigationItemType,
    NavigationItem,
} from '../item'
import {
    useNavigationContext,
    useNavigationController,
} from '../controller'

export interface NavigationRendererProps extends RouteComponentProps<{}> {
    items: NavigationItem[]
    fallbackRedirectPath?: string
}

export const NavigationRenderer = ({ items, fallbackRedirectPath, ...rest }: NavigationRendererProps) => {
    const { resolveWithRoot } = useNavigationController(rest)
    const context = useNavigationContext()

    const renderContent = (item: NavigationItem<{}, {}, NavigationItemType.module>, props: RouteComponentProps) =>
        createElement(
            'div',
            { className: cx('layout-content') },
            item.renderContent(props),
        )

    const renderModule = (item: NavigationItem<{}, {}, NavigationItemType.module>, index: number|string) => {
        if (
            false
            || typeof item.renderContent !== 'function'
            || (typeof item.shouldDisplay === 'function' && !item.shouldDisplay(context))
        ) {
            return null
        }

        return createElement(Route, {
            key: `${index}-${item.path}-${item.title}`,
            exact: item.exact,
            path: item.ignorePathRoot ?
                item.path : resolveWithRoot(item.path),
            render: props =>
                renderContent(item, props),
        })
    }

    const renderGroup = (item: NavigationItem<{}, {}, NavigationItemType.group>) =>
        typeof item.path === 'string' ?
            renderModule(item.toModule(), '_converted') : null

    const renderAction = (item: NavigationItem<{}, {}, NavigationItemType.action>) =>
        typeof item.path === 'string' ?
            renderModule(item.toModule(), '_converted') : null

    const renderGeneric = (item: NavigationItem, index: number) =>
        typeof item.path === 'string' ?
            createElement(Route, {
                key: `${index}-${item.path}`,
                exact: item.exact,
                path: item.ignorePathRoot ?
                    item.path : resolveWithRoot(item.path),
                render: props =>
                    item.renderContent(props),
            }) : null

    const renderItem = (item: NavigationItem, index: number) => {
        if (typeof get(item, 'type') !== 'string') {
            return null
        }

        const { type, ...rest } = item

        const items = isArray(rest.items) ?
            rest.items.map(item => item as NavigationItem<{}, {}, NavigationItemType.module>) : []

        switch (type) {
        case NavigationItemType.module:
            return renderModule({ type, ...rest } as NavigationItem<{}, {}, NavigationItemType.module>, index)
        case NavigationItemType.group:
            return [
                renderGroup({ type, ...rest } as NavigationItem<{}, {}, NavigationItemType.group>),
                ...items.map(renderItem),
            ]
        case NavigationItemType.action:
            return [
                renderAction({ type, ...rest } as NavigationItem<{}, {}, NavigationItemType.action>),
                ...items.map(renderItem),
            ]
        case NavigationItemType.generic:
        default:
            return [
                renderGeneric({ type, ...rest }, index),
                ...items.map(renderItem),
            ]
        }
    }

    return createElement(Switch, {}, [
        ...items.map(renderItem),
        fallbackRedirectPath ?
            createElement(Redirect, {
                key: 'fallback',
                to: fallbackRedirectPath,
            }) : null,
    ])
}
