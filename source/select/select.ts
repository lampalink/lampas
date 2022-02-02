
import {
    ReactNode,
    createElement,
    useRef,
    useState,
    useCallback,
    useEffect,
} from 'react'
import {
    get,
    isArray,
    groupBy,
} from 'lodash'
import cx from 'classnames'

import './styles.scss'
import { Icon } from '../icon'
import { Checkbox } from '../checkbox'
import { Button } from '../button'

export interface Option {
    value: string|number
    text: ReactNode
}

export interface SelectProps {
    options: Option[]
    currentValue: string[]|number[]
    placeholder?: string
    closeAfterSelection?: boolean
    onChange?(value: string[]|number[]): any
}

export const Select = ({ options, currentValue, placeholder, closeAfterSelection, onChange }: SelectProps) => {
    const values: any[] = isArray(currentValue) ?
        currentValue : []

    const [ areOptionsVisible, setAreOptionsVisible ] = useState(false)
    const [ visibleValuesCount, setVisibleValuesCount ] = useState(0)

    const handleChange = (value: string[]|number[]) => {
        if (typeof onChange === 'function') {
            onChange(value)
        }

        if (closeAfterSelection) {
            setAreOptionsVisible(false)
        }
    }

    const selectContainer = useRef<HTMLDivElement>()

    const valuesRef = useCallback((element: HTMLDivElement) => {
        if (element && values.length > 0) {
            const valuesWidth = element.clientWidth

            let visibleChildrenCount = 0
            let childrenWidthTotal = 0

            for (let index = 0; index < element.childNodes.length; index += 1) {
                const child = element.childNodes.item(index)
                const childWidth = get(child, 'clientWidth') || 0

                if (childrenWidthTotal + childWidth < valuesWidth) {
                    visibleChildrenCount += 1
                }

                childrenWidthTotal += childWidth
            }

            setVisibleValuesCount(visibleChildrenCount)
            return
        }

        setVisibleValuesCount(values.length)
    }, [values])

    const handleDocumentMouseDown = (event) => {
        if (selectContainer.current && !(selectContainer.current as any).contains(event.target)) {
            setAreOptionsVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentMouseDown)
        return () => document.removeEventListener('mousedown', handleDocumentMouseDown)
    }, [])

    const handleValueContainerClick = () => {
        if (!areOptionsVisible) {
            setAreOptionsVisible(true)
            return
        }
    }

    const handleOptionClick = ({ value }: Option) => {
        if (~values.indexOf(value)) {
            handleChange(values.filter(item => item !== value))
            return
        }

        handleChange([ value, ...values ])
    }

    const renderOption = (option: Option, index: number) => {
        if (!areOptionsVisible) {
            return null
        }

        return createElement('div', {
            key: `${index}-${option.value}`,
            className: cx('select-option'),
            onClick: () =>
                handleOptionClick(option),
        }, [
            createElement(Checkbox, {
                key: 'isselected',
                color: 'purple',
                className: cx('option-checkbox'),
                checked: !!~values.indexOf(option.value),
                onChange: () => {},
            }),
            createElement('div', {
                key: 'text',
                className: cx('option-text'),
            }, option.text),
        ])
    }

    const renderOptions = () => {
        return createElement('div', {
            key: 'options',
            className: cx('select-options'),
        }, options.map(renderOption))
    }

    const indexedOptions = groupBy(options, 'value')
    const renderValue = (value: string, index: number) => {
        let text = value

        const option = indexedOptions[isNaN(value as any) ? value : Number(value)]
        if (isArray(option) && option[0] && option[0].text) {
            text = option[0].text
        }

        return createElement('div', {
            key: `${index}`,
            className: cx('select-value'),
        }, text)
    }

    const renderValues = () => {
        return createElement('div', {
            key: 'values',
            className: cx('select-values'),
            ref: valuesRef,
        }, values.map(renderValue))
    }

    const renderSelect = () => {
        return createElement('div', {
            key: 'value',
            className: cx('select'),
            onClick: handleValueContainerClick,
        }, [
            (values.length < 1 && typeof placeholder === 'string') &&
                createElement('div', {
                    key: 'placeholder',
                    className: cx('select-placeholder'),
                }, placeholder),
            renderValues(),
            values.length > visibleValuesCount &&
                createElement('div', {
                    key: 'counter',
                    className: cx('select-counter'),
                }, `+${values.length - visibleValuesCount}`),
            createElement(Icon, {
                key: 'icon',
                size: '10px',
                type: areOptionsVisible ?
                    'caret-up' : 'caret-down',
                className: cx('select-icon'),
            }),
        ])
    }

    const renderFooter = () => {
        return createElement('div', {
            key: 'footer',
            className: cx('select-footer'),
        }, [
            createElement(Button, {
                key: 'close',
                color: 'purple',
                mode: 'primary',
                size: 'kinda-small',
                onClick: () =>
                    setAreOptionsVisible(false),
            }, 'Done')
        ])
    }

    const renderDropdown = () => {
        if (!areOptionsVisible) {
            return null
        }

        return createElement('div', {
            key: 'dropdown',
            className: cx('select-dropdown'),
        }, [
            renderOptions(),
            !closeAfterSelection &&
                renderFooter(),
        ])
    }

    return createElement('div', {
        className: cx('select-container', { areOptionsVisible }),
        ref: selectContainer,
    }, [
        renderSelect(),
        // renderOptions(),
        renderDropdown(),
    ])
}
