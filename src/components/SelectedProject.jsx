import { useState } from "react";

export default function SelectedProject({ project, deleteProject, setProjects }) {
    const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    })

    const [taskInput, setTaskInput] = useState("");

    const handleCreateTask = () => {
        if (taskInput.trim() !== "") {
            setProjects((oldprojects) => {
                const copyOldProjects = [...oldprojects]
                const projectIndex = oldprojects.findIndex((p) => p.title === project.title)
                copyOldProjects[projectIndex].tasks = [...copyOldProjects[projectIndex].tasks, taskInput]

                return copyOldProjects
            })
            setTaskInput("");
        }
    }




    function handleClearClick(taskToDelete){
        setProjects((oldprojects)=> 
        {
            const copyOldProjects = [...oldprojects]
            const projectIndex = oldprojects.findIndex((p) => p.title === project.title)
            copyOldProjects[projectIndex].tasks = copyOldProjects[projectIndex].tasks.filter((task)=> task !==  taskToDelete)
        return copyOldProjects
        }
        )
    }

    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2"> {project.title} </h1>
                <button className="text-stone-600 hover:text-stone-950" onClick={() => deleteProject(project)}>Delete </button>
            </div>
            <p className="mb-4 text-stone-400"> {formattedDate} </p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
        <h1 className="text-2xl font--bold text-stone-700 mb-4"> Tasks </h1>
        <div className="flex items-center gap-4">
            <input
                className="w-64 px-2 py-1 tounded-sm bg-stone-200"
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.currentTarget.value)}
            />

            <button
                className="text-stone-700 hover:text-stone-950"
                onClick={handleCreateTask}> Add Task </button>

        </div>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {project.tasks.map((task) => {
                return <li key={task} className="flex justify-between my-4">
                    <span onClick={() => { }}> </span>
                    {task}
                    <button onClick={()=>handleClearClick(task)} className="text-stone-700 hover:text-red-500"> Clear </button>
                </li>
            })}
        </ul>
    </div>
}