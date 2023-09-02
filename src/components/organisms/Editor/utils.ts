import { saceInDBApi } from '../../../api/contentApis';
import { Fomat, SlateEditor } from '../../../types/editor';
import { Editor, Descendant } from 'slate';

export const toggleMark = (editor: SlateEditor, format: Fomat) => {
    const isActive = isMarkActive(editor, format)
    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

export const isMarkActive = (editor: SlateEditor, format: Fomat) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false
}

export const saveInDB = async (content: Descendant[]) => {
    console.log(content);
    //await saceInDBApi(content);
}