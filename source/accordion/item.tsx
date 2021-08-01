
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import { Icon } from '../icon'

export interface AccordionItemProps {
    isOpened?: boolean
    renderTitle: () => React.ReactNode
    renderActions?: () => React.ReactNode|React.ReactNode[]
    onOpen?: () => void
    children?: React.ReactNode
}

export const AccordionItem = ({ isOpened, renderTitle, renderActions, onOpen, children }: AccordionItemProps) => {
    const handleOpen = () => {
        if (typeof onOpen === 'function') {
            onOpen()
        }
    }

    let actions = null
    if (typeof renderActions === 'function') {
        actions = renderActions()
    }

    return (
        <div className={cx('accordion-item', { isOpened })}>
            <div className={cx('accordion-item-header')}>
                <Icon
                    type={isOpened ? 'chevron-down' : 'chevron-right'}
                    color='purple'
                    size='16px'
                    onClick={handleOpen}
                />
                <div
                    className={cx('header-title')}
                    onClick={handleOpen}
                >{renderTitle()}</div>
                {actions && (
                    _.isArray(actions) ?
                        actions.map(action => <div className={cx('header-action')}>{action}</div>) :
                        <div className={cx('header-action')}>{actions}</div>
                )}
            </div>
            {isOpened &&
                <div
                    className={cx('accordion-item-content')}
                >{children}</div>}
        </div>
    )
}
