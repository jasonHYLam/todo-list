import { createTodoModule } from "./TodoModule";

import {displayTodoForm, returnFormValues} from "./displayModule";

import {addToList, todoListModule} from "./todoListModule";

createTodoModule();

const addTodoButton = document.getElementById('add-todo-button');

const submitTodoButton = document.getElementById('submit-todo-button');
addTodoButton.addEventListener('click', (e) => {
    displayTodoForm();
})

//click on submit todo button
document.addEventListener('click', (e)=> {
    console.log(e.target);
    if (e.target.id != 'submit-todo-button') {
        return;}
})

addToList();