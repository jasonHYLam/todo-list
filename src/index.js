import { createToDo } from "./createToDo";
import {displayTodoForm} from "./displayForm";

createToDo();

const addTodoButton = document.getElementById('add-todo-button');
console.log(addTodoButton);

const submitTodoButton = document.getElementById('submit-todo-button');
addTodoButton.addEventListener('click', (e) => {
    displayTodoForm();
})

//click on submit todo button
document.addEventListener('click', (e)=> {
    console.log(e.target);
    if (e.target.id != 'submit-todo-button') {
        return;}

    console.log('hehe clicj');
})