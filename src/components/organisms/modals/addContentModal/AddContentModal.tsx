import React, { ChangeEvent, useState } from 'react';
import { ModalPortal } from '../../Portal/ModalPortal';
import styles from './addcontentmodal.module.scss';
import { ContentButton } from '../../../atoms/contentButton/ContentButton';

type ModalProps = {
    isOpen: boolean,
    onSubmit: (title: string) => void
}

export const AddContentModal = ({ isOpen, onSubmit }: ModalProps) => {


    const [title, setTitle] = useState<string>('');

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }


    if (!isOpen) return null;

    return (

        <ModalPortal wrapperId="add-content-modal-container">
            <div className={styles['modal']} onClick={(event) => { event.preventDefault(); event.stopPropagation(); }}>
                <div className="">
                    <h3 className="modal__modal-title">Add Content</h3>
                </div>
                <div className={styles['modal-body']}>
                    <div>Title</div>
                    <input className={styles['input-text']} type='text' value={title} onChange={handleTitleChange} placeholder='Enter title of the content'></input>
                </div>
                <div className={styles['btn-container']} onClick={() => onSubmit(title)}>
                    <ContentButton text='Add Content'></ContentButton>
                </div>
            </div>
        </ModalPortal>
    );
}
