
import { v4 as uuidv4 } from 'uuid'
import {
    ReactNode,
    ElementType,
    FunctionComponent,
    createElement,
} from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import {
    get,
    isNil,
    isArray,
} from 'lodash'

import {
    IconProps,
    GlyphName,
} from '../icon'

export enum NavigationItemType {
    generic = 'generic',
    module = 'module',
    group = 'group',
    action = 'action',
}

export interface Linkable<Params extends object = {}> {
    path?: string
    exact?: boolean
    ignorePathRoot?: boolean
}

export interface ContentProps<Params extends object = object> extends RouteComponentProps<Params> {}


// NavigationItem

export interface NavigationItemOptions<Params extends object, Context extends object> extends Linkable<Params> {
    title?: ReactNode|((context: Context) => ReactNode)
    icon?: GlyphName|ElementType<IconProps>
    rollable?: boolean
    hideInMenu?: boolean
    items?: Array<NavigationItem<{}, {}>>
    itemClassName?: string
    shouldDisplay?(context: Context): boolean
    renderBadge?(context: Context): ReactNode
    onClick?(): any
}

export interface NavigationItem<
    Params extends object = {},
    Context extends object = {},
    Type extends NavigationItemType = NavigationItemType,
> extends NavigationItemOptions<Params, Context> {
    tid: string
    type: Type
    renderContent?(props: RouteComponentProps<Params>): ReactNode
    toModule?(): NavigationItem<Params, Context, NavigationItemType.module>
}

export const createNavigationItem = <
    Params extends object,
    Context extends object,
    Type extends NavigationItemType = NavigationItemType,
>(
    options: NavigationItemOptions<Params, Context>,
    Content: FunctionComponent<RouteComponentProps<Params>> = null,
    type: Type = NavigationItemType.generic as Type,
): NavigationItem<Params, Context, Type> => {
    const navigationItem: NavigationItem<Params, Context, Type> = {
        ...options, type,
        tid: uuidv4(),
        renderContent: isNil(Content) ?
            null : props => createElement(Content, props),
        toModule() {
            return createNavigationItem<Params, Context, NavigationItemType.module>(
                options,
                Content,
                NavigationItemType.module,
            )
        },
    }

    return navigationItem
}

export const createNavigationModule = <Params extends object, Context extends object>(
    options: NavigationItemOptions<Params, Context>,
    Content: FunctionComponent<RouteComponentProps<Params>>,
): NavigationItem<Params, Context, NavigationItemType.module> =>
    createNavigationItem<Params, Context, NavigationItemType.module>(
        options,
        Content,
        NavigationItemType.module,
    )

export const createNavigationGroup = <Params extends object, Context extends object>(
    options: NavigationItemOptions<Params, Context>,
    Content: FunctionComponent<RouteComponentProps<Params>> = null,
): NavigationItem<Params, Context, NavigationItemType.group> =>
    createNavigationItem<Params, Context, NavigationItemType.group>(
        options,
        Content,
        NavigationItemType.group,
    )

export const createNavigationAction = <Params extends object, Context extends object>(
    options: NavigationItemOptions<Params, Context>,
    Content: FunctionComponent<RouteComponentProps<Params>> = null,
): NavigationItem<Params, Context, NavigationItemType.action> =>
    createNavigationItem<Params, Context, NavigationItemType.action>(
        options,
        Content,
        NavigationItemType.action,
    )

export const extractGenericItems = (items: NavigationItem[]): NavigationItem<{}, {}, NavigationItemType.generic>[] => {
    let genericItems = []

    for (const i in items) {
        const item = items[i]

        if (typeof get(item, 'type') !== 'string') {
            continue // or error ?
        }

        switch (item.type) {
        case NavigationItemType.generic:
            genericItems.push(item)
        case NavigationItemType.group:
        case NavigationItemType.action:
            if (isArray(item.items)) {
                genericItems = [...genericItems, ...extractGenericItems(item.items)]
            }
        }
    }

    return genericItems
}
