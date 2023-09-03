import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export interface IdAndTitle {
    contentId: string;
    title?: string;
}

export interface EditorContent extends IdAndTitle {
    children: Descendant[];
}


export interface BaseProps {
    className?: string
    [key: string]: unknown
}

export type SlateEditor = BaseEditor & ReactEditor & HistoryEditor;

export type CustomElement = { type: EditorElementType; children: CustomText[]; align?: string }
export type CustomText = { text: string; } & MarkFormates;

export type MarkFormates = { bold?: true; italic?: boolean, underline?: true }

export type MarkFormatTypes = keyof MarkFormates;

export type AlignTypes = 'left' | 'center' | 'justify' | 'right'

export type ListTypes = 'numbered-list' | 'bulleted-list'

export type EditorElementType = 'heading-one' | 'heading-two' | 'block-quote' | ListTypes | 'paragraph' | 'list-item' | 'pattern'

export type FormatNodeTypes = EditorElementType | AlignTypes | MarkFormatTypes


