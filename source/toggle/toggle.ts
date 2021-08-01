
import { createElement, Fragment } from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

import { Checkbox } from '../checkbox'

interface Option {
    value: string|number
    text: React.ReactNode
    disabled?: boolean
    style?: React.CSSProperties
}

export interface ToggleProps {
    options: Option[]
    value?: string|number
    outlineCheckboxMode?: boolean
    onChange?: (value: string|number) => any
}

export const Toggle = ({ options, value, outlineCheckboxMode, onChange }: ToggleProps) => {
    const handleChange = (newValue: string|number) => {
        if (typeof onChange === 'function') {
            onChange(newValue)
        }
    }

    const renderOption = (option: Option, index: number) => {
        return createElement('div', {
            key: `${index}-${option.value}`,
            style: option.style,
            className: cx('toggle-option', {
                isActive: value === option.value,
                isDisabled: option.disabled,
            }),
            onClick: () => {
                if (option.disabled) {
                    return
                }

                handleChange(option.value)
            },
        }, [
            outlineCheckboxMode &&
                createElement(Checkbox, {
                    key: 'checkbox',
                    color: 'purple',
                    className: cx('toggle-option-checkbox'),
                    checked: value === option.value,
                    onChange: () => {},
                }),
            createElement(Fragment, {
                key: 'text',
            }, option.text),
        ])
    }

    return createElement('div', {
        className: cx('toggle-container', {
            'mode-outline': outlineCheckboxMode,
        }),
    }, options.map(renderOption))
}
