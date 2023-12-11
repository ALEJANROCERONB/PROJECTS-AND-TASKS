

export default function Sidebar({ projects = [], onCreate, onSelect }) {

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200"> YOUR PROJECTS </h1>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={onCreate}> +Add Project  </button>
            <ol>
                {projects.map((project) => {
                    return <li key={project.title}>
                        <button onClick={()=>onSelect(project)} className="w-full text-left px-2 py-1 round">
                            {project.title}
                        </button>
                    </li>
                })}
            </ol>
        </aside>
    )
}