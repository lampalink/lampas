
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

export interface AccordionProps {
    selectedKey?: string
    onChange?: (key: string) => any
    children?: React.ReactNode
}

export const Accordion = ({ selectedKey, onChange, children }: AccordionProps) => {
    const handleChange = (key: string) => {
        if (typeof onChange === 'function') {
            onChange(key)
        }
    }

    const items = React.Children.map(children, child => {
        const key = _.get(child, 'key')
        const isOpened = key === selectedKey
        return React.cloneElement(child as any, {
            isOpened,
            onOpen: () =>
                handleChange(isOpened ? null : key),
        })
    })

    return (
        <div
            className={cx('accordion-container')}
        >{items}</div>
    )
}
