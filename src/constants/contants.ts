export enum ContentItemType {
    'text',
    'newLineText',
    'select'
}

export const LocalstoreKeys = {
    editorContent: "editorContent"
}

export const APIS = {
    "updateContent": "/updateContent",
    "getContent": "/getContent",
    "createContent": "/createContent",
    "getContentEntries": "/getContentEntries",
    "getResolvedContent": "/getResolvedContent"
}

export const LIST_TYPES = ['numbered-list', 'bulleted-list']
export const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

export const Formats = {
    bold: 'bold',
    italic: 'italic',
    underline: 'underline',
    headingOne: 'heading-one',
    headingTwo: 'heading-two',
    blockQuote: 'block-quote',
    numberedList: 'numbered-list',
    bulletedList: 'bulleted-list',
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify'
}

export type FormatType = typeof Formats;