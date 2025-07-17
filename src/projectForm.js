export function projectForm(){
    const addButton = document.getElementById("addProjectBtn");
    const formContainer = document.getElementById("add-project-window-container");
    const cancelButton = document.getElementById("add-project-cancel");

    addButton.addEventListener("click", () => {
        formContainer.classList.toggle('show');
    });

    cancelButton.addEventListener("click", () => {
        formContainer.style.display = "none"
    });
}