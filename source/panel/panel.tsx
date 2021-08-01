
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

import { Icon } from '../icon'
import { Set } from './set'

export interface PanelProps {
    container?: {
        className?: string
        style?: React.CSSProperties
    }
    padded?: boolean
    headerRef?: React.LegacyRef<HTMLDivElement>
    footerRef?: React.LegacyRef<HTMLDivElement>
    noHeaderBorder?: boolean
    noFooterBorder?: boolean
    isLoading?: boolean
    className?: string
    children?: React.ReactNode
    sneakyExtra?: React.ReactNode
    style?: React.CSSProperties
    headerClassName?: string
    footerClassName?: string
    headerStyle?: React.CSSProperties
    footerStyle?: React.CSSProperties
    renderHeading?: () => React.ReactNode
    renderFooter?: () => React.ReactNode
    onClick?: () => any
}

export const Panel = ({
    container,
    padded,
    noHeaderBorder, noFooterBorder,
    headerRef, footerRef,
    isLoading,
    renderHeading, renderFooter,
    className,
    children,
    sneakyExtra,
    headerClassName,
    footerClassName,
    headerStyle,
    footerStyle,
    onClick,
    ...rest
}: PanelProps) => {
    const containerClassName = container ? container.className : ''
    const containerStyle = container ? container.style : {}

    let header, footer: React.ReactNode

    const handleClick = () => {
        if (typeof onClick === 'function') {
            onClick()
        }
    }

    return (
        <div
            className={cx('panel-container', containerClassName)}
            style={containerStyle}
            onClick={handleClick}
        >
            {(typeof renderHeading === 'function' && !_.isNil(header = renderHeading())) &&
                <div
                    className={cx('panel-header', headerClassName, { padded, noBorder: !!noHeaderBorder })}
                    style={headerStyle}
                    ref={headerRef}
                >{header}</div>}
            {children &&
                <div
                    className={cx('panel-content', className, { padded })}
                    {...rest}
                >
                    {children}
                    {isLoading &&
                        <div className={cx('panel-loader-overlay')}>
                            <Icon
                                className={cx('panel-loader')}
                                type='loader'
                                color='purple'
                                size='3rem'
                                isRotating
                            />
                        </div>}
                </div>}
            {(typeof renderFooter === 'function' && !_.isNil(footer = renderFooter())) &&
                <div
                    className={cx('panel-footer', footerClassName, { padded, noBorder: !!noFooterBorder })}
                    style={footerStyle}
                    ref={footerRef}
                >{footer}</div>}
            {sneakyExtra && sneakyExtra}
        </div>
    )
}
