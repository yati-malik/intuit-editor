import React, { ReactNode, useCallback, useMemo } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor, Descendant } from 'slate'
import { withHistory } from 'slate-history'
import { SlateEditor } from '../../../types/editor'
import { saveInDB, toggleMark } from './utils'
import { Toolbar } from '../../molecules/toolbar/Toolbar'
import { MarkButton } from '../../molecules/markButton/MarkButton'

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline'
}

const initialValue: Descendant[] = [
    {
        type: "paragraph",
        children: [
            { text: '' }
        ]
    }
]

const RichTextExample = () => {
    const renderElement = useCallback((props: any) => <Element {...props} />, [])
    const renderLeaf = useCallback((props: any) => <Leaf {...props} />, [])
    const editor: SlateEditor = useMemo(() => withHistory(withReact(createEditor())), [])

    return (
        <Slate editor={editor} initialValue={initialValue}
            onChange={value => {
                const isAstChange = editor.operations.some(
                    op => 'set_selection' !== op.type
                )
                if (isAstChange) {
                    saveInDB(value);
                }
            }}>
            <Toolbar>
                <MarkButton format="bold" icon="format_bold" />
                <MarkButton format="italic" icon="format_italic" />
                <MarkButton format="underline" icon="format_underlined" />
            </Toolbar>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Enter some rich text…"
                spellCheck
                autoFocus
                style={{ "height": "100vh", "outline": "0px solid transparent" }}
                onKeyDown={event => {
                    for (const hotkey of Object.keys(HOTKEYS)) {
                        if (isHotkey(hotkey, event as any)) {
                            event.preventDefault();
                            //@ts-ignore
                            const mark = HOTKEYS[hotkey];
                            toggleMark(editor, mark)
                        }
                    }
                }}
            />
        </Slate>
    )
}


const Element = ({ attributes, children, element }: { attributes: any, children: ReactNode, element: any }) => {
    const style = { textAlign: element.align }
    return (
        <p style={style} {...attributes}>
            {children}
        </p>
    )
}

const Leaf = ({ attributes, children, leaf }: { attributes: any, children: ReactNode, leaf: any }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}


export default RichTextExample

