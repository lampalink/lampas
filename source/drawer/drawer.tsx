
import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import * as cx from 'classnames'

import './styles.scss'

import { Icon } from '../icon'

export interface DrawerProps extends RouteComponentProps {
    width?: number|string
    isLoading?: boolean
    contentClassName?: string
    contentStyle?: React.CSSProperties
    headerContainer?: React.HTMLAttributes<HTMLDivElement>
    renderHeader?: () => React.ReactNode
    onClose?: () => any
    children?: React.ReactNode
}

export const Drawer = ({ width, isLoading, contentClassName, contentStyle, headerContainer, renderHeader, onClose, children }: DrawerProps) => {
    const handleClose = () => {
        if (typeof onClose === 'function') {
            onClose()
        }
    }

    return (
        <div className={cx('drawer-container')}>
            <div style={{ flex: 1 }} />
            <div
                className={cx('drawer')}
                style={{ width }}
            >
                <div
                    className={cx('drawer-header')}
                    {...headerContainer}
                >
                    <div
                        className={cx('drawer-header-close')}
                    ><Icon type='close' size='2rem' color='grey' onClick={handleClose} /></div>
                    {typeof renderHeader === 'function' &&
                        renderHeader()}
                </div>
                <div
                    className={cx('drawer-content', contentClassName)}
                    style={contentStyle}
                >
                    {isLoading &&
                        <div className={cx('drawer-content-loader-overlay')}>
                            <Icon
                                className={cx('drawer-content-loader')}
                                type='loader'
                                color='purple'
                                size='3rem'
                                isRotating
                            />
                        </div>}
                    {children}
                </div>
            </div>
        </div>
    )
}
