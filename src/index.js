
import {returnFormValues, formComplete, isFormComplete} from "./taskForm";
import {addToTaskList, deleteTask, getTaskList, createNewTask, addToProject, editTask} from "./taskListModule";
import {Task} from "./taskClass";
import { Project } from "./projectClass";
import { createNewProject, addNewProjectToList, deleteProject, getProjectsList } from "./projectList";
import {renderTaskForm, renderTaskContainer, setUpTasks, renderFormForTaskToBeEdited, renderProjectContainer, setUpProjects} from "./render";
import "./style.css"

const addTodoButton = document.getElementById('add-todo-button');
addTodoButton.addEventListener('click', (e) => {
    renderTaskForm();
})

//click on submit todo button
document.addEventListener('click', (e)=> {
    if (e.target.id == 'submit-todo-button') {

        let currentForm = returnFormValues();
        if (isFormComplete(currentForm)) {
            const newTask = createNewTask(currentForm);
            addToTaskList(newTask);
            setUpTasks(getTaskList());
        }
    } 
})

//click on remove buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button-for-task')) {
        let task = event.target.parentNode;
        let indexOfTaskToBeRemoved = Array.from(task.parentNode.children).indexOf(task);

       deleteTask(indexOfTaskToBeRemoved);
       setUpTasks(getTaskList());
    }
})

//click on edit buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-button-for-task')) {
        let task = event.target.parentNode;

        let indexOfTaskToBeEdited = Array.from(task.parentNode.children).indexOf(task);
        let taskData = getTaskList()[indexOfTaskToBeEdited];

        console.log('skooma');
        console.log(getTaskList());

        renderFormForTaskToBeEdited(task, taskData);
    }
})

document.addEventListener('click', function(event) {
    if (event.target.id == 'submit-edit-todo-button') {
        console.log('faster than i fall');
        let task = event.target.parentNode.parentNode;

        let newTitle = document.querySelector('#edit-task-title').value;
        let newDesc = document.querySelector('#edit-task-desc').value;
        let newDueDate = document.querySelector('#edit-task-due-date').value;

        
        let indexOfTaskToBeEdited = Array.from(task.parentNode.children).indexOf(task);
        editTask(
            indexOfTaskToBeEdited,
            newTitle,
            newDesc,
            newDueDate
            );
        setUpTasks(getTaskList());

    }
})
// on page load

renderTaskContainer();

const project1 = createNewProject('the great reckoning');
addNewProjectToList(project1);

const testTodo1 = new Task("walk", "til me feet hurt", "tomorrow");
const testTodo2 = new Task("fish", "catch 50", "tomorrow");
const testTodo3 = new Task("sing", "for the queen", "tomorrow");
const testTodo4 = new Task("play", "the donkey game", "tomorrow");

addToTaskList(testTodo1);
addToTaskList(testTodo2);
addToTaskList(testTodo3);
addToTaskList(testTodo4);

project1.addTasktoProject(getTaskList()[1]);

addToProject(testTodo1, 0);

setUpTasks(getTaskList());

renderProjectContainer();

setUpProjects(getProjectsList());