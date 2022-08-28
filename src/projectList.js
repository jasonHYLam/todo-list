import {Project} from "./projectClass";
import {returnProjectSelectValue} from "./forms.js";

let projectsList = [];

let currentProject;

const getCurrentProject = () => {
    return currentProject;
}

const getCurrentProjectTasks = () => {
    return currentProject.tasksList;
}

const setCurrentProject = (project) => {
    currentProject = project;
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

const editProject = () => {

}

const editTaskInProject = (project, taskToBeEdited, newTitle, newDesc, newDueDate, newPriority) => {
    const projectTasks = project.tasksList;

    console.log('just gonna check this')
    console.log(taskToBeEdited);

    const isTaskMatching = (taskInProject) => {
        return taskInProject == taskToBeEdited ;
    } 
    const matchingTask = projectTasks.find(isTaskMatching);
    
    matchingTask.title = newTitle;
    matchingTask.description = newDesc;
    matchingTask.dueDate = newDueDate;
    matchingTask.priority = newPriority;
}

const deleteTaskInProject = (project, taskIndex) => {
    project.tasksList.splice(taskIndex, 1);
}

const deleteProject = (index) => {
    projectsList.splice(index, 1);
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

const changeCurrentProject = (project) => {
    setCurrentProject(project);
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
 }
 ;
