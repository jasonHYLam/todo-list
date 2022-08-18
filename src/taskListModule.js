// import { createTodoModule } from "./TodoModule"

import { Task } from "./taskClass";


let taskList = [];

const addToTaskList = (task) => {
    taskList.push(task);
}

const getTaskList = () => {
    return taskList;
}

const editTask = (index, newTitle, newDesc, newDueDate) => {

    const toEdit = getTaskIndexInList(index);
    
    toEdit.title = newTitle;
    toEdit.description = newDesc;
    toEdit.dueDate = newDueDate;
}

const getTaskIndexInList = (index) => {
    return getTaskList()[index];

}

const deleteTask = (taskIndex) => {
    taskList.splice(taskIndex, 1)
}

const createNewTask = (formValues) => {
    return new Task(formValues.titleValue, formValues.descValue, formValues.dueDateValue);
} 

export {addToTaskList, getTaskList, deleteTask, editTask, createNewTask};