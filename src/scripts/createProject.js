import { Project } from "./project";
import { renderProjectList } from "./render";

export const allProjects = [];

export function createProject(){
    
    const name = document.getElementById('project-name-input')?.value.trim();
    const description = document.getElementById('project-description-input')?.value.trim();

    if(!name) return;

    const newProject = new Project(name);
    newProject.description = description;
    allProjects.push(newProject);

    renderProjectList();
    console.log('new project added: ',newProject);

}