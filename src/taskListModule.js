// import { createTodoModule } from "./TodoModule"

import {getProjectsList} from "./projectList";
import { Task } from "./taskClass";


let taskList = [];

const addToTaskList = (task) => {
    taskList.push(task);
}

const getTaskList = () => {
    return taskList;
}

const setTaskList = (newTaskList) => {
    taskList = newTaskList;
}


const getTaskInTaskList = (task) => {

    const titleOfTask = (task.querySelector('.task-title').textContent);

    const matchTaskTitle = (taskInTaskList) => {
        return taskInTaskList.title == titleOfTask;
    }

    console.log(getTaskList().find(matchTaskTitle));
    return getTaskList().find(matchTaskTitle);
}

// const editTask = (index, newValues) => {
const editTask = (taskInTaskList, newValues) => {
    const toEdit = taskInTaskList;
    toEdit.title = newValues.newTitle;
    toEdit.description = newValues.newDesc;
    toEdit.dueDate = newValues.newDueDate;
    toEdit.priority = newValues.newPriority;
}

const getTaskInListFromIndex = (index) => {

    return getTaskList()[index];
}

const deleteTask = (taskIndex) => {
    taskList.splice(taskIndex, 1)
}

const createNewTask = (formValues) => {
    return new Task(
        formValues.titleValue,
        formValues.descValue, 
        formValues.dateValue,
        formValues.priorityValue,
        formValues.taskDoneValue,
        );
} 

const checkAvailableProjects = () => {
    console.log(getProjectsList());
}

const chooseProjectToBeAddedTo = (index) => {
    return getProjectsList()[index];
}

const addToProject = (task, projectToBeAddedTo) => {
    projectToBeAddedTo.tasksList.push(task);
}

const checkDoneOnTask = (task) => {
    task.taskDone = 'yes';
    console.log(task);

}

const getProjectsInAllTasksThatMatchProjectTaskList = (project) => {

    console.log(getTaskList());
    console.log('hehe pinf');
    
    console.log(
        getTaskList().filter((element) => {
            !project.tasksList.includes(element)
        })
    )

    // setTaskList(getTaskList().filter((element) => {
    //     !project.includes(element)
    // }))

}
export {
    addToTaskList, 
    getTaskList, 
    deleteTask, 
    editTask, 
    createNewTask, 
    addToProject,
    checkDoneOnTask,

    getProjectsInAllTasksThatMatchProjectTaskList,
    setTaskList,
    getTaskInTaskList,

};