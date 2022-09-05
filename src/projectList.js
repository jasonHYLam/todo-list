import {Project} from "./projectClass";
import {returnProjectSelectValue} from "./forms.js";
import { getTaskList } from "./taskListModule";

let projectsList = [];

let currentProject;

const getCurrentProject = () => {
    return currentProject;
}

const getCurrentProjectTasks = () => {
    // return currentProject.tasksList;
    return getCurrentProjectInProjectArray().tasksList;

}

const setCurrentProject = (project) => {
    currentProject = project;
}

const setProjectList = (value) => {
    projectsList = value;
}

const getProjectsList = () => {
    return projectsList;
}

const createNewProject = (title) => {
     return new Project(title);
}

const addNewProjectToList = (newProject) => {
    projectsList.push(newProject);
} 


// const editTaskInProject = (project, taskToBeEdited, newTitle, newDesc, newDueDate, newPriority) => {
const editTaskInProject = (project, taskToBeEdited, newValues) => {

    const projectTasks = project.tasksList;

    const isTaskMatching = (taskInProject) => {
        return taskInProject == taskToBeEdited ;
    } 
    const matchingTask = projectTasks.find(isTaskMatching);
    
    matchingTask.title = newValues.newTitle;
    matchingTask.description = newValues.newDesc;
    matchingTask.dueDate = newValues.newDueDate;
    matchingTask.priority = newValues.newPriority;
}

const deleteTaskInProject = (project, taskIndex) => {
    project.tasksList.splice(taskIndex, 1);
}

const deleteProject = (index) => {
    projectsList.splice(index, 1);
}

const getCurrentProjectInProjectArray = () => {

    const getProjectInArrayThatMatchesCurrentProject = (projectFromArray) => {
        return projectFromArray.title == getCurrentProject().title;
    }
    console.log(getProjectsList().find(getProjectInArrayThatMatchesCurrentProject));
    return getProjectsList().find(getProjectInArrayThatMatchesCurrentProject);
}

const findProjectSelectMatch = () => {

    const doesProjectMatch = (projectInList) => {
        return projectInList.title == returnProjectSelectValue();
    }
    return getProjectsList().find(doesProjectMatch);
}

const checkIfCurrentProjectMatchesProjectSelectValue = () => {

    if (currentProject.title == returnProjectSelectValue()) {
        return true;
    } else {
        return false;
    }

}

const getProjectInProjectListFromDOM = (domValue) => {
    const doesProjectMatch = (projectInList) => {
        return projectInList.title == domValue;
    }

    return getProjectsList().find(doesProjectMatch)
}


const changeCurrentProject = (project) => {
    setCurrentProject(project);
}

const checkInProjectArray = () => {
    console.log('checking projects');
    for (const project of getProjectsList()) {
        console.log(project.title);
        for (const task of project.tasksList) {
            console.log(task);
        }
    }
}

const checkTasksInCurrentProject = (project) => {
    for (const task of project.tasksList) {
        console.log(task);
    }
}

export {
    getCurrentProject,
    getCurrentProjectTasks,
    setCurrentProject,

    createNewProject, 
    addNewProjectToList, 
    deleteProject, 
    getProjectsList,
    editTaskInProject,
    deleteTaskInProject,

    findProjectSelectMatch,
    checkIfCurrentProjectMatchesProjectSelectValue,

    setProjectList,

    checkInProjectArray,
    checkTasksInCurrentProject,

    getProjectInProjectListFromDOM,
    getCurrentProjectInProjectArray,
 }
 ;
