
import { createElement } from 'react'
import * as _ from 'lodash'
import cx from 'classnames'
import {
    EditorState,
    RichUtils,
} from 'draft-js'

import { Button, ButtonProps } from '../button'
import { DraftDocument } from './draftDocument'

export interface RichTextEditorControlsProps {
    draftDocument: DraftDocument
    actions?: ButtonProps[]
}

export const RichTextEditorControls = ({ draftDocument, actions }: RichTextEditorControlsProps) => {
    const editorState = draftDocument.editorState
    const currentBlockType = RichUtils.getCurrentBlockType(editorState)

    return createElement('div', { className: cx('rich-text-editor-controls') }, [
        createElement(Button, {
            key: 'bold',
            color: 'purple',
            size: 'small',
            icon: 'bold',
            mode: editorState.getCurrentInlineStyle().has('BOLD') ?
                'secondary' : 'ghost',
            onMouseDown: draftDocument.handlers.handleBoldClick,
        }),
        createElement(Button, {
            key: 'italic',
            color: 'purple',
            icon: 'italic',
            size: 'small',
            mode: editorState.getCurrentInlineStyle().has('ITALIC') ?
                'secondary' : 'ghost',
            onMouseDown: draftDocument.handlers.handleItalicClick,
        }),
        createElement(Button, {
            key: 'underline',
            color: 'purple',
            size: 'small',
            icon: 'underline',
            mode: editorState.getCurrentInlineStyle().has('UNDERLINE') ?
                'secondary' : 'ghost',
            onMouseDown: draftDocument.handlers.handleUnderlineClick,
        }),
        createElement('div', {
            key: 'divider',
            className: cx('controls-divider'),
        }),
        createElement(Button, {
            key: 'orderedlist',
            color: 'purple',
            size: 'small',
            icon: 'list-numbered',
            mode: currentBlockType === 'ordered-list-item' ?
                'secondary' : 'ghost',
            onMouseDown: draftDocument.handlers.handleOrderedListClick,
        }),
        createElement(Button, {
            key: 'unorderedlist',
            color: 'purple',
            size: 'small',
            icon: 'bullet-list',
            mode: currentBlockType === 'unordered-list-item' ?
                'secondary' : 'ghost',
            onMouseDown: draftDocument.handlers.handleUnorderedListClick,
        }),
        createElement('div', {
            key: 'space',
            style: { flex: 1 },
        }),
        (actions || []).map((props, index) =>
            createElement(Button, {
                key: `${index}`,
                color: 'purple',
                size: 'kinda-small',
                ...props,
            }))
    ])
}
