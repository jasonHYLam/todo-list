import {displayTodoForm, returnFormValues} from "./displayModule";
import {addToList, getTodoList, todoListModule} from "./todoListModule";
import {ToDo} from "./todoClass";


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

const testTodo1 = new ToDo("walk", "til me feet hurt", "tomorrow");
const testTodo2 = new ToDo("fish", "catch 50", "tomorrow");
const testTodo3 = new ToDo("sing", "for the queen", "tomorrow");
const testTodo4 = new ToDo("play", "the donkey game", "tomorrow");

addToList(testTodo1);
addToList(testTodo2);
addToList(testTodo3);
addToList(testTodo4);

console.log(getTodoList());

