
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import './styles.scss'

export interface PopoverProps {
    isOpened?: boolean
    disableHover?: boolean
    noOverlayBorder?: boolean
    trigger?: 'hover'|'click'|'none'
    className?: string
    container?: React.HTMLAttributes<HTMLDivElement>
    renderOverlay?: () => React.ReactNode
    onVisibleChange?: (isVisible: boolean) => any
    children?: React.ReactNode
}

export const Popover = ({
    isOpened: isOpenedProp,
    disableHover,
    noOverlayBorder,
    trigger,
    className,
    container,
    renderOverlay, onVisibleChange,
    children,
}: PopoverProps) => {
    const [ top, setTop ] = React.useState(0)

    let triggerElement = null as HTMLDivElement
    const handleTriggerRef = (trigger: HTMLDivElement) => {
        if (trigger) {
            triggerElement = trigger
            setTop(trigger.clientHeight)
        }
    }

    let overlayElement = null as HTMLDivElement
    const handleOverlayRef = (overlay: HTMLDivElement) => {
        if (overlay) {
            overlayElement = overlay
        }
    }

    const [ isOpened, setIsOpened ] = React.useState(!!isOpenedProp)
    React.useEffect(() => setIsOpened(!!isOpenedProp), [isOpenedProp])

    const handleIsOpenedChange = (value: boolean) => {
        if (typeof onVisibleChange === 'function') {
            return onVisibleChange(value)
        }
        setIsOpened(value)
    }

    const toggleIsOpened = () => {
        if (isOpened) {
            handleIsOpenedChange(false)
            return
        }
        handleIsOpenedChange(true)
    }

    const handleOutsideTriggerClick = (event) => {
        if (trigger === 'click') {
            // console.log(event.target, overlayElement, triggerElement)
            if (overlayElement && !overlayElement.contains(event.target)) {
                handleIsOpenedChange(false)
            }
        }
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleOutsideTriggerClick)
        return () => document.removeEventListener('mousedown', handleOutsideTriggerClick)
    }, [])

    const [ isHovered, setIsHovered ] = React.useState(false)
    React.useEffect(() => {
        if (trigger === 'hover') {
            if (!disableHover) return

            if (isHovered) {
                handleIsOpenedChange(true)
                return
            }

            handleIsOpenedChange(false)
        }
    }, [isHovered])

    const {
        className: containerClassName,
        onMouseEnter, onMouseLeave,
        ...rest
    } = container || {}

    trigger = trigger || 'hover'
    disableHover = disableHover || trigger === 'click'

    return (
        <div
            className={cx('popover-container', containerClassName, { isOpened, disableHover })}
            onMouseEnter={() => {
                if (trigger === 'hover') {
                    setIsHovered(true)
                }
            }}
            onMouseLeave={() => {
                if (trigger === 'hover') {
                    setIsHovered(false)
                }
            }}
            {...rest}
        >
            <div
                className={cx('trigger', className)}
                ref={handleTriggerRef}
                onClick={() => {
                    if (trigger === 'click') {
                        toggleIsOpened()
                    }
                }}
            >{children}</div>
            <div
                style={{ top }}
                ref={handleOverlayRef}
                className={cx('overlay', { noBorder: noOverlayBorder })}
            >{typeof renderOverlay === 'function' && renderOverlay()}</div>
        </div>
    )
}
