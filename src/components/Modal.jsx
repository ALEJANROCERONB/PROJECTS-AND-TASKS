import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = forwardRef(function ({ children }, ref) {

    const dialogRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        ref={dialogRef}>
            {children}
            <form method="dialog">
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"> close </button>
            </form>
        </dialog>,

        document.getElementById("modal-root")
    )
})

export default Modal