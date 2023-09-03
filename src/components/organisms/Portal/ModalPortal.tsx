import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from 'react-redux';
import styles from './modalportal.module.scss';
import { changeModal } from "../../../redux/slices/contentEntries";

const defaultReactPortalProps = {
    wrapperId: "react-portal"
}

type ReactPortalProps = {
    children: ReactNode,
    wrapperId: string
} & typeof defaultReactPortalProps;

export const ModalPortal = ({ children, wrapperId }: ReactPortalProps) => {

    const dispatch = useDispatch();

    const modalOverlay = () => {
        return <div className={styles['modal-overlay']} onClick={() => dispatch(changeModal(false))} >
            {children}
        </div>
    }

    return createPortal(modalOverlay(), document.getElementById('root-modal-container')!);

}