
import { createElement, useState, useEffect } from 'react'
import cx from 'classnames'
import Select from 'react-select'

import './styles.scss'

export interface AutocompleteSelectOption {
    value: string
    label: string
}

export interface AutocompleteSelectPropsBase {
    options?: AutocompleteSelectOption[]
    value?: string|string[]
    placeholder?: string
    isLoading?: boolean
    onSearch?(searchExpr: string)
}

export interface AutocompleteSelectPropsSingle extends AutocompleteSelectPropsBase {
    mode?: 'select'
    onChange?(value: AutocompleteSelectOption)
}

export interface AutocompleteSelectPropsMultiple extends AutocompleteSelectPropsBase {
    mode: 'multiselect'
    onChange?(value: AutocompleteSelectOption[])
}

export type AutocompleteSelectProps = AutocompleteSelectPropsSingle|AutocompleteSelectPropsMultiple
export const AutocompleteSelect = ({ mode, value, options, placeholder, isLoading, onSearch, onChange }: AutocompleteSelectProps) => {
    const [ cachedOptions, setCachedOptions ] = useState<{ [value: string ]: string }>({})
    useEffect(() => {
        if (mode === 'multiselect') {
            for (const i in value as string[]) {
                if (!cachedOptions[value[i]]) {
                    resolveOption:
                    for (const j in options) {
                        if (options[j].value === value[i]) {
                            setCachedOptions({
                                ...cachedOptions,
                                [value[i]]: options[j].label,
                            })
                            break resolveOption
                        }
                    }
                }
            }
            return
        }

        if (value && !cachedOptions[value as string]) {
            for (const i in options) {
                if (options[i].value === value) {
                    setCachedOptions({
                        ...cachedOptions,
                        [value as string]: options[i].label,
                    })
                }
            }
        }
    }, [value, options])

    let selectValue: AutocompleteSelectOption|AutocompleteSelectOption[]
    if (mode === 'multiselect') {
        selectValue = (value as string[]).map(value => {
            let label = cachedOptions[value]
            if (!cachedOptions[value]) {
                for (const i in options) {
                    if (options[i].value === value) {
                        label = options[i].label
                        break
                    }
                }
            }

            return { value, label }
        })
    } else {
        selectValue = {
            value: value as string,
            label: cachedOptions[value as string],
        }

        if (!cachedOptions[value as string]) {
            for (const i in options) {
                if (options[i].value === value) {
                    selectValue = {
                        value,
                        label: options[i].label,
                    }
                    break
                }
            }
        }
    }

    return createElement(Select, {
        options, isLoading, placeholder,
        value: selectValue,
        isMulti: mode === 'multiselect',
        onChange: onChange,
        onInputChange: onSearch,
        className: cx('autocomplete-select-container'),
        classNamePrefix: 'autocomplete-select',
    })
}
