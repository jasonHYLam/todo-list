// import { createTodoModule } from "./TodoModule"

import { ToDo } from "./todoClass";


let todoList = [];

const addToList = (todo) => {
    todoList.push(todo);
}

const getTodoList = () => {
    return todoList;
}

export {addToList, getTodoList};