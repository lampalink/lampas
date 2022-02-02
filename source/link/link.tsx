
import {
    CSSProperties,
    ReactNode,
    createElement,
} from 'react'
import { Link as RouterLink } from 'react-router-dom'
import cx from 'classnames'

import './styles.scss'

export interface LinkProps {
    /**
     * Set 'href' if you want to redirect user outside current origin or you want to render link as HTML 'a' element
     */
    href?: string
    /**
     * Set 'to' if you want you want to render link as react-router-dom 'Link' element, works only with 'href' set
     */
    to?: string
    /**
     * Target used on 'a' element
     */
    target?: string
    /**
     * Display link with normal text color, only ease in/out primary color on hover
     */
    easeColor?: boolean
    /**
     * Class name of link element
     */
    className?: string
    /**
     * CSS style name of link element
     */
    style?: CSSProperties
    /**
     * Link element click callback
     */
    onClick?: () => any
    /**
     * Link's children
     */
    children?: ReactNode
}

export const Link = ({ href, to, target, easeColor, className, style, onClick, children }: LinkProps) => {
    const containerProps: any = {
        onClick, style,
        className: cx('link-container', className, { easeColor }),
    }

    let ContainerElement
    switch (true) {
    case typeof to === 'string':
        ContainerElement = RouterLink

        containerProps.to = to
        break
    case typeof href === 'string':
    default:
        ContainerElement = 'a'

        containerProps.href = href
        containerProps.target = target
        break
    }

    return createElement(ContainerElement, { ...containerProps }, children)
}
