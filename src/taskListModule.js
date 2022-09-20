// import { createTodoModule } from "./TodoModule"

import { format } from "date-fns";
import { checkIfWithinWeek, formattedDate, returnCurrentDate } from "./date";
import {getProjectsList} from "./projectList";
import { addCompletedClassToTaskElement, setUpTasks } from "./render";
import { Task } from "./taskClass";


let taskList = [];

let currentTask;

let currentTaskAsDOM;

const getCurrentTaskAsDOM = () => {
    return currentTaskAsDOM;
}

const setCurrentTaskAsDOM = (value) => {
    currentTaskAsDOM = value;

}

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

    return getTaskList().find(matchTaskTitle);
}

const  getProjectThatContainsTask = (taskInDOM) => {
    const titleOfTask = taskInDOM.querySelector('.task-title').textContent;
    const findTaskInProjectThatMatches = task => task.title == titleOfTask;
    return getProjectsList().find(project => project.tasksList.find(findTaskInProjectThatMatches));
}

const setTaskToComplete = (task) => {
    task.taskDone = 'complete';
}


// const editTask = (index, newValues) => {
const editTask = (taskInTaskList, newValues) => {
    const toEdit = taskInTaskList;
    toEdit.title = newValues.titleValue;
    toEdit.description = newValues.descValue;
    toEdit.dueDate = newValues.dateValue;
    toEdit.priority = newValues.priorityValue;
}

const getTaskInListFromIndex = (index) => {

    return getTaskList()[index];
}

const deleteTask = (taskIndex) => {
    taskList.splice(taskIndex, 1)
}

const repeatedTaskTitleExists = () => {
    const titleFromForm = document.querySelector('#task-title').value;
    return getTaskList().find((task) => {
        return task.title == titleFromForm;
    })
}

const createNewTask = (formValues) => {
    return new Task(
        formValues.titleValue,
        formValues.descValue, 
        formValues.dateValue,
        formValues.priorityValue,
        'not complete',
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

    return project.tasksList.forEach(findTaskInTaskList);
}

const goThroughTasksAndSetDOMToComplete = () => {
    const completedTasks = (getTaskList().filter(task => {
        return task.taskDone == 'complete';
    }))

    const matchTasksToDOM = (task) => {
        const taskDOMs = Array.from(document.querySelectorAll('.outer-task-div'));

        const matchingDOM = taskDOMs.find(taskDOM => {
            return taskDOM.querySelector('.task-title').textContent == task.title;
        })
        addCompletedClassToTaskElement(matchingDOM);
    }
    completedTasks.forEach(matchTasksToDOM);
}

const getIndexOfTaskInList = (task) => {
    const taskTitle = task.querySelector('.task-title').textContent;
    const matchTask = (taskInList) => {
        return taskInList.title == taskTitle;
    }
    const currentTask = getTaskList().find(matchTask);
    return getTaskList().indexOf(currentTask);
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

const getDOMElementFromTask = () => {


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

    findTaskAndDelete,
    getIndexOfTaskInList,

    repeatedTaskTitleExists,

    getCurrentTaskAsDOM,
    setCurrentTaskAsDOM,
    setTaskToComplete,

    goThroughTasksAndSetDOMToComplete,

};