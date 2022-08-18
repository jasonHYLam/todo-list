// import { createTodoModule } from "./TodoModule"

import { ToDo } from "./todoClass";


let todoList = [];

const addToList = (todo) => {
    todoList.push(todo);
}

const getTodoList = () => {
    return todoList;
}

const editTodo = (index, newTitle, newDesc, newDueDate) => {

    const toEdit = getTodoIndexInList(index);
    
    toEdit.title = newTitle;
    toEdit.description = newDesc;
    toEdit.dueDate = newDueDate;
}

const getTodoIndexInList = (index) => {
    return getTodoList()[index];

}

const deleteTodo = (todoIndex) => {
    todoList.splice(todoIndex, 1)
}

export {addToList, getTodoList, deleteTodo, editTodo};