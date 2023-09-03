import React from 'react';
import { useSlate } from 'slate-react';
import { MarkFormatTypes, SlateEditor } from '../../../types/editor';
import { Icon } from '../../atoms/MarkIcons';
import { isMarkActive, toggleMark } from '../../organisms/editor/utils';
import { Button } from '../../atoms/Button';


export const MarkButton = ({ format, icon }: { format: MarkFormatTypes, icon: string }) => {
    const editor: SlateEditor = useSlate();
    return (
        <Button
            active={isMarkActive(editor, format)}
            onMouseDown={(event: any) => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
}