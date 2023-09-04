import React, { ReactNode } from 'react';

export const EditorLeaf = ({ attributes, children, leaf }: { attributes: any, children: ReactNode, leaf: any }) => {
    if (leaf.bold) {
        children = <strong data-testid='e-bold'>{children}</strong>
    }

    if (leaf.italic) {
        children = <em data-testid='e-em'>{children}</em>
    }

    if (leaf.underline) {
        children = <u data-testid='e-um'>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}