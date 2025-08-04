export function taskForm(){
    const modalHeader = document.querySelector('.modal-header');
    modalHeader.innerHTML = `
        <h2>Add New Task</h2>`;

    const modalWindow = document.querySelector('.modal-form');
    modalWindow.innerHTML = `
        <div class="project-name">
            <label class="task-title" for="task-title">Title</label>
            <input type="text" id="task-input" class="task-input" placeholder="taskTitle">
        </div>

         <div class="project-desc">
            <label class="task-desc" for="task-desc">Description</label>
            <textarea id="task-desc" placeholder="Description..."></textarea>
        </div>

        <div class="project-due">
            <label class="task-due" for="task-due">Due Date</label>
            <input type="date" id="task-due" class="task-due">
        </div>

        <div class="project-priority">
            <label for="task-priority">Priority</label>
            <select id="task-priority">
                <option value="low">Low</option>
                <option value="normal" selected>Normal</option>
                <option value="high">High</option>
            </select>
        </div>


    `;
}