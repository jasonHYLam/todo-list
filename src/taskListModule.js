// import { createTodoModule } from "./TodoModule"

import { format } from "date-fns";
import { checkIfWithinWeek, formattedDate, returnCurrentDate } from "./date";
import {getProjectsList} from "./projectList";
import { setUpTasks } from "./render";
import { Task } from "./taskClass";


let taskList = [];

let currentTask;

const getCurrentTask = () => {
    return currentTask;
}

const setCurrentTask = (value) => {
    currentTask = value;

}

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

const  getProjectThatContainsTask = (taskInDOM) => {
    const titleOfTask = taskInDOM.querySelector('.task-title').textContent;
    const findTaskInProjectThatMatches = task => task.title == titleOfTask;
    return getProjectsList().find(project => project.tasksList.find(findTaskInProjectThatMatches));
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

const getTasksInAllTasksThatMatchProjectTaskList = (project) => {

    const findTaskInTaskList = (taskInProject) => {
        getTaskList().find((taskInTaskList) => taskInTaskList.title == taskInProject.title);
    }

    //for each task in a project's task list
    return project.tasksList.forEach(findTaskInTaskList);

    //get the corresponding task in the task list, by matching 
    //by finding the first task that matches in taskList
}

const getIndexOfTaskInList = (task) => {


}

const findTaskAndDelete = (project) => {
    for (const task of project.tasksList) {
        const taskToDelete = getTaskList().find((taskInTaskList) => taskInTaskList.title == task.title)
        const indexOfTaskToDelete = getTaskList().indexOf(taskToDelete);
        deleteTask(indexOfTaskToDelete);
    }
}

const getDailyTasks = () => {
    const isTaskDaily = (task) => {
        return task.dueDate == formattedDate;
        // return task.dueDate == returnCurrentDate();
    }
    return getTaskList().filter(isTaskDaily)
}

const getWeeklyTasks = () => {
    setUpTasks(getTaskList().filter(checkIfWithinWeek))
    }


export {

    getCurrentTask,
    setCurrentTask,

    addToTaskList, 
    getTaskList, 
    deleteTask, 
    editTask, 
    createNewTask, 
    addToProject,
    checkDoneOnTask,

    getTasksInAllTasksThatMatchProjectTaskList,
    setTaskList,

    getTaskInTaskList,
    getProjectThatContainsTask,

    getDailyTasks,
    getWeeklyTasks,

    findTaskAndDelete
};