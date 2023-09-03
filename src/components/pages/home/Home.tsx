import React from 'react';
import { Editor } from '../../organisms/editor/Editor';
import { SidePanel } from '../../organisms/Sidepanel/Sidepanel';
import styles from '../home/Home.module.scss';
import { Outlet } from "react-router-dom";

export const Home = () => {

    return <div className={styles['home-container']}>
        <div className={styles['side-panel-container']}>
            <SidePanel></SidePanel>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
}