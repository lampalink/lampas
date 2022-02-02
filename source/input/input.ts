
import { DeepPartial } from 'ts-essentials'
import { createElement, useState } from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import './styles.scss'

import { Icon, IconProps, GlyphName } from '../icon'
import { useFormItemContext } from '../form'

export interface InputProps {
    value?: string
    placeholder?: string
    name?: string
    id?: string
    type?: string
    color?: 'blue'|'purple'
    mode?: 'ghost'|'title'|'subtitle'
    size?: 'small'|'large'
    hasError?: boolean
    prefixIcon?: GlyphName
    postfix?: React.ReactNode
    fluid?: boolean
    transparent?: boolean
    readonly?: boolean
    autoFocus?: boolean
    style?: React.CSSProperties
    containerClassName?: string
    containerStyle?: React.CSSProperties
    ref?: React.MutableRefObject<any>|((el: HTMLInputElement) => any)
    renderPostfix?: (props: { icon: Omit<DeepPartial<IconProps>, 'container'> }) => React.ReactNode
    onChange?: (value: string) => any
    onFocus?: () => any
    onBlur?: () => any
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => any
}

export const Input = ({
    value, placeholder, name, id, type, color, mode, size, fluid, transparent, readonly, autoFocus, hasError, style, containerClassName, containerStyle, prefixIcon, postfix,
    renderPostfix, ref, onChange, onFocus, onBlur, onKeyDown,
}: InputProps) => {
    const {
        status: formItemStatus,
    } = useFormItemContext()

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        event.preventDefault()
        event.stopPropagation()

        if (typeof onChange === 'function') {
            onChange(event.target.value)
        }
    }

    const [ isActive, setIsActive ] = useState(false)

    const handleFocus: React.FocusEventHandler<HTMLInputElement> = event => {
        event.preventDefault()
        event.stopPropagation()

        if (!readonly) {
            setIsActive(true)
        }

        if (typeof onFocus === 'function') {
            onFocus()
        }
    }

    const handleBlur: React.FocusEventHandler<HTMLInputElement> = event => {
        event.preventDefault()
        event.stopPropagation()

        if (!readonly) {
            setIsActive(false)
        }

        if (typeof onBlur === 'function') {
            onBlur()
        }
    }

    let iconSize = '16px'
    switch (size) {
    case 'small':
        iconSize = '14px'
        break
    case 'large':
        iconSize = '20px'
        break
    }

    return createElement('div', {
        className: cx('input-container', containerClassName, mode, size, {
            transparent, isActive, readonly, fluid,
            hasError: hasError || formItemStatus === 'error',
        }),
        style: containerStyle,
    }, [
        prefixIcon &&
            createElement(Icon, {
                key: 'prefixicon',
                type: prefixIcon,
                className: cx('input-icon-prefix'),
                size: iconSize,
            }),
        createElement('input', {
            key: 'input',
            className: cx({ 'data-hj-allow': type !== 'password' }),
            style: style || undefined,
            value: value || '',
            type: type || undefined,
            placeholder: placeholder || undefined,
            name: name || undefined,
            id: id || undefined,
            readOnly: readonly,
            autoFocus: autoFocus,
            ref: ref,
            onChange: handleChange,
            onKeyDown: onKeyDown,
            onFocus: handleFocus,
            onBlur: handleBlur,
        }),
        postfix &&
            createElement('span', {
                key: 'postfix',
                className: cx('input-postfix'),
            }, postfix),
    ])
}
