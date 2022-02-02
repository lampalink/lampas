
import * as React from 'react'
import cx from 'classnames'

import './styles.scss'

import { Icon } from '../icon'

export interface TagProps {
    color?: 'grey'|'purple'|'green'|'red'
    size?: 'small'
    className?: string
    style?: React.CSSProperties
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => any
    onClose?: () => any
    children?: React.ReactNode
}

export const Tag = ({ color, size, className, style, onClick, onClose, children }: TagProps) => {
    return (
        <span
            className={cx('tag-container', className, color, size, { clickable: typeof onClick === 'function' })}
            style={style}
            onClick={onClick}
        >
            {children}
            {typeof onClose === 'function' &&
                <Icon
                    className={cx('tag-close')}
                    type='close'
                    size={size === 'small' ?
                        '10px' : '14px'}
                    color='grey'
                    onClick={onClose}
                />}
        </span>
    )
}
