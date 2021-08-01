
import { createElement } from 'react'
import * as cx from 'classnames'

import './styles.scss'

import { Icon, GlyphName } from '../icon'
import { useNavigationController } from '../navigation'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'blue'|'green'|'red'|'grey'|'yellow'|'orange'|'purple'|'white'
    mode?: 'primary'|'secondary'|'ghost'|'link'|'outline'
    shape?: 'circle'
    size?: 'big'|'small'|'kinda-small'
    icon?: GlyphName|React.ReactNode
    iconRight?: GlyphName
    fullWidth?: boolean
    disabled?: boolean
    nonReactive?: boolean
    containerClassName?: string
    containerStyle?: React.CSSProperties
    containerRef?: React.MutableRefObject<HTMLDivElement>
    link?: string
    onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)
}

export const Button = ({ mode, shape, size, color, icon, iconRight, fullWidth, disabled, nonReactive, containerClassName, className, containerStyle, containerRef, link, onClick, children, ...rest }: ButtonProps) => {
    const iconProps = {
        size: '1rem',
    }

    switch (size) {
    case 'small':
        iconProps.size = '.9rem'
        break
    case 'big':
        iconProps.size = '1.1rem'
        break
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (disabled) {
            return
        }

        if (!!link && event && event.preventDefault) {
            event.preventDefault()
        }

        if (typeof onClick === 'function') {
            onClick(event)
        }
    }

    const componentType = !!link ? 'a' : 'button'

    return createElement('div', {
        className: cx('button-container', containerClassName, shape, mode, size, { fullWidth, disabled, nonReactive }),
        style: containerStyle,
        ref: containerRef,
    }, createElement(componentType, {
        className: cx('button', className, mode, color),
        href: !!link ? link : undefined,
        onClick: handleClick,
        ...rest,
    }, [
        icon &&
            createElement('div', {
                key: 'iconleft',
                className: cx('button-icon', {
                    noMargin: children === void 0 || children === null,
                }),
            }, typeof icon === 'string' ?
                createElement(Icon, {
                    type: icon as GlyphName,
                    ...iconProps,
                }) :
                icon),
        createElement('span', {
            key: 'children',
            className: cx('button-text'),
        }, children),
        iconRight &&
            createElement('div', {
                key: 'iconright',
                className: cx('button-icon', 'right'),
            }, createElement(Icon, { type: iconRight, ...iconProps })),
    ]))
}
