
import { DeepPartial } from 'ts-essentials'
import {
    ChangeEventHandler,
    FocusEventHandler,
    createElement,
    useState,
} from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

import './styles.scss'

import { Icon, IconProps, GlyphName } from '../icon'

export interface TextareaProps {
    value?: string
    placeholder?: string
    name?: string
    id?: string
    hasError?: boolean
    fluid?: boolean
    transparent?: boolean
    readonly?: boolean
    autoFocus?: boolean
    containerClassName?: string
    onChange?: (value: string) => any
    onFocus?: () => any
    onBlur?: () => any
}

export const Textarea = ({
    value, placeholder, name, id, fluid, transparent, readonly, autoFocus, hasError, containerClassName,
    onChange, onFocus, onBlur,
}: TextareaProps) => {
    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
        event.preventDefault()
        event.stopPropagation()

        if (typeof onChange === 'function') {
            onChange(event.target.value)
        }
    }

    const [ isActive, setIsActive ] = useState(false)

    const handleFocus: FocusEventHandler<HTMLTextAreaElement> = event => {
        event.preventDefault()
        event.stopPropagation()

        if (!readonly) {
            setIsActive(true)
        }

        if (typeof onFocus === 'function') {
            onFocus()
        }
    }

    const handleBlur: FocusEventHandler<HTMLTextAreaElement> = event => {
        event.preventDefault()
        event.stopPropagation()

        if (!readonly) {
            setIsActive(false)
        }

        if (typeof onBlur === 'function') {
            onBlur()
        }
    }

    return createElement('textarea', {
        className: cx('textarea-container', containerClassName, { hasError, transparent, isActive, readonly, fluid }),
        placeholder: placeholder || undefined,
        name: name || undefined,
        id: id || undefined,
        value: value || '',
        readOnly: readonly,
        autoFocus: autoFocus,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
    })
}
