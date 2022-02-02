
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import './styles.scss'

import { Popover } from '../popover'
import { Icon } from '../icon'

export interface Option<T> {
    key: string
    value: T
    text: React.ReactNode
}

export interface SearchSelectProps<T> {
    options: Option<T>[]
    value?: T
    color?: 'blue'|'purple'
    placeholder?: string
    fullWidth?: boolean
    onSearch?: (text: string) => any
    onChange?: (value: T) => any
    onClear?: () => any
}

export const SearchSelect = <T extends any>({ value: valueProp, options, color, placeholder, fullWidth, onSearch, onChange, onClear }: SearchSelectProps<T>) => {
    const [ isActive, setIsActive ] = React.useState(false)

    const [ value, setValue ] = React.useState(valueProp)
    React.useEffect(() => setValue(valueProp), [valueProp])

    const [ _options, _setOptions ] = React.useState(options)
    React.useEffect(() => _setOptions(options), [options])

    const handleSearch = (text: string) => {
        if (typeof onSearch === 'function') {
            onSearch(text)
            return
        }

        if (typeof _.get(_options, '0.text') === 'string') {
            const filtered = _options.filter(option =>
                ~String(option.text)
                    .toLowerCase()
                    .indexOf(String(text).toLowerCase()))
            _setOptions(filtered)
        }
    }

    const handleOptionClick = async(option: Option<T>) => {
        if (typeof onChange === 'function') {
            onChange(option.value)
        }
    }

    const renderOption = (option: Option<T>, index: number) => {
        return (
            <div
                key={option.key}
                className={cx('search-select-option', { isActive: option.value === value })}
                onClick={() => handleOptionClick(option)}
            >{option.text}</div>
        )
    }

    let triggerText = value
    if (!_.isNil(value)) {
        for (const i in _options) {
            if (value === _options[i].value) {
                triggerText = _options[i].text as any
                break
            }
        }
    }

    return (
        <Popover
            container={{ style: !!fullWidth ? { width: '100%' } : undefined }}
            renderOverlay={() =>
                <div
                    className={cx('search-select-options', color, { fullWidth })}
                >{options.map(renderOption)}</div>}
            isOpened={isActive}
            trigger='none'
            disableHover
        >
            {/* <InlineEdit
                // className={cx('search-select-input')}
                value={isActive ? value as any : triggerText}
                onChange={setValue as any}
                placeholder={placeholder}
                onEditModeChange={isEditMode => setIsActive(isEditMode)}
            /> */}
        </Popover>
    )

    return (
        <Popover
            container={{ style: !!fullWidth ? { width: '100%' } : undefined }}
            renderOverlay={() =>
                <div
                    className={cx('search-select-options', color, { fullWidth })}
                >{options.map(renderOption)}</div>}
            isOpened={isActive}
            trigger='none'
            disableHover
        >
            <div className={cx('search-select-container')}>
                <input
                    className={cx('search-select-input')}
                    placeholder={placeholder}
                    onFocus={() => {
                        setIsActive(true)
                    }}
                    onBlur={() => {
                        setIsActive(false)
                    }}
                />
                {(typeof onClear === 'function' && !_.isNil(value)) &&
                    <div
                        className={cx('select-trigger-icon')}
                    >
                        <Icon
                            type='close-inverted'
                            size='1rem'
                            color={color}
                            onClick={onClear}
                        />
                    </div>}
            </div>
        </Popover>
    )
}
