import React, { useCallback, useMemo } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor, Descendant } from 'slate'
import { withHistory } from 'slate-history'
import { SlateEditor } from '../../../types/editor'
import { saveInDB, toggleMark } from './utils'
import { Toolbar } from '../../molecules/toolbar/Toolbar'
import { MarkButton } from '../../molecules/markButton/MarkButton'
import { BlockButton } from '../../molecules/blockButton/BlockButton'
import { EditorElement } from '../../molecules/editorElement/EditorElement'
import { EditorLeaf } from '../../molecules/editorleafs/EditorLeaf'

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline'
}

interface Proptypes {
    initialContent: Descendant[];
    updateContent: (value: Descendant[]) => void;
}


const TextEditor = ({ initialContent, updateContent }: Proptypes) => {

    const editor: SlateEditor = useMemo(() => withHistory(withReact(createEditor())), [])
    const renderElement = useCallback((props: any) => <EditorElement {...props} />, [])
    const renderLeaf = useCallback((props: any) => <EditorLeaf {...props} editor={editor} />, [])

    return (
        <Slate editor={editor} initialValue={initialContent}
            onChange={value => {
                const isAstChange = editor.operations.some(
                    op => 'set_selection' !== op.type
                )
                if (isAstChange) {
                    updateContent(value);
                }
            }}>
            <Toolbar>
                <MarkButton format="bold" icon="format_bold" />
                <MarkButton format="italic" icon="format_italic" />
                <MarkButton format="underline" icon="format_underlined" />
                <BlockButton format="heading-one" icon="looks_one" />
                <BlockButton format="heading-two" icon="looks_two" />
                <BlockButton format="block-quote" icon="format_quote" />
                <BlockButton format="numbered-list" icon="format_list_numbered" />
                <BlockButton format="bulleted-list" icon="format_list_bulleted" />
                <BlockButton format="left" icon="format_align_left" />
                <BlockButton format="center" icon="format_align_center" />
                <BlockButton format="right" icon="format_align_right" />
                <BlockButton format="justify" icon="format_align_justify" />
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



export default TextEditor

