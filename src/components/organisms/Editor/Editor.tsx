import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { fetchContentAction } from '../../../redux/sagas';
import '../../../styles/editor.scss';
import RichTextExample from './RichText';


export const Editor = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContentAction("212"));
    }, [dispatch])

    const content = useSelector((state: RootState) => state.content);


    const renderContent = () => {
        return (
            <>
                <RichTextExample></RichTextExample>
            </>
        )
    }

    return <div className='editor-container'>
        {content.isLoading ? <div>Loading...</div>
            : content.isError ? <div>Error</div>
                : <div className='editor'>{renderContent()}</div>}
    </div>
}
