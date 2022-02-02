
import { createElement, Children, cloneElement } from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

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

    const items = Children.map(children, child => {
        const key = _.get(child, 'key')
        const isOpened = key === selectedKey
        return cloneElement(child as any, {
            isOpened,
            onOpen: () =>
                handleChange(isOpened ? null : key),
        })
    })

    return createElement('div', {
        className: cx('accordion-container'),
    }, items)
}
