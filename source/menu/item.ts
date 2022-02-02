
import {
    ReactNode,
    Children,
    CSSProperties,
    createElement,
    useState,
    useContext,
    useEffect,
    useRef,
    Fragment,
} from 'react'
import {
    isArray,
} from 'lodash'
import cx from 'classnames'

import {
    Icon,
} from '../icon'
import { menuContext } from './context'
import { GlyphName } from '../icon'

export interface MenuItemProps {
    items?: ReactNode[]
    className?: string
    contentClassName?: string
    contentStyle?: CSSProperties
    style?: CSSProperties
    trigger?: 'hover'|'click'
    icon?: GlyphName
    badge?: string
    isActive?: boolean
    isDisabled?: boolean
    isStretched?: boolean
    isDropdownIconDisabled?: boolean
    isDropdownRightAligned?: boolean
    isWrapEnabled?: boolean
    children?: ReactNode
    onClick?()
}

export const MenuItem = ({ items, className, contentClassName, contentStyle, style, trigger: _trigger, icon, badge, isActive, isDisabled, isStretched, isDropdownIconDisabled, isDropdownRightAligned, isWrapEnabled, children, onClick }: MenuItemProps) => {
    const itemsCount = isArray(items) ? items.length : 0
    const hasItems = itemsCount > 0

    const { itemTrigger, mode, hasFloatingSubmenu } = useContext(menuContext)
    let trigger = typeof _trigger === 'string' ?
        _trigger : itemTrigger

    if (mode === 'vertical') {
        trigger = 'click'
    }

    const [ isSubmenuActive, setIsSubmenuActive ] = useState(false)

    const handleContainerClick = (event) => {
        if (isDisabled) return

        switch (trigger) {
        case 'click':
            setIsSubmenuActive(true)
            break
        case 'hover':
        default:
            break
        }

        if (typeof onClick === 'function') {
            if (subMenuContainer.current && (subMenuContainer.current as any).contains(event.target)) return

            onClick()
        }
    }

    const handleContainerMouseEnter = () => {
        if (isDisabled) return

        switch (trigger) {
        case 'hover':
            setIsSubmenuActive(true)
            return
        case 'click':
        default:
            return
        }
    }

    const handleContainerMouseLeave = () => {
        if (isDisabled) return

        switch (trigger) {
        case 'hover':
            setIsSubmenuActive(false)
            return
        case 'click':
        default:
            return
        }
    }

    const menuContainer = useRef<HTMLDivElement>()
    const subMenuContainer = useRef<HTMLDivElement>()

    const handleDocumentMouseDown = (event) => {
        if (isDisabled || mode === 'vertical') return

        switch (trigger) {
        case 'click':
            if (menuContainer.current && !(menuContainer.current as any).contains(event.target)) {
                setIsSubmenuActive(false)
            }
            return
        case 'hover':
        default:
            return
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentMouseDown)
        return () => document.removeEventListener('mousedown', handleDocumentMouseDown)
    }, [menuContainer.current])

    const renderSubMenu = () => {
        return createElement('div', {
            key: 'submenu',
            ref: subMenuContainer,
            className: cx('menu-item-submenu', {
                isActive: isSubmenuActive,
                isRightAligned: isDropdownRightAligned,
                isFloating: hasFloatingSubmenu,
            }),
        }, items)
    }

    return createElement(Fragment, {}, [
        createElement('div', {
            style,
            key: 'item',
            className: cx('menu-item-container', className, {
                isActive, isStretched,
                isDisabled: isDisabled || isStretched,
            }),
            ref: menuContainer,
            onClick: handleContainerClick,
            onMouseEnter: handleContainerMouseEnter,
            onMouseLeave: handleContainerMouseLeave,
        }, [
            createElement('div', {
                key: 'content',
                className: cx('menu-item', contentClassName, { hasFloatingSubmenu, isWrapEnabled }),
                style: contentStyle,
            }, [
                icon &&
                    createElement(Icon, {
                        key: 'icon',
                        type: icon,
                        className: cx('item-icon'),
                        size: '1em',
                    }),
                createElement(Fragment, { key: 'title' }, children),
                (hasItems && !isDropdownIconDisabled) &&
                    createElement(Icon, {
                        key: 'dropdownicon',
                        type: mode === 'vertical' ?
                            'chevron-right' : 'chevron-down',
                        className: cx('item-dropdown-icon'),
                        size: '1em',
                    }),
            ]),
            (hasItems && (mode === 'horizontal' || hasFloatingSubmenu)) &&
                renderSubMenu(),
        ]),
        (hasItems && mode === 'vertical' && !hasFloatingSubmenu) &&
            renderSubMenu(),
    ])
}
