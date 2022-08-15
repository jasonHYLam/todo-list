import { createTodoModule } from "./createTodoModule";
import {displayTodoForm, returnFormValues} from "./displayForm";

createTodoModule();

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

    console.log('hehe ttttttt');
    console.log(returnFormValues());
})