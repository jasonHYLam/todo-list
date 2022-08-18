/* 
add tasks to projects


delete project

edit project
*/
import {Project} from "./projectClass";

projectsList = [];

const getProjectsList = () => {
    return projectsList;
}

const createNewProject = (title) => {
    const newProject = new Project(title);
}

const addNewProjectToList = (newProject) => {
    projectsList.push(newProject);
} 

const deleteProject = (index) => {

    projectsList.splice(index, 1);
}

export {createNewProject, addNewProjectToList, deleteProject};