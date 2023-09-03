import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { fetchContentAction, resolveContentAction } from '../../../redux/sagas';
import { useParams } from 'react-router-dom';
import styles from './editor.module.scss';
import { Descendant } from 'slate'
import RichTextExample from './TextEditor';
import { EditorContent } from '../../../types';
import { saveInDB } from './utils';

let initialValue: Descendant[] = [
    {
        type: "paragraph",
        children: [
            { text: '' }
        ]
    }
]

export const Editor = (props: any) => {

    const { contentId } = useParams()

    const dispatch = useDispatch();

    useEffect(() => {
        if (contentId)
            dispatch(fetchContentAction(contentId));
    }, [dispatch, contentId])

    const content = useSelector((state: RootState) => state.content);

    const handleResolveContent = useCallback((value: Descendant[]) => {
        const newContent: EditorContent = {
            contentId: content.content?.contentId!,
            title: content.content?.title!,
            children: value
        }
        dispatch(resolveContentAction(newContent))
    }, [content.content?.contentId, content.content?.title, dispatch])


    const renderContent = () => {
        let newInitialValue = initialValue;
        if (content.content?.children) {
            newInitialValue = content.content.children;
        }
        return (
            <>
                <RichTextExample initialContent={newInitialValue}
                    updateContent={(value: Descendant[]) =>
                        handleContentUpdate(value, content.content?.contentId, content.content?.title)}
                    resolveContent={(value: Descendant[]) =>
                        handleResolveContent(value)}
                ></RichTextExample>
            </>
        )
    }

    return <div className={styles['editor-container']}>
        {content.isLoading ? <div>Loading...</div>
            : content.isError ? <div>Error</div>
                : <div className={styles['editor']}>{renderContent()}</div>}
    </div>
}

const handleContentUpdate = (value: Descendant[], contentId: string | undefined, title: string | undefined) => {
    if (value && contentId && title) {
        const newRequest: EditorContent = {
            contentId: contentId,
            title: title,
            children: value
        }
        saveInDB(newRequest);
    }
}

