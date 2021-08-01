
import {
    CSSProperties,
    createElement,
} from 'react'
import { Link as RouterLink } from 'react-router-dom'
import * as cx from 'classnames'

import './styles.scss'

export interface LinkProps {
    href?: string
    to?: string
    target?: string
    className?: string
    style?: CSSProperties
    onClick?: () => any
    children?: React.ReactNode
}

export const Link = ({ href, to, target, className, style, onClick, children }: LinkProps) => {
    const containerProps: any = {
        onClick, style,
        className: cx('link-container', className),
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

    // if (typeof to === 'string') {
    //     ContainerElement = RouterLink
    // }

    return createElement(ContainerElement, { ...containerProps }, children)
}
