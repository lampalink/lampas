
import { createElement } from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

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

    return createElement('div', {
        className: cx('accordion-item', { isOpened }),
    }, [
        createElement('div', {
            key: 'header',
            className: cx('accordion-item-header'),
        }, [
            createElement(Icon, {
                key: 'icon',
                type: isOpened ? 'chevron-down' : 'chevron-right',
                color: 'purple',
                size: '16px',
                onClick: handleOpen,
            }),
            createElement('div', {
                key: 'title',
                className: cx('header-title'),
                onClick: handleOpen,
            }, renderTitle()),
            actions && (
                _.isArray(actions) ?
                    actions.map((action, index) =>
                        createElement('div', {
                            key: `${index}-action`,
                            className: cx('header-action'),
                        }, action)) :
                    createElement('div', {
                        key: 'action',
                        className: cx('header-action'),
                    }, actions)
            ),
        ]),
        isOpened &&
            createElement('div', {
                key: 'content',
                className: cx('accordion-item-content'),
            }, children),
    ])
}
