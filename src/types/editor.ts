import { ContentItemType } from "../constants/contants";
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export interface EditorContent {
    contentId: string;
    items: EditorContentItem[];
}

export interface EditorContentItem {
    id: string;
    type: ContentItemType;
    content: ContentModel;
    stylesClasses: string[];
}

export interface ContentModel {
    text: string;
}

export interface BaseProps {
    className?: string
    [key: string]: unknown
}

export type SlateEditor = BaseEditor & ReactEditor & HistoryEditor;

export type CustomElement = { type: 'paragraph'; children: CustomText[]; align?: string }
export type CustomText = { text: string; } & Formates;

export type Formates = { bold?: true; italic?: boolean, underline?: true }

export type Fomat = keyof Formates;