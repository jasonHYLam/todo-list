/* 
add tasks to projects


delete project

edit project
*/
import {Project} from "./projectClass";

let projectsList = [];

const getProjectsList = () => {
    return projectsList;
}

const createNewProject = (title) => {
     return new Project(title);
}

const addNewProjectToList = (newProject) => {
    projectsList.push(newProject);
} 


const deleteProject = (index) => {
    projectsList.splice(index, 1);
}

export {createNewProject, addNewProjectToList, deleteProject, getProjectsList};