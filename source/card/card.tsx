
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

export interface CardProps {
    title?: string
    className?: string
    footerClassName?: string
    containerClassName?: string
    fuckinnerContainerClassName?: string
    style?: React.CSSProperties
    children?: React.ReactNode
    noPadding?: boolean
    noBorder?: boolean
    renderFooter?: () => React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
    onDoubleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
    onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
    onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
}

export const Card = ({ title, className, footerClassName, containerClassName, fuckinnerContainerClassName, style, renderFooter, children, noPadding, noBorder, onClick, onDoubleClick, onMouseEnter, onMouseLeave }: CardProps) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (typeof onClick === 'function') {
            onClick(event)
        }
    }

    const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (typeof onDoubleClick === 'function') {
            onDoubleClick(event)
        }
    }

    return (
        <div
            className={cx('card-container', containerClassName, { noPadding, noBorder, clickable: typeof onClick === 'function' })}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={style}
        >
            {title &&
                <div
                    className={cx('card-header')}
                >{title}</div>}
            <div className={cx('card-content', fuckinnerContainerClassName)}>
                <div
                    className={cx('card-content-body', className)}
                >{children}</div>
                {typeof renderFooter === 'function' &&
                    <div
                        className={cx('card-content-meta', footerClassName)}
                    >{renderFooter()}</div>}
            </div>
        </div>
    )
}
