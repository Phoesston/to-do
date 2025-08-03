import { allProjects} from "./createProject";

let selectedIndex = null;

function handleProjectSelection(index, element) {
    const allItems = document.querySelectorAll('.project-item');

    if (selectedIndex === index) {
        // Deselect if same project is clicked again
        element.classList.remove('selected');
        selectedIndex = null;
        console.log('Project deselected');
    } else {
        // Deselect all first
        allItems.forEach(item => item.classList.remove('selected'));

        // Select new one
        element.classList.add('selected');
        selectedIndex = index;
        console.log('Selected project: ', allProjects[index]);
    }
}

export function renderProjectList(){
    const list = document.getElementById('project-list');
    list.innerHTML = '';

    allProjects.forEach((proj, i) => {
        const item = document.createElement('div');
        item.textContent = proj.name;
        item.classList.add('project-item');

        item.addEventListener('click',() => {
            handleProjectSelection(i, item);
        });

        list.appendChild(item);
    });
}