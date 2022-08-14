import { createToDo } from "./createToDo";
import {displayTodoForm} from "./displayForm";

createToDo();

const addTodoButton = document.getElementById('add-todo-button');
console.log(addTodoButton);

addTodoButton.addEventListener('click', (e) => {

    displayTodoForm();
})