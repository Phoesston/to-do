import { projectForm } from "./projectForm";

export function modal(){
    const addProjectButton = document.getElementById('addProjectBtn');
    const submitButton = document.getElementById("submit-button");
    const cancelButton = document.getElementById("cancel-button");

    const modalWindow = document.getElementById('modal');

    addProjectButton.addEventListener("click", () => {
        modalWindow.classList.add('active');
        //projectForm();
        
    });

    cancelButton.addEventListener("click", () => {
        modalWindow.classList.remove('active');
    });
}