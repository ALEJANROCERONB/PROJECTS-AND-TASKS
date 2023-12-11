import { useRef, useState } from "react"
import Modal from "./Modal"

export default function NewProject({ onSave, onCancel }) {
    const modalRef = useRef()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")

    function saveData() {
        if(
            title.trim() === "" ||
            description.trim() === "" ||
            date.trim() === ""
        ){
            modalRef.current.open()
            return
        }

        onSave(title, description, date)

        setDate("")
        setDescription("")
        setTitle("")
    }
    
    return (
        <>
        <Modal ref={modalRef}>
            <h2 className="text-xl font-bold text-stone-500 my-4"> Invalid Input</h2>
            <p className="text-stone-400 mb-4"> Ups </p>
            <p className="text-stone-400 mb-4"> revisa que colocastetodos los valores validos</p>

        </Modal>
        <div className="w-[35rem] mt-16 ">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={onCancel} className="text-stone-800 hover:text-stone-950"> cancel </button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={saveData}> save </button>
                </li>
            </menu>
            <p className="flex flex-col gap-1 my-4">
                <label className="text-sm font-bold uppercase text-stone-500"> TITLE </label>
                <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus-border-stone-600"
                    values={title} onChange={(event) => setTitle(event.currentTarget.value)} />
            </p>
            <p>
                <label className="text-sm font-bold uppercase text-stone-500"> DESCRIPTION </label>
                <textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus-border-stone-600" value={description} onChange={(event) => setDescription(event.currentTarget.value)} />
            </p>
            <p>
                <label className="text-sm font-bold uppercase text-stone-500"> DUE DATE </label>
                <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus-border-stone-600"
                    type="date" value={date} onChange={(event) => setDate(event.currentTarget.value)} />
            </p>
        </div>
        </>
    )
}