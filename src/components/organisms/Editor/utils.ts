import { updateContent } from '../../../api/contentApis';
import { LIST_TYPES, TEXT_ALIGN_TYPES } from '../../../constants/contants';
import { AlignTypes, CustomElement, EditorContent, EditorElementType, MarkFormatTypes, SlateEditor } from '../../../types/editor';
import { Editor, Transforms, Element as SlateElement } from 'slate';

export const toggleMark = (editor: SlateEditor, format: MarkFormatTypes) => {
    const isActive = isMarkActive(editor, format)
    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

export const isMarkActive = (editor: SlateEditor, format: MarkFormatTypes) => {
    const marks = Editor.marks(editor);
    //@ts-ignore
    return marks ? marks[format] === true : false
}

export const isBlockActive = (editor: SlateEditor, format: EditorElementType | AlignTypes, blockType: keyof CustomElement = 'type') => {
    const { selection } = editor
    if (!selection) return false

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: n =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                n[blockType] === format,
        })
    )

    return !!match
}

export const toggleBlock = (editor: SlateEditor, format: EditorElementType | AlignTypes) => {
    const isActive = isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
    )
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: n =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            LIST_TYPES.includes(n.type) &&
            !TEXT_ALIGN_TYPES.includes(format),
        split: true,
    })
    let newProperties: Partial<SlateElement>
    if (TEXT_ALIGN_TYPES.includes(format)) {
        newProperties = {
            align: isActive ? undefined : format,
        }
    } else {
        newProperties = { type: isActive ? 'paragraph' : isList ? 'list-item' : format as EditorElementType }
    }
    Transforms.setNodes<SlateElement>(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format as EditorElementType, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

export const saveInDB = (content: EditorContent) => {
    try {
        (async function () {
            await updateContent(content);
        })();
    }
    catch (ex) { }
}

