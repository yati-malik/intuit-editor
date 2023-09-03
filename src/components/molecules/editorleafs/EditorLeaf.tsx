import React, { ReactNode } from 'react';
import { SlateEditor } from '../../../types/editor';

export const EditorLeaf = ({ attributes, children, leaf, editor }: { attributes: any, children: ReactNode, leaf: any, editor: SlateEditor }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    if (leaf.pattern) {
        children = <span>{children}</span>
    }

    return <span {...attributes}>{children}</span>
}