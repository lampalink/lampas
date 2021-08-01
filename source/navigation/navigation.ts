
import {
    ReactNode,
    createElement,
    useEffect,
    useState,
    useRef,
    Fragment,
} from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import {
    isArray,
    get,
    merge,
} from 'lodash'
import * as cx from 'classnames'

import { Icon } from '../icon'
import { Menu, MenuItem } from '../menu'
import {
    NavigationController,
    RenderContextBase,
    useNavigationContext,
    useNavigationController,
} from './controller'
import {
    NavigationItemType,
    NavigationItem,
    extractGenericItems,
} from './item'



export interface BeSpecificOrDieProps extends RouteComponentProps {
    items: NavigationItem<{}, {}>[]
}

export const beSpecificOrDie = <Props extends BeSpecificOrDieProps>(Component: React.FunctionComponent<Props>) => {
    return ({ items, ...rest }: Props) => {
        const { resolveWithRoot } = useNavigationController(rest)

        const genericItems = extractGenericItems(items)

        return createElement(Switch, {}, [
            ...genericItems.map(({ path, exact }, index) =>
                createElement(Route, {
                    exact,
                    key: `${index}-${path}`,
                    path: resolveWithRoot(path),
                    render: () => null,
                })),
            createElement(Route, {
                key: 'fallback',
                render: () =>
                    createElement(Component, { items: items, ...rest as Props }),
            }),
        ])
    }
}



export interface LayoutNavigationOptions<RenderContext extends object> {
    items: NavigationItem[]
    transparentIfNotFixed?: boolean
    hamburgerMenuBreakpointWidth?: number
    isHamburgerMenuActive?: boolean
    onIsHamburgerMenuActiveChange?(isHamburgerMenuActive: boolean): void
    renderSwitcher?(context: RenderContext, navigationController: NavigationController): ReactNode
    renderActions?(context: RenderContext, navigationController: NavigationController): ReactNode
}

export interface LayoutNavigationProps<RenderContext extends RenderContextBase> extends LayoutNavigationOptions<RenderContext>, RouteComponentProps {}
export const LayoutNavigation = beSpecificOrDie(<RenderContext extends RenderContextBase>({
    isHamburgerMenuActive: _isHamburgerMenuActive,
    hamburgerMenuBreakpointWidth: _hamburgerMenuBreakpointWidth,
    items, renderSwitcher, renderActions,
    transparentIfNotFixed,
    onIsHamburgerMenuActiveChange,
    ...rest
}: LayoutNavigationProps<RenderContext>) => {
    const navigationController = useNavigationController(rest)
    const context = useNavigationContext<RenderContext>()

    const containerRef = useRef<HTMLDivElement>()
    const [ isFixed, setIsFixed ] = useState(false)
    const handleWindowScroll = () => {
        if (containerRef.current) {
            if (window.scrollY > (1.1 * containerRef.current.clientHeight)) {
                setIsFixed(true)
                return
            }

            if (window.scrollY <= 0) {
                setIsFixed(false)
                return
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll)
        return () => window.removeEventListener('scroll', handleWindowScroll)
    }, [containerRef])

    const hamburgerMenuBreakpointWidth =
        typeof _hamburgerMenuBreakpointWidth === 'number' ?
            _hamburgerMenuBreakpointWidth : 875
    const [ isHamburgerMenu, setIsHamburgerMenu ] = useState(window.innerWidth < hamburgerMenuBreakpointWidth)

    const [ isHamburgerMenuActive, setIsHamburgerMenuActive ] =
        useState(typeof _isHamburgerMenuActive === 'boolean' ?
            _isHamburgerMenuActive : false)
    useEffect(() => {
        if (typeof _isHamburgerMenuActive === 'boolean') {
            setIsHamburgerMenuActive(_isHamburgerMenuActive)
        }
    }, [_isHamburgerMenuActive])

    const handleIsHamburgerMenuActiveChange = (value: boolean) => {
        if (typeof onIsHamburgerMenuActiveChange === 'function') {
            onIsHamburgerMenuActiveChange(value)
            return
        }

        setIsHamburgerMenuActive(value)
    }

    const handleWindowResize = () => {
        if (window.innerWidth < hamburgerMenuBreakpointWidth) {
            setIsHamburgerMenu(true)
            return
        }

        setIsHamburgerMenu(false)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [hamburgerMenuBreakpointWidth])

    const handleMenuItemClick = (item: NavigationItem) => {
        navigationController.navigatePath(item.path)
        handleIsHamburgerMenuActiveChange(false)
    }

    const renderBadge = (badgeText: ReactNode) => {
        return createElement('div', {
            key: 'badge',
            style: {
                display: 'inline-block',
                padding: '2px 6px',
                margin: '-6px 0 6px 4px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '12px',
                color: 'rgba(92,38,201,1)',
                backgroundColor: 'rgba(92,38,201,.15)',
            },
        }, badgeText)
    }

    const renderMenuItem = (item: NavigationItem, index: number) => {
        const isActive = item.ignorePathRoot ?
            navigationController.doesMatchReal(item.path) :
            navigationController.doesMatchRealWithRoot(item.path)

        let badge: ReactNode = null
        if (typeof item.renderBadge === 'function') {
            badge = item.renderBadge(context)
        }

        let title = item.title
        if (typeof item.title === 'function') {
            title = item.title(context)
        }

        return createElement(MenuItem, {
            isActive,
            key: `${index}-item-${item.tid}`,
            className: item?.itemClassName,
            icon: typeof item.icon === 'string' ?
                item.icon as any : null,
            onClick: () =>
                handleMenuItemClick(item),
        }, createElement(Fragment, {}, [
            title,
            badge &&
                renderBadge(badge),
        ]))
    }

    const renderMenuGroup = (item: NavigationItem, index: number) => {
        let isActive = navigationController.doesMatchRealWithRoot(item.path)

        const menuItems = !isArray(item.items) ? [] :
            item.items
                .map((childItem: NavigationItem, childIndex: number) => {
                    if (navigationController.doesMatchRealWithRoot(childItem.path)) {
                        isActive = true
                    }

                    return renderNavigationItem(childItem, childIndex)
                })
                .filter(menuItem => menuItem !== null)

        if (menuItems.length < 1) {
            return renderMenuItem(item, index)
        }

        let badge: ReactNode = null
        if (typeof item.renderBadge === 'function') {
            badge = item.renderBadge(context)
        }

        let title = item.title
        if (typeof item.title === 'function') {
            title = item.title(context)
        }

        return createElement(MenuItem, {
            isActive,
            key: `${index}-group-${item.tid}`,
            className: item?.itemClassName,
            items: menuItems,
            icon: typeof item.icon === 'string' ?
                item.icon as any : null,
        }, createElement(Fragment, {}, [
            title,
            badge &&
                renderBadge(badge),
        ]))
    }

    const renderNavigationItem = (item: NavigationItem, index: number) => {
        if (
            (typeof item.shouldDisplay === 'function' && !item.shouldDisplay(context))
            || item.hideInMenu
        ) {
            return null
        }

        switch (item.type) {
        case NavigationItemType.module:
            return renderMenuItem(item, index)
        case NavigationItemType.group:
            return renderMenuGroup(item, index)
        default:
            return null
        }
    }

    const renderMenuItems = () => {
        if (isHamburgerMenu) {
            if (isHamburgerMenuActive) {
                return createElement(MenuItem, {
                    key: 'hamburgerswitchclose',
                    icon: 'close',
                    onClick: () =>
                        handleIsHamburgerMenuActiveChange(false),
                })
            }

            return createElement(MenuItem, {
                key: 'hamburgerswitchopen',
                icon: 'four-horizontal-lines',
                onClick: () =>
                    handleIsHamburgerMenuActiveChange(true),
            }, 'MENU')
        }

        return [
            typeof renderSwitcher === 'function' &&
                renderSwitcher(context, navigationController),
            ...items.map(renderNavigationItem),
        ]
    }

    return createElement('div', {
        ref: containerRef,
        className: cx('layout-navigation', { isFixed, transparentIfNotFixed }),
    }, [
        createElement(Menu, {
            key: 'menu',
            className: cx('layout-navigation-menu'),
        }, [
            renderMenuItems(),
            createElement(MenuItem, {
                key: 'space',
                className: cx('layout-navigation-menu-space'),
                isStretched: true,
            }),
            typeof renderActions === 'function' &&
                renderActions(context, navigationController),
        ]),
        (isHamburgerMenu && isHamburgerMenuActive) &&
            createElement(Menu, {
                key: 'hamburgermenu',
                mode: 'vertical',
                className: cx('layout-navigation-hamburgermenu'),
            }, [
                typeof renderSwitcher === 'function' &&
                    renderSwitcher(context, navigationController),
                ...items.map(renderNavigationItem),
            ]),
    ])
})
