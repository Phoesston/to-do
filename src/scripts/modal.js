import { createProject } from "./createProject";
import { projectForm } from "./projectForm";

export function modal(){
    const addProjectButton = document.getElementById('add-project');
    const submitButton = document.getElementById("submit-button");
    const cancelButton = document.getElementById("cancel-button");

    const modalWindow = document.getElementById('modal');
    const overlay = document.getElementById('overlay');

    addProjectButton.addEventListener("click", () => {
        modalWindow.classList.add('active');
        overlay.classList.add('active');
        projectForm();
        
    });

    submitButton.addEventListener("click", () => {
        createProject();

        modalWindow.classList.remove('active');
        overlay.classList.remove('active');
    });

    cancelButton.addEventListener("click", () => {
        modalWindow.classList.remove('active');
        overlay.classList.remove('active');
    });
}