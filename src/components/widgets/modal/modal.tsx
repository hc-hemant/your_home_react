import { PropsWithChildren, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }: PropsWithChildren, ref) => {

    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
        return {
            open() {
                if (dialogRef && dialogRef.current) {
                    dialogRef.current.showModal();
                }
            },
            close() {
                if (dialogRef && dialogRef.current) {
                    dialogRef.current.close();
                }
            }
        }
    });
    
    return createPortal(
        <dialog ref={dialogRef} className="w-2/5 h-4/6 bg-white rounded-xl p-4">
            {children}
        </dialog>,
        document.querySelector('#modal') as Element
    )
})

export default Modal;