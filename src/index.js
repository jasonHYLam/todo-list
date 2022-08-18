
import {displayTaskForm, returnFormValues, formComplete, isFormComplete} from "./taskForm";
import {addToTaskList, deleteTask, getTaskList, editTask, createNewTask} from "./taskListModule";
import {Task} from "./taskClass";
import { Project } from "./projectClass";
import { createNewProject, addNewProjectToList, deleteProject } from "./projectList";

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
        }
        console.log('adding a new todo :D');
        console.log(getTaskList());

        // deleteTask(2);
        // console.log('deleted');
        // console.log(getTaskList());

        editTask(2, "see", "about a girl", "tomr");
        console.log(getTaskList());
    } 
})


// on page load

const project1 = createNewProject('the great reckoning');
console.log(project1);


const testTodo1 = new Task("walk", "til me feet hurt", "tomorrow");
const testTodo2 = new Task("fish", "catch 50", "tomorrow");
const testTodo3 = new Task("sing", "for the queen", "tomorrow");
const testTodo4 = new Task("play", "the donkey game", "tomorrow");

addToTaskList(testTodo1);
addToTaskList(testTodo2);
addToTaskList(testTodo3);
addToTaskList(testTodo4);