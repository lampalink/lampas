
import {
    createContext,
} from 'react'

export interface MenuContext {
    mode?: 'horizontal'|'vertical'
    itemTrigger?: 'hover'|'click'
    hasFloatingSubmenu?: boolean
}

export const getDefaultMenuContext = (): Required<MenuContext> => ({
    mode: 'horizontal',
    itemTrigger: 'hover',
    hasFloatingSubmenu: false,
})

export const menuContext = createContext<MenuContext>(getDefaultMenuContext())
