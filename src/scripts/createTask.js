import { allProjects } from "./createProject";
import { Todo } from "./todo";

export function createTask(selectedIndex){
    const title = document.getElementById('task-title')?.value.trim();
    const desc = document.getElementById('task-desc')?.value.trim();
    const dueDate = document.getElementById('task-due')?.value;
    const priority = document.getElementById('task-priority')?.value;

    if (!title) return;

    const newTask = new Todo(title, desc, dueDate, priority);
    allProjects[selectedIndex].addTodo(newTask);

    console.log("Task added to project:", allProjects[selectedIndex].name);
    console.log("All tasks:", allProjects[selectedIndex].getTodos());

    console.log('\n📋 All Todos in Project:');
    allProjects[selectedIndex].getTodos().forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.title} | Due: ${todo.dueDate} | Completed: ${todo.completed}`);
    });

}