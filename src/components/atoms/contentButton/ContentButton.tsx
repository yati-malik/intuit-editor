import React from 'react';
import styles from './contentbutton.module.scss';

export const ContentButton = ({ text }: { text: string }) => {
    return <div className={styles['content-button']}>
        {text}
    </div>
}