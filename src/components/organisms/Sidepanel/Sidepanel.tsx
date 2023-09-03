import React, { useCallback, useState } from "react";
import styles from './sidepanel.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../redux/store";
import { IdAndTitle } from "../../../types/editor";
import { Loader } from "../../molecules/loader/Loader";
import { ContentEntriesState, changeModal } from "../../../redux/slices/contentEntries";
import { ContentButton } from "../../atoms/contentButton/ContentButton";
import { AddContentModal } from "../modals/addContentModal/AddContentModal";
import { createContentEntryAction } from "../../../redux/sagas";

export const SidePanel = () => {
    const contents: ContentEntriesState = useSelector((state: RootState) => state.contentEntries);
    const dispatch = useDispatch();

    const handleContentClick = useCallback((title: string) => {
        if (contents.entries) {
            const titleExists = contents.entries.filter((entry) => entry.title === title);
            if (titleExists.length > 0) {
                alert(`${title} title already exits. please select one.`);
                return;
            }
            dispatch(createContentEntryAction(title));
        }
    }, [contents.entries, dispatch])

    const renderContentEntries = () => {
        if (contents.entries && contents.entries.length > 0) {
            return contents.entries.map((contentEntry: IdAndTitle) => {
                return <div key={contentEntry.contentId}>
                    {contentEntry.title}
                </div>
            })
        }
        return null;
    }

    const renderSidePanel = () => {
        if (contents.isLoading) {
            return <Loader></Loader>
        }
        else if (contents.isError) {
            return <div>Something went wrong</div>
        }
        else if (contents.entries) {
            return <div className={styles['content-entries']}>{renderContentEntries()}</div>
        }
    }

    return <div className={styles.sidepanel}>
        <div className={styles['button-container']} onClick={() => dispatch(changeModal(true))}>
            <ContentButton text="Add Content"></ContentButton>
        </div>
        {contents.isModal && <AddContentModal isOpen={contents.isModal} onSubmit={handleContentClick}></AddContentModal>}
        {renderSidePanel()}
    </div>
}