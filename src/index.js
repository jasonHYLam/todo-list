
import {returnTaskFormValues, returnProjectFormValue, isFormComplete, returnEditTaskFormValues} from "./forms";
import {addToTaskList, deleteTask, getTaskList, createNewTask, addToProject, editTask, checkDoneOnTask, getTaskInTaskList, getDailyTasks, getWeeklyTasks, getProjectThatContainsTask, setCurrentTask, getCurrentTask, findTaskAndDelete, getIndexOfTaskInList} from "./taskListModule";
import {getCurrentProject, getCurrentProjectTasks, setCurrentProject, createNewProject, addNewProjectToList, deleteProject, getProjectsList, editTaskInProject, deleteTaskInProject, findProjectSelectMatch, checkIfCurrentProjectMatchesProjectSelectValue, getProjectInProjectListFromDOM, checkTasksInCurrentProject, getCurrentProjectInProjectArray, getIndexOfTaskInProject} from "./projectList";
import {renderTaskForm, renderTaskContainer, setUpTasks, renderFormForTaskToBeEdited, renderProjectContainer, setUpProjects, renderProjectForm, renderProjectInMainDisplay, renderTaskDetailsContainer, toggleTaskDetailsDisplay} from "./render";
import {populateStorage, projectsExistInStorage, setProjectListFromLocalStorage, setListsFromLocalStorage } from "./storage";
import "./style.css"
import { setPriorityColor } from "./changingHTMLElement";

let isInboxOrDailyOrWeeklyOrProject;

const addTodoButton = document.getElementById('add-todo-button');
addTodoButton.addEventListener('click', (e) => {
    renderTaskForm();
})

//click on submit todo button
document.addEventListener('click', (e)=> {
    if (e.target.id == 'submit-todo-button') {

        let currentForm = returnTaskFormValues();
        if (isFormComplete(currentForm)) {

            const newTask = createNewTask(currentForm);
            addToTaskList(newTask);
            addToProject(newTask, findProjectSelectMatch());

            setPriorityColor(newTask);

            setCurrentProject(findProjectSelectMatch());

            switch(isInboxOrDailyOrWeeklyOrProject) {
                case 'inbox':
                    setUpTasks(getTaskList());
                    break;
                case 'daily':
                    setUpTasks(getDailyTasks());
                    break;
                case 'weekly':
                    setUpTasks(getWeeklyTasks());
                    break;
                case 'project':
                    setUpTasks(getCurrentProjectTasks());
            }
            populateStorage();
        }
    } 
})

//click on remove buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button-for-task')) {
        let task = event.target.parentNode;

        console.log('okay peko');
        setCurrentProject(getProjectThatContainsTask(task));
        deleteTask(getIndexOfTaskInList(task));
        deleteTaskInProject(getCurrentProjectInProjectArray(), getIndexOfTaskInProject(task));
        console.log(getCurrentProject());

        switch(isInboxOrDailyOrWeeklyOrProject) {
            case 'inbox':
                setUpTasks(getTaskList());
                break;
            case 'daily':
                setUpTasks(getDailyTasks());
                break;
            case 'weekly':
                setUpTasks(getWeeklyTasks());
                break;
            case 'project':
                setUpTasks(getCurrentProjectTasks());
        }

        checkTasksInCurrentProject(getCurrentProject());
        populateStorage();
    }
})

//click on edit buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-button-for-task')) {
        let task = event.target.parentNode;
        setPriorityColor(getTaskInTaskList(task));
        
        setCurrentProject(getProjectThatContainsTask(task));
        setCurrentTask(getTaskInTaskList(task));
        renderFormForTaskToBeEdited(task, getCurrentTask());
    }
})

//click on submit edit task
document.addEventListener('click', function(event) {
    if (event.target.id == 'submit-edit-todo-button') {
        let task = event.target.parentNode.parentNode;
        

        editTask(getTaskInTaskList(task), returnEditTaskFormValues());
        editTaskInProject(getCurrentProjectInProjectArray(), returnEditTaskFormValues(), getCurrentTask());

        if (checkIfCurrentProjectMatchesProjectSelectValue()) {

        } else {
            deleteTaskInProject(getCurrentProject(), getIndexOfTaskInProject(task));
            setCurrentProject(findProjectSelectMatch());
            addToProject(getCurrentTask(), getCurrentProject());
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
        isInboxOrDailyOrWeeklyOrProject = 'project';
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
        isInboxOrDailyOrWeeklyOrProject = 'inbox';
        setUpTasks(getTaskList());
    }
})

//click on daily
document.addEventListener('click', function(event) {
    if (event.target.id == 'daily') {
        isInboxOrDailyOrWeeklyOrProject = 'daily';
        setUpTasks(getDailyTasks());
    }
})

//click on weekly
document.addEventListener('click', function(event) {
    if (event.target.id == 'weekly') {
        isInboxOrDailyOrWeeklyOrProject = 'weekly';
        getWeeklyTasks();
    }
})

//click on x next to projects
document.addEventListener('click', function(event) {
    if (event.target.className == 'delete-project-button') {
        const project = event.target.parentNode;
        const projectNameValue = project.querySelector('.project-title').textContent;
        const projectIndex = Array.from(project.parentNode.children).indexOf(project);
        const projectToDeleteTasks = getProjectInProjectListFromDOM(projectNameValue);

        findTaskAndDelete(projectToDeleteTasks);
        deleteProject(projectIndex);
        setUpProjects(getProjectsList());
        populateStorage();
    }
})

document.addEventListener('click', (e) => {
    const taskDiv = e.target.closest('.outer-task-div')
    console.log(taskDiv)
    if (taskDiv) {
        toggleTaskDetailsDisplay(taskDiv);

    }
})


// on page load
renderTaskContainer();
setListsFromLocalStorage();

if (!projectsExistInStorage()) {
    const defaultProject = createNewProject('default');
    addNewProjectToList(defaultProject);
    setCurrentProject(defaultProject);
} else {
   setProjectListFromLocalStorage();
   setUpTasks(getTaskList());
}
renderProjectContainer();
setUpProjects(getProjectsList());