import React from 'react';
import { Icon } from '../../atoms/MarkIcons';
import styles from './custombutton.module.scss';

interface SavePropTypes {
    handleAction: () => void;
    icon: string;
}

export const CustomButton = ({ handleAction, icon }: SavePropTypes) => {
    return (
        <span className={styles['save-btn']} onClick={() => handleAction}>
            <Icon>{icon}</Icon>
        </span>
    )
}