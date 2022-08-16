// import { createTodoModule } from "./TodoModule"

import { ToDo } from "./todoClass";


let todoList = [];

const addToList = (todo) => {
    console.log(todo);
    todoList.push(todo);
}

const getTodoList = () => {
    return todoList;
}

export {addToList, getTodoList};