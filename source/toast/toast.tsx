
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

import { Icon, GlyphName } from '../icon'

export interface ToastProps {
    title: React.ReactNode
    description?: React.ReactNode
    icon?: GlyphName
    type?: 'info'|'success'|'error'|'warning'
    onClose?: () => any
}

export const Toast = ({ title, description, icon, type, onClose }: ToastProps) => {
    const hasDescription = !!description

    const iconProps = {
        type: null as GlyphName,
        size: hasDescription ?
            '20px' : '16px',
        color: 'purple' as any,
    }

    switch (type) {
    case 'info':
        iconProps.color = 'purple'
        break
    case 'success':
        iconProps.color = 'green'
        iconProps.type = 'checkmark'
        break
    case 'error':
        iconProps.color = 'red'
        iconProps.type = 'close'
        break
    case 'warning':
        iconProps.color = 'yellow'
        break
    }

    if (typeof icon === 'string') {
        iconProps.type = icon
    }

    return (
        <div className={cx('toast-container')}>
            {iconProps.type &&
                <div className={cx('toast-icon')}>
                    <Icon {...iconProps} />
                </div>}
            <div className={cx('toast-content')}>
                <div
                    className={cx('toast-title')}
                >{title}</div>
                {hasDescription &&
                    <div
                        className={cx('toast-description')}
                    >{description}</div>}
            </div>
            {typeof onClose === 'function' &&
                <div className={cx('toast-close')}>
                    <Icon
                        type='close'
                        color='grey'
                        size='14px'
                        onClick={onClose}
                    />
                </div>}
        </div>
    )
}
