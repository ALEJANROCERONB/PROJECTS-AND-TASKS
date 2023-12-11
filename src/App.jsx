import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";



function App() {
  const [projects, setProjects] = useState([])
  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  function onSave(title, description, date) {
    const tasks = []
    let project = { title, description, date, tasks }
    setProjects((oldprojects) => [...oldprojects, project])
  }

  function onDelete(projectToDelete) {
    setProjects((oldprojects) => oldprojects.filter((project) => project !== projectToDelete))
    setSelectedProject(null)
  }

  let content = null
  if (selectedProject) {
    content = <SelectedProject
      setProjects={setProjects}
      deleteProject={(project) => onDelete(project)} 
      project={selectedProject} />
  } else {
    content = isCreatingNewProject ? <NewProject onCancel={() => setIsCreatingNewProject(false)} onSave={onSave} /> : <NoProjectSelected onCreate={() => setIsCreatingNewProject(true)} />
  }

  return (
    <div className="flex h-screen my-8 gap-8">
      <Sidebar onSelect={(project) => setSelectedProject(project)} onCreate={() => setIsCreatingNewProject(true)} projects={projects} />
      {content}
    </div>
  );
}

export default App;
