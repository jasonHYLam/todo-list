
import {displayTaskForm, returnFormValues, formComplete, isFormComplete} from "./taskForm";
import {addToTaskList, deleteTask, getTaskList, editTask, createNewTask, addToProject} from "./taskListModule";
import {Task} from "./taskClass";
import { Project } from "./projectClass";
import { createNewProject, addNewProjectToList, deleteProject, getProjectsList } from "./projectList";
import {renderTaskContainer, setUpTasks} from "./render";
import "./style.css"

const addTodoButton = document.getElementById('add-todo-button');
addTodoButton.addEventListener('click', (e) => {
    displayTaskForm();
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
       console.log(getTaskList());
       setUpTasks(getTaskList());
    }
})

//click on edit buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-button-for-task')) {
        let task = event.target.parentNode;
        let indexOfTaskToBeEdited = Array.from(task.parentNode.children).indexOf(task);

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
