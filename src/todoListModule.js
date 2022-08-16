// import { createTodoModule } from "./TodoModule"

import { ToDo } from "./todoClass";

const testTodo = new ToDo("walk", "til me feet hurt", "tomorrow");
let todoList = [];

const addToList = () => {
    console.log(testTodo);
    return testTodo;
    todoList.push();
}

export {addToList};