
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

import { useDimensions } from '../../utils'
import { Icon, GlyphName } from '../icon'
import { Tag } from '../tag'
import { Checkbox } from '../checkbox'
import { Button } from '../button'

export interface DropdownOption {
    value: string|number
    text: React.ReactNode
    icon?: GlyphName
    onClick?: (option: DropdownOption) => any
}

type Value = string|number

export interface DropdownProps {
    options?: DropdownOption[]
    value?: Value|Value[]
    className?: string
    style?: React.CSSProperties
    optionsClassName?: string
    optionsStyle?: React.CSSProperties
    placeholder?: string
    fullWidth?: boolean
    noWrap?: boolean
    enableDoneButton?: boolean
    disableHoverColor?: boolean
    type?: 'raw'|'selection'|'multi-selection'
    placement?: 'bottom-left'|'bottom-right'|'top-right'|'top-left'|'right-top'|'right-bottom'
    onSelect?: (option: DropdownOption) => any
    onChange?: (value: Value|Value[]) => any
    children?: React.ReactNode
}

export const Dropdown = ({
    options: _options, value, className, optionsClassName, optionsStyle: optionsStyleProp, style, placeholder,
    fullWidth, noWrap, enableDoneButton, disableHoverColor, type: typeProp, placement: placementProp,
    onSelect, onChange, children,
}: DropdownProps) => {
    const options = (_options || []).filter(item => item)
    const type = typeProp || 'raw'
    const values: Value[] =
        _.isArray(value) ?
            (value as any[]) :
            (value ? [value] : [])

    const [ isActive, setIsActive ] = React.useState(false)

    const handleSelect = (option: DropdownOption) => {
        if (typeof onSelect === 'function') {
            onSelect(option)
        }
    }

    const handleChange = (value: Value|Value[]) => {
        if (typeof onChange === 'function') {
            onChange(value)
        }
    }

    const handleOptionClick = (option: DropdownOption) => {
        switch (type) {
        case 'selection':
            handleSelect(option)
            handleChange(option.value)
            break
        case 'multi-selection':
            handleSelect(option)

            if (~values.indexOf(option.value)) {
                handleChange(values.filter(item =>
                    item !== option.value))
                break
            }

            handleChange([ ...values, option.value ])
            break
        case 'raw':
        default:
            handleSelect(option)

            if (typeof option.onClick === 'function') {
                option.onClick(option)
            }
            break
        }

        if (!enableDoneButton) {
            setIsActive(false)
        }
    }

    const handleContainerClick = () => {
        if (!isActive) {
            setIsActive(true)
        }
    }

    const [ containerRef, containerDimentions ] = useDimensions<HTMLDivElement>()

    const handleOutsideContainerClick = (event) => {
        if (containerRef.current && !(containerRef.current as any).contains(event.target)) {
            setIsActive(false)
        }
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', handleOutsideContainerClick)
        return () => document.removeEventListener('mousedown', handleOutsideContainerClick)
    }, [])

    const renderOption = (option: DropdownOption, index: number) => {
        const isSelected = !!~values.indexOf(option.value)

        let optionCheckmark = null
        switch (type) {
        case 'selection':
        case 'multi-selection':
            optionCheckmark = <div className={cx('dropdown-option-checkmark')}>
                <Checkbox
                    checked={isSelected}
                    color='purple'
                    size='big'
                />
            </div>
        case 'raw':
        default:
            break
        }

        return (
            <div
                key={`${index}-${option.value}`}
                className={cx('dropdown-option', { disableHoverColor })}
                onClick={() =>
                    handleOptionClick(option)}
            >
                {optionCheckmark}
                {option.icon &&
                    <Icon
                        key='icon'
                        type={option.icon}
                        color='black'
                        container={{ style: { marginRight: '8px' } }}
                    />}
                {option.text}
            </div>
        )
    }

    // const [ multiSelectionValuesContainer, setMultiSelectionValuesContainer ] = React.useState<HTMLDivElement>(null)
    // const handleMultiSelectionValuesContainer = (el: HTMLDivElement) => {
    //     if (el) {
    //         setMultiSelectionValuesContainer(el)
    //     }
    // }

    let selectedOption: DropdownOption
    const renderTrigger = () => {
        switch (type) {
        case 'selection':
            if (_.isArray(options)) {
                for (const i in options) {
                    if (~values.indexOf(options[i].value)) {
                        selectedOption = options[i]
                        break
                    }
                }
            }

            return (
                <div className={cx('dropdown-selection')}>
                    <div
                        className={cx('selection-text')}
                    >{selectedOption ? selectedOption.text : placeholder}</div>
                    <div className={cx('selection-icon')}>
                        <Icon
                            type='chevron-down'
                            size='16px'
                            color='grey'
                        />
                    </div>
                </div>
            )
        case 'multi-selection':
            const selectedValues = options.filter(item =>
                ~values.indexOf(item.value))

            if (fullWidth) {
            }

            return (
                <div className={cx('dropdown-multi-selection', { noWrap })}>
                    <div
                        className={cx('multi-selection-values')}
                        // ref={handleMultiSelectionValuesContainer}
                    >
                        {selectedValues.length > 0 ?
                            selectedValues.map((item, index) =>
                                <Tag
                                    key={`${index}-${item.value}`}
                                    color='purple'
                                    size='small'
                                >{item.text}</Tag>) :
                                placeholder}
                    </div>
                    <div className={cx('multi-selection-icon')}>
                        <Icon
                            type='chevron-down'
                            size='16px'
                            color='grey'
                        />
                    </div>
                </div>
            )
        case 'raw':
        default:
            return children
        }
    }

    const optionsStyle = {} as React.CSSProperties

    let optionsXDisplacement = 0
    let optionsYDisplacement = isNaN(containerDimentions.height as any) ?
        0 : containerDimentions.height

    switch (type) {
    case 'selection':
    case 'multi-selection':
        break
    case 'raw':
    default:
        optionsYDisplacement += 8
        break
    }

    let placement = placementProp || 'bottom-right'
    /*
    if (containerRef.current) {
        const mightOverflowBottom =
            window.innerHeight - (window.outerHeight - containerRef.current.offsetTop) > window.innerHeight * .71
        const mightOverflowTop =
            window.innerHeight - (window.outerHeight - containerRef.current.offsetTop) > window.innerHeight * .23

        if (mightOverflowBottom && placement === 'bottom-left') {
            placement = 'top-left'
        } else if (mightOverflowBottom && placement === 'bottom-right') {
            placement = 'top-right'
        } else if (mightOverflowTop && placement === 'top-left') {
            placement = 'bottom-left'
        } else if (mightOverflowTop && placement === 'top-right') {
            placement = 'bottom-right'
        }
    }
    */

    switch (placement) {
    case 'right-top':
        optionsStyle.right = 0
        optionsStyle.top = 0
        break
    case 'right-bottom':
        optionsStyle.right = 0
        optionsStyle.bottom = 0
        break
    case 'top-left':
        optionsStyle.left = optionsXDisplacement
        optionsStyle.top = 0
        break
    case 'top-right':
        optionsStyle.right = optionsXDisplacement
        optionsStyle.top = 0
        break
    case 'bottom-left':
        optionsStyle.left = optionsXDisplacement
        optionsStyle.top = optionsYDisplacement
        break
    case 'bottom-right':
    default:
        optionsStyle.right = optionsXDisplacement
        optionsStyle.top = optionsYDisplacement
        break
    }

    const [ optionsContainer, setOptionsContainer ] = React.useState<HTMLDivElement>(null)
    const handleOptionsContainerRef = (el: HTMLDivElement) => {
        if (el) {
            setOptionsContainer(el)
        }
    }

    return (
        <div
            className={cx('dropdown-container', className, type, placement, { fullWidth, isActive })}
            style={style}
            ref={containerRef}
            onClick={handleContainerClick}
        >
            <div
                className={cx('dropdown-options-container', optionsClassName, { enableDoneButton })}
                style={{ ...optionsStyle, ...optionsStyleProp }}
                ref={handleOptionsContainerRef}
            >
                <div className={cx('dropdown-options')}>
                    {options.map(renderOption)}
                </div>
                {enableDoneButton &&
                    <div
                        className={cx('dropdown-options-footer')}
                        style={{ top: optionsContainer ? optionsContainer.scrollHeight : undefined }}
                    >
                        <Button
                            color='purple'
                            size='kinda-small'
                            onClick={() =>
                                setIsActive(false)}
                        >Done</Button>
                    </div>}
            </div>
            {renderTrigger()}
        </div>
    )
}
