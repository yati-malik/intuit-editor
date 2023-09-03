import { ReactNode, useState, useLayoutEffect } from "react";
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

    const [wrapper, setWrapper] = useState<Element | null>(null);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let created = false;
        if (!element) {
            created = true;
            const wrapper = document.createElement('div');
            wrapper.setAttribute("id", wrapperId);
            document.body.appendChild(wrapper);
            element = wrapper;
        }
        setWrapper(element);
        return () => {
            if (created && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }, [wrapperId]);

    const modalOverlay = () => {
        return <div className={styles['modal-overlay']} onClick={() => dispatch(changeModal(false))} >
            {children}
        </div>
    }

    if (wrapper === null) return null;

    return createPortal(modalOverlay(), wrapper);

}