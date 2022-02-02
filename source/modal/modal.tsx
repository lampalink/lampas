
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import './styles.scss'

import { Icon } from '../icon'
import { Panel, PanelProps } from '../panel'
import { layerContext } from './manager'

export interface ModalProps extends PanelProps {
    width?: string|number
    top?: string|number
    hideCloseIcon?: boolean
    isYOverflowVisible?: boolean
    ribbonClassName?: string
    renderRibbon?(): React.ReactNode
    onClose?: () => any
}

export const Modal = ({ width, top, hideCloseIcon, isYOverflowVisible, renderRibbon: _renderRibbon, ribbonClassName, onClose, children, ...panelProps }: ModalProps) => {
    let zIndex: number
    let close: () => void

    const currentLayerContext = React.useContext(layerContext)
    if (currentLayerContext) {
        zIndex = currentLayerContext.zIndex
        close = currentLayerContext.close
    }

    const handleClose = () => {
        if (typeof onClose === 'function') {
            onClose()
            return
        }

        if (typeof close == 'function') {
            close()
        }
    }

    const {
        container,
        style,
        className: contentClassName,
        ...panelRest
    } = panelProps || {}
    const {
        style: containerStyle,
        className: containerClassName,
        ...containerRest
    } = container || {}

    const containerStyleFinal = {
        overflowY: isYOverflowVisible ?
            'visible' : undefined,
        width, top, zIndex,
        ...containerStyle,
    }

    const styleFinal = {
        overflowY: isYOverflowVisible ?
            'visible' : 'scroll',
        ...style,
    }

    const renderRibbon = () => {
        if (typeof _renderRibbon !== 'function') {
            return null
        }

        const ribbon = _renderRibbon()

        if (!ribbon) {
            return null
        }

        return (
            <div
                className={cx('modal-ribbon-container', ribbonClassName)}
            >{ribbon}</div>
        )
    }

    return (
        <Panel
            container={{
                style: containerStyleFinal,
                className: cx('modal-container', containerClassName),
                ...containerRest
            }}
            style={styleFinal}
            className={cx('modal', contentClassName)}
            sneakyExtra={
                <React.Fragment>
                    {hideCloseIcon ?
                        undefined : <div className={cx('modal-close-container')}>
                            <div className={cx('modal-close')}>
                                <Icon
                                    type='close'
                                    size='16px'
                                    onClick={handleClose}
                                />
                        </div>
                    </div>}
                    {renderRibbon()}
                </React.Fragment>
            }
            {..._.omit(panelRest, ['staticContext'])}
        >{children}</Panel>
    )
}
