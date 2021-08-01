
import { createElement, useState, useEffect } from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'
import { convertToRaw } from 'draft-js'

import './styles.scss'

import { ButtonProps } from '../button'
import { RichTextEditor } from '../richTextEditor'

export interface RichTextAreaProps {
    value?: string|object
    placeholder?: string
    containerClassName?: string
    readonly?: boolean
    allowEdit?: boolean
    onChange?(json: string)
    onEdit?()
    onCancel?()
    onSave?()
}

export const RichTextArea = ({ value, placeholder, containerClassName, readonly, allowEdit, onChange, onEdit, onCancel, onSave }: RichTextAreaProps) => {
    const handleClick = () => {
        if (readonly && allowEdit && typeof onEdit === 'function') {
            onEdit()
        }
    }

    const actions: ButtonProps[] = []

    if (allowEdit && !readonly) {
        actions.push({
            mode: 'primary',
            children: 'Save',
            onClick: onSave,
        })

        actions.push({
            mode: 'ghost',
            children: 'Cancel',
            onClick: onCancel,
        })
    }

    return createElement('div', {
        className: cx('rich-textarea-container', containerClassName, { readonly, allowEdit }),
        onClick: handleClick,
    }, createElement(RichTextEditor, {
        value, placeholder, readonly, actions, onChange,
        containerClassName: cx('rich-textarea-editor'),
        noBorder: true,
    }))
}
