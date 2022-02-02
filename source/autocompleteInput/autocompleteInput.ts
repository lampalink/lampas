
import { createElement, useState, useEffect } from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import './styles.scss'

import { Indexable } from '../..'

export interface AutocompleteInputProps<Option extends Indexable> {
    placeholder?: string
    options?: Option[]
    defaultText?: string
    fullWidth?: boolean
    hasError?: boolean
    renderOption?: (option: Option) => React.ReactNode
    onChange?: (text: string, option: Option|null) => any
    onFinished?: (text: string, option: Option|null) => any
}

export const AutocompleteInput = <Option extends Indexable>({ placeholder, defaultText, fullWidth, hasError, options, renderOption: renderOptionProp, onChange, onFinished }: AutocompleteInputProps<Option>) => {
    const [ isOpened, setIsOpened ] = useState(false)

    const [ selectedIndex, setSelectedIndex ] = useState(null)
    useEffect(() => {
        setSelectedIndex(0)
    }, [options])

    const increaseSelectedIndex = () => {
        if (!_.isArray(options)) {
            return null
        }

        if ((selectedIndex + 1) < options.length) {
            setSelectedIndex(selectedIndex + 1)
        }
    }

    const decreaseSelectedIndex = () => {
        if (!_.isArray(options)) {
            return null
        }

        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1)
        }
    }

    const [ value, setValue ] = useState(defaultText)
    useEffect(() => setValue(defaultText), [defaultText])

    const handleChange = (text: string, option: Option|null) => {
        if (typeof onChange === 'function') {
            onChange(text, option)
        }
    }

    let inputElement = null as HTMLInputElement
    const handleInputRef = (el: HTMLInputElement) => {
        if (el) {
            inputElement = el
        }
    }

    const handleClose = (option: Option = null) => {
        if (!_.isEmpty(option)) {
            handleChange(value, option)
        }

        setIsOpened(false)

        if (inputElement) {
            inputElement.blur()
        }
    }

    const handleInputChange = event => {
        if (event) {
            handleChange(event.target.value, null)
            setValue(event.target.value)
        }
    }

    const handleInputFocus = () =>
        setIsOpened(true)

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
        case 'Enter':
            handleClose(options[selectedIndex])
            return
        case 'ArrowDown':
            increaseSelectedIndex()
            return
        case 'ArrowUp':
            decreaseSelectedIndex()
            return
        }

        return null
    }

    let inputContainerElement = null as HTMLDivElement
    const handleInputContainerRef = (el: HTMLDivElement) => {
        if (el) {
            inputContainerElement = el
        }
    }

    let optionsElement = null as HTMLDivElement
    const handleOptionsRef = (el: HTMLDivElement) => {
        if (el) {
            optionsElement = el
        }
    }

    const handleDocumentMousedown = event => {
        if (isOpened) {
            if (
                !(optionsElement && optionsElement.contains(event.target))
                && !(inputContainerElement && inputContainerElement.contains(event.target))
            ) {
                handleClose()
            }
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentMousedown)
        return () => document.removeEventListener('mousedown', handleDocumentMousedown)
    }, [isOpened])

    const handleOptionClick = (option: Option) =>
        handleClose(option)

    const renderOption = (option: Option, index: number) => {
        return createElement('div', {
            key: `${index}-${option.id}`,
            className: cx('autocomplete-input-options-option', { isSelected: index === selectedIndex }),
            onClick: () => handleOptionClick(option),
            onMouseEnter: () => setSelectedIndex(index),
        }, typeof renderOptionProp === 'function' ? renderOptionProp(option) : option.id)
    }

    const renderOptions = () => {
        if (!isOpened) {
            return null
        }

        return createElement('div', {
            key: 'options',
            className: cx('autocomplete-input-options'),
            ref: handleOptionsRef,
        }, _.isArray(options) && options.map(renderOption))
    }

    return createElement('div', {
        className: cx('autocomplete-input-container', { fullWidth, hasError })
    }, [
        createElement('div', {
            key: 'input',
            className: cx('autocomplete-input'),
            ref: handleInputContainerRef,
        }, createElement('input', {
            className: cx('autocomplete-input-text'),
            placeholder: placeholder,
            value: value,
            ref: handleInputRef,
            onChange: handleInputChange,
            onFocus: handleInputFocus,
            onKeyDown: handleInputKeyDown,
        })),
        renderOptions(),
    ])
}
