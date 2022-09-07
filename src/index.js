
import {returnTaskFormValues, returnProjectFormValue, isFormComplete, returnEditTaskFormValues} from "./forms";
import {addToTaskList, deleteTask, getTaskList, createNewTask, addToProject, editTask, checkDoneOnTask, getTasksInAllTasksThatMatchProjectTaskList, getTaskInTaskList, getDailyTasks, getWeeklyTasks, getTaskInProject, getProjectThatContainsTask, setCurrentTask, getCurrentTask} from "./taskListModule";
import {Task} from "./taskClass";
import {checkInProjectArray,  setProjectList, getCurrentProject, getCurrentProjectTasks, setCurrentProject, createNewProject, addNewProjectToList, deleteProject, getProjectsList, editTaskInProject, deleteTaskInProject, findProjectSelectMatch, checkIfCurrentProjectMatchesProjectSelectValue, getProjectInProjectListFromDOM, checkTasksInCurrentProject, getCurrentProjectInProjectArray, getIndexOfTaskInProject} from "./projectList";
import {renderTaskForm, renderTaskContainer, setUpTasks, renderFormForTaskToBeEdited, renderProjectContainer, setUpProjects, renderProjectForm, renderProjectInMainDisplay} from "./render";
import { storageAvailable, populateStorage, projectsExistInStorage, setProjectListFromLocalStorage, tasksExistInStorage, setListsFromLocalStorage } from "./storage";
import "./style.css"
import { checkIfWithinWeek, isDateValid } from "./date";
import { isDate } from "date-fns";

let indexOfTaskToBeEdited;

let currentTaskData;

const addTodoButton = document.getElementById('add-todo-button');
addTodoButton.addEventListener('click', (e) => {
    renderTaskForm();
})

//click on submit todo button
document.addEventListener('click', (e)=> {
    if (e.target.id == 'submit-todo-button') {

        let currentForm = returnTaskFormValues();
        if (isFormComplete(currentForm)) {

            setListsFromLocalStorage();
            const newTask = createNewTask(currentForm);
            addToTaskList(newTask);
            addToProject(newTask, findProjectSelectMatch());

            setUpTasks(getCurrentProjectTasks());

            populateStorage();
        }
    } 
})

//click on remove buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button-for-task')) {
        let task = event.target.parentNode;
        let indexOfTaskToBeRemoved = Array.from(task.parentNode.children).indexOf(task);

        // checkInProjectArray();

        setListsFromLocalStorage();
        deleteTask(indexOfTaskToBeRemoved);

        deleteTaskInProject(getCurrentProjectInProjectArray(), indexOfTaskToBeRemoved);

        setUpTasks(getCurrentProjectTasks());

        checkTasksInCurrentProject(getCurrentProject());
        populateStorage();

        console.log('oh okay remove?');
        console.log(getTaskList());
    }
})

//click on edit buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-button-for-task')) {
        let task = event.target.parentNode;
        
        setCurrentProject(getProjectThatContainsTask(task));
        setCurrentTask(getTaskInTaskList(task));
        renderFormForTaskToBeEdited(task, getCurrentTask());
    }
})

//click on submit edit task
document.addEventListener('click', function(event) {
    if (event.target.id == 'submit-edit-todo-button') {
        let task = event.target.parentNode.parentNode;

        // indexOfTaskToBeEdited = Array.from(task.parentNode.children).indexOf(task);

        // indexOfTaskToBeEdited = getCurrentProject().tasksList.find(getIndexOfTaskInProject);
        // indexOfTaskToBeEdited = getIndexOfTaskInProject(task);
        getIndexOfTaskInProject(task);
        console.log('ok');

        editTask(getTaskInTaskList(task), returnEditTaskFormValues());
        editTaskInProject(getCurrentProjectInProjectArray(), returnEditTaskFormValues());
        if (checkIfCurrentProjectMatchesProjectSelectValue()) {

        } else {
            deleteTaskInProject(getCurrentProject(), indexOfTaskToBeEdited);
            setCurrentProject(findProjectSelectMatch());
            addToProject(currentTaskData, getCurrentProject());
        }; 

        populateStorage();
        setUpTasks(getCurrentProjectTasks());
    }
})

//open project form
document.addEventListener('click', function(event) {
    if (event.target.id == 'add-project-in-sidebar') {
        renderProjectForm();
    }
})

//submit new project
document.addEventListener('click', function(event) {
    if (event.target.id == 'submit-new-project-button') {

        let currentProjectValues = returnProjectFormValue();
        if (isFormComplete(currentProjectValues)) {
            const newProject = createNewProject(currentProjectValues);
            addNewProjectToList(newProject);
            setUpProjects(getProjectsList());
            populateStorage();
        }
    }
})


//click on project in sidebar
document.addEventListener('click', function(event) {
    if (event.target.classList.contains("project-title")) {
        let project = event.target.parentNode;
        let projectIndex = Array.from(project.parentNode.children).indexOf(project);
        renderProjectInMainDisplay(projectIndex);

        setCurrentProject(getProjectsList()[projectIndex]);
    }
})

//click on done checkbox
document.addEventListener('click', function(event) {
    if (event.target.className == 'done-check-box') {
        let task = event.target.parentNode
        let indexOfTask = Array.from(task.parentNode.children).indexOf(task);
        let taskInProject = getCurrentProject().tasksList[indexOfTask];
        checkDoneOnTask(taskInProject);
    }
})

//click on inbox
document.addEventListener('click', function(event) {
    if (event.target.id == 'inbox') {
        setUpTasks(getTaskList());
    }
})

//click on daily
document.addEventListener('click', function(event) {
    if (event.target.id == 'daily') {
        setUpTasks(getDailyTasks());
    }
})

//click on weekly
document.addEventListener('click', function(event) {
    if (event.target.id == 'weekly') {

        // isDateValid(getTaskList()[0].dueDate);
        getWeeklyTasks();
    }
})

//click on x next to projects
document.addEventListener('click', function(event) {
    if (event.target.className == 'delete-project-button') {
        const task = event.target.previousElementSibling;
        const taskName = task.textContent;

        const projectToDeleteTasks = getProjectInProjectListFromDOM(taskName);

        console.log('this should be it...')
        getTasksInAllTasksThatMatchProjectTaskList(projectToDeleteTasks);

        deleteProject();
    }

})


// on page load


renderTaskContainer();


setListsFromLocalStorage();


if (!projectsExistInStorage()) {
    const inbox = createNewProject('inbox');
    addNewProjectToList(inbox);
    setCurrentProject(inbox);
} else {
   setProjectListFromLocalStorage();
   setCurrentProject(getProjectsList()[0]);
}


setUpTasks(getCurrentProject().tasksList);

renderProjectContainer();

setUpProjects(getProjectsList());

// if (storageAvailable()) {
//     console.log('what a triumph')
// } else {
//     console.log('terrible earth')
// }