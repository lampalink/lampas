
import {
    isArray,
    merge,
} from 'lodash'
import { Map } from 'immutable'
import { Store, useStoreRaw } from '@mylampa/store'
import {
    useState,
    useEffect,
    KeyboardEvent,
    FunctionComponent,
    createElement,
    SyntheticEvent,
    MouseEvent as ReactMouseEvent,
} from 'react'
import {
    EditorState,
    RichUtils,
    DraftEditorCommand,
    Entity,
    Modifier,
    ContentState,
    CompositeDecorator,
    convertFromRaw,
    DefaultDraftBlockRenderMap,
    EditorProps,
} from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import {
    EditorPlugin,
    composeDecorators,
} from 'draft-js-plugins-editor'
import createLinkifyPlugin from 'draft-js-linkify-plugin'

import { Link } from '../../link'

export type HandleResult = 'handled'|'not-handled'
export type InlineStyle = 'BOLD'|'ITALIC'|'UNDERLINE'
export type BlockType = 'unordered-list-item'|'ordered-list-item'|'header-one'|'header-two'|'header-three'|'header-four'|'header-five'|'header-six'

const blockRenderMap = DefaultDraftBlockRenderMap.merge(Map({}))

const linkifyPlugin = createLinkifyPlugin({
    target: '_blank',
    component: ({ target, href, className, children }) => {
        return createElement(Link, { target, href }, children)
    },
})

export interface DraftDocumentEditorProps {
    editorState: EditorState
    placeholder?: string
    readOnly?: boolean
    onBlur?(event: SyntheticEvent)
}

export interface DraftDocumentHandlers {
    handleKeyCommand(command: DraftEditorCommand, state: EditorState, eventTimeStamp: number): HandleResult

    handleBoldClick(event: ReactMouseEvent<HTMLButtonElement, MouseEvent>): void
    handleItalicClick(event: ReactMouseEvent<HTMLButtonElement, MouseEvent>): void
    handleUnderlineClick(event: ReactMouseEvent<HTMLButtonElement, MouseEvent>): void

    handleUnorderedListClick(event: ReactMouseEvent<HTMLButtonElement, MouseEvent>): void
    handleOrderedListClick(event: ReactMouseEvent<HTMLButtonElement, MouseEvent>): void
}

export interface DraftDocumentOptions {
    truncateCount?: number
}

export interface DraftDocument {
    readonly options: DraftDocumentOptions

    readonly editorStore: Store<EditorState>
    readonly handlers: DraftDocumentHandlers

    // readonly editor: Editor
    readonly Editor: FunctionComponent<DraftDocumentEditorProps>

    readonly editorState: EditorState
    readonly currentContent: ContentState

    setEditorState(editorState: EditorState)
    parseRawContentState(rawContentState: string|object)

    focus()
}

const createDraftDocument = (_options: DraftDocumentOptions): DraftDocument => {
    const options: DraftDocumentOptions = merge({}, {
        truncateCount: null,
    }, _options)

    let draftDocument: DraftDocument
    let editor: Editor = null

    const plugins = [linkifyPlugin]
    const decorator = new CompositeDecorator(plugins.reduce((decorators, plugin) => [
        ...decorators,
        ...(plugin && isArray(plugin.decorators) ?
            plugin.decorators : []),
    ], []))

    const toggleInlineStyle = (inlineStyle: InlineStyle) => {
        draftDocument.setEditorState(
            RichUtils.toggleInlineStyle(draftDocument.editorState, inlineStyle),
        )
    }

    const toggleBlockType = (blockType: BlockType) => {
        draftDocument.setEditorState(
            RichUtils.toggleBlockType(draftDocument.editorState, blockType),
        )
    }

    const handlers: DraftDocumentHandlers = {
        handleKeyCommand: (command: DraftEditorCommand, currentEditorState: EditorState, eventTimeStamp: number): HandleResult => {
            let editorState: EditorState
            if (editorState = RichUtils.handleKeyCommand(currentEditorState, command)) {
                draftDocument.setEditorState(editorState)
                return 'handled'
            }

            return 'not-handled'
        },
        handleBoldClick(event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
            event.preventDefault()
            event.stopPropagation()

            toggleInlineStyle('BOLD')
        },
        handleItalicClick(event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
            event.preventDefault()
            event.stopPropagation()

            toggleInlineStyle('ITALIC')
        },
        handleUnderlineClick(event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
            event.preventDefault()
            event.stopPropagation()

            toggleInlineStyle('UNDERLINE')
        },
        handleUnorderedListClick(event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
            event.preventDefault()
            event.stopPropagation()

            toggleBlockType('unordered-list-item')
        },
        handleOrderedListClick(event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
            event.preventDefault()
            event.stopPropagation()

            toggleBlockType('ordered-list-item')
        },
    }

    const truncateCharacters = () => {
        try {
            const contentState = draftDocument.editorState.getCurrentContent()
            const blocks = contentState.getBlocksAsArray()

            let index = 0
            let currentLength = 0
            let isTruncated = false // make this into state and expose it upwards
            const truncatedBlocks = []

            while (!isTruncated && blocks[index]) {
                const block = blocks[index]
                const length = block.getLength()
                if (currentLength + length > options.truncateCount) {
                    isTruncated = true
                    const truncatedText = block
                        .getText()
                        .slice(0, options.truncateCount - currentLength)
                    const state = ContentState.createFromText(`${truncatedText}...`)
                    truncatedBlocks.push(state.getFirstBlock())
                } else {
                    truncatedBlocks.push(block)
                }

                currentLength += length + 1
                index++
            }

            if (isTruncated) {
                const state = ContentState.createFromBlockArray(truncatedBlocks)
                draftDocument.editorStore.setStateRaw(
                    EditorState.createWithContent(state),
                )
                return
            }

            return
        } catch (err) {}
    }

    return (draftDocument = {
        options, handlers,
        editorStore: new Store<EditorState>(EditorState.createEmpty(decorator)),
        get editorState(): EditorState {
            return draftDocument.editorStore.getStateRaw()
        },
        get currentContent(): ContentState {
            return draftDocument.editorState.getCurrentContent()
        },
        Editor: (props: DraftDocumentEditorProps) => {
            return createElement(Editor, {
                ...props, plugins,
                blockRenderMap: blockRenderMap,
                handleKeyCommand: draftDocument.handlers.handleKeyCommand as any,
                onChange: editorState =>
                    draftDocument.setEditorState(editorState as any),
                ref: (editorRef: Editor) => {
                    if (editorRef) {
                        editor = editorRef
                    }
                },
            })
        },
        setEditorState: (editorState: EditorState) => {
            draftDocument.editorStore.setStateRaw(editorState)

            if (options.truncateCount && options.truncateCount > 0) {
                truncateCharacters()
            }
        },
        parseRawContentState: (rawContentState: string|object) => {
            try {
                const contentState = convertFromRaw(typeof rawContentState === 'string' ?
                    JSON.parse(rawContentState) : rawContentState)
                const editorState = EditorState.createWithContent(contentState, decorator)
                draftDocument.setEditorState(editorState)
            } catch (err) {}
        },
        focus: () => {
            if (editor) {
                editor.focus()
            }
        },
    })
}

export const useDocument = (options: DraftDocumentOptions = {}): {
    draftDocument: DraftDocument
    editorState: EditorState
} => {
    const [ draftDocument ] = useState<DraftDocument>(createDraftDocument(options))
    const editorState = useStoreRaw(draftDocument.editorStore)

    return {
        draftDocument,
        editorState,
    }
}
