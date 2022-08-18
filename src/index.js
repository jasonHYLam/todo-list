import {displayTodoForm, returnFormValues, formComplete, isFormComplete} from "./todoForm";
import {addToList, deleteTodo, getTodoList, todoListModule, editTodo} from "./todoListModule";
import {ToDo} from "./todoClass";


const addTodoButton = document.getElementById('add-todo-button');
addTodoButton.addEventListener('click', (e) => {
    displayTodoForm();
})

//click on submit todo button
document.addEventListener('click', (e)=> {
    if (e.target.id == 'submit-todo-button') {

        let currentForm = returnFormValues();
        if (isFormComplete(currentForm)) {
            let newTodo = new ToDo(
                currentForm.titleValue, 
                currentForm.descValue, 
                currentForm.dueDateValue
                );
            addToList(newTodo);
        }
        console.log('adding a new todo :D');
        console.log(getTodoList());

        deleteTodo(2);
        console.log('deleted');
        console.log(getTodoList());

        editTodo(2, "see", "about a girl", "tomr");
        console.log(getTodoList());
    } 
})

const testTodo1 = new ToDo("walk", "til me feet hurt", "tomorrow");
const testTodo2 = new ToDo("fish", "catch 50", "tomorrow");
const testTodo3 = new ToDo("sing", "for the queen", "tomorrow");
const testTodo4 = new ToDo("play", "the donkey game", "tomorrow");

addToList(testTodo1);
addToList(testTodo2);
addToList(testTodo3);
addToList(testTodo4);