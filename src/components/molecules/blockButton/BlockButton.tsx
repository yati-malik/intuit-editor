import React from 'react';
import { AlignTypes, EditorElementType } from '../../../types/editor';
import { Button } from '../../atoms/Button';
import { useSlate } from 'slate-react'
import { isBlockActive, toggleBlock } from '../../organisms/editor/utils';
import { Icon } from '../../atoms/MarkIcons';
import { TEXT_ALIGN_TYPES } from '../../../constants/contants';

export const BlockButton = ({ format, icon }: { format: EditorElementType | AlignTypes, icon: string }) => {
    const editor = useSlate()
    return (
        <Button
            active={isBlockActive(
                editor,
                format,
                TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
            )}
            onMouseDown={(event: any) => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
}

