import React from 'react';
import { useSlate } from 'slate-react';
import { Fomat, SlateEditor } from '../../../types/editor';
import { Icon } from '../../atoms/MarkIcons';
import { isMarkActive, toggleMark } from '../../organisms/Editor/utils';
import { Button } from '../../atoms/Button';


export const MarkButton = ({ format, icon }: { format: Fomat, icon: string }) => {
    const editor: SlateEditor = useSlate()
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