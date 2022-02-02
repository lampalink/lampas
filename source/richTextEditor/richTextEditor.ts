
import { createElement, useState, useEffect } from 'react'
import * as _ from 'lodash'
import cx from 'classnames'
import { convertToRaw } from 'draft-js'

import './styles.scss'

import { ButtonProps } from '../button'
import { RichTextEditorControls } from './controls'
import { useDocument } from './draftDocument'

export interface RichTextEditorProps {
    value?: string|object
    placeholder?: string
    containerClassName?: string
    truncateCount?: number
    noBorder?: boolean
    hideControls?: boolean
    readonly?: boolean
    actions?: ButtonProps[]
    onChange?: (json: string) => any
}

export const RichTextEditor = ({ value, placeholder, containerClassName, truncateCount, noBorder, hideControls, readonly, actions, onChange }: RichTextEditorProps) => {
    const { draftDocument, editorState } = useDocument({ truncateCount })

    useEffect(() => {
        draftDocument.parseRawContentState(value)
    }, [value])

    const handleEditorBlur = event => {
        if (readonly) return

        if (typeof onChange === 'function') {
            const currentContent = draftDocument.currentContent

            let documentJson: string
            if (currentContent.hasText()) {
                documentJson = JSON.stringify(convertToRaw(currentContent))
            }

            onChange(documentJson)

            // onChange(JSON.stringify(currentContent.hasText() ? convertToRaw(currentContent) : null))
        }
    }
    
    const handleEditorClick = () => {
        if (!readonly) {
            draftDocument.focus()
        }
    }

    const renderControls = () => {
        if (hideControls || readonly) {
            return null
        }

        return createElement(RichTextEditorControls, {
            key: 'controls',
            draftDocument, actions,
        })
    }

    return createElement('div', {
        className: cx('rich-text-editor-container', containerClassName, { noBorder, readonly }),
    }, [
        createElement('div', {
            key: 'content',
            className: cx('rich-text-editor-draft'),
            onClick: handleEditorClick,
        }, createElement(draftDocument.Editor, {
            editorState: editorState,
            placeholder: placeholder,
            onBlur: handleEditorBlur,
            readOnly: readonly,
        })),
        renderControls(),
    ])
}
