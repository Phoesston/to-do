import { createProject } from "./createProject";
import { projectForm } from "./projectForm";

import { taskForm } from "./taskForm";
import { createTask } from "./createTask";

import { selectedIndex } from "./render";

export function modal(){
    const addProjectButton = document.getElementById('add-project');
    const addTaskButton = document.getElementById('add-task');

    const submitButton = document.getElementById("submit-button");
    const cancelButton = document.getElementById("cancel-button");

    const modalWindow = document.getElementById('modal');
    const overlay = document.getElementById('overlay');

    addProjectButton.addEventListener("click", () => {
        modalWindow.classList.add('active');
        overlay.classList.add('active');
        projectForm();

        submitButton.onclick = () => {
             createProject();

            modalWindow.classList.remove('active');
            overlay.classList.remove('active');
        };
        
    });

    addTaskButton.addEventListener("click", () =>{
        modalWindow.classList.add('active');
        overlay.classList.add('active');
        taskForm();

        submitButton.onclick = () => {
            createTask(selectedIndex);
            modalWindow.classList.remove('active');
            overlay.classList.remove('active');
        };
        
    });

  

    cancelButton.addEventListener("click", () => {
        modalWindow.classList.remove('active');
        overlay.classList.remove('active');
    });
}