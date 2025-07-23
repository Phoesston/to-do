import { allProjects} from "./createProject";

export function renderProjectList(){
    const list = document.getElementById('project-list');
    list.innerHTML = '';

    allProjects.forEach((proj, i) => {
        const item = document.createElement('div');
        item.textContent = `${i + 1}. ${proj.name}`;
        list.appendChild(item);
    });
}