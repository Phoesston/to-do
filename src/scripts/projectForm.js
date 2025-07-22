export function projectForm(){
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2>Create New Project</h2>`;

    const modalWindow = document.querySelector('.modal-form');
    modalWindow.innerHTML = `
        <div class="project-name">
            <label class="add-project-label" for="projectName">Project Name</label>
            <input type="text" class="add-project-input" placeholder="ProjectName">
        </div>

        <div class="Project-description">
            <label for="ProjectDescription" class="add-project-label">Project Description</label>
            <textarea name="description" id="Project-description" placeholder="ProjectDescription"></textarea>
        </div>
    `;
}