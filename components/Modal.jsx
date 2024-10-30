"use client"

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({children})=>{

    const modalRef = useRef(null)
    const router = useRouter()

    const hideModal=()=>{
    router.back()
    }
    useEffect(()=>{
        if(!modalRef.current?.open){
            modalRef.current.showModal()
        }
    },[])

return createPortal(
    <dialog
        ref={modalRef}
        onClose={hideModal}
        className="shadow-teal-700 shadow-md border border-teal-600  p-2 rounded-md  "
    >
        <span onClick={hideModal}
        className="flex justify-end cursor-pointer"
        >
        <IoCloseSharp />
        </span>
        {children}
    </dialog>,
      document.getElementById("modal-root-content")
)

}

export default Modal