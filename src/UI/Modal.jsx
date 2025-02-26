import { useEffect } from "react";
import { useRef } from "react"
import { createPortal } from "react-dom"


export default function Modal({ children, onClose, open, className = '' }) {
    const dialog = useRef();

    useEffect(() => {

        const modal = dialog.current;
        if (open) {
            modal.showModal();
        }
        //  else {
        //     dialog.current.close();
        // }

        return () => modal.close();
        // clean up function
    }, [open])

    return createPortal(
        <dialog ref={dialog} onClose={onClose} className={`modal ${className}`}>{children}</dialog>,
        document.getElementById('modal')
    );
}