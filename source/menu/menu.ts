
import {
    ReactNode,
    CSSProperties,
    createElement,
} from 'react'
import {
    isArray,
} from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

import {
    MenuContext,
    menuContext,
    getDefaultMenuContext,
} from './context'

export interface MenuProps extends MenuContext {
    className?: string
    children?: ReactNode
}

export const Menu = ({ className, children, ...rest }: MenuProps) => {
    const mode = rest.mode

    return createElement(menuContext.Provider, {
        value: { ...getDefaultMenuContext(), ...rest },
    }, createElement('div', {
        className: cx('menu-container', className, mode),
    }, children))
}
