import imagen from "../assets/no-projects.png"

export default function NoProjectSelected({ onCreate }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img
                className="w-16 h-16 object-contain mx-auto"
                src={imagen} alt="noproject" />
            <h1 className="text-xl font-bold text-stone-500 my-4">
                No Project Selected
            </h1>
            <p className="text-stone-400 mb-4"> Select a project or get started with new one </p>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={onCreate}> Create a new Project </button>
        </div>
    )
}