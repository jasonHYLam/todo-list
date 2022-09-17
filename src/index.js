
import {returnTaskFormValues, returnProjectFormValue, isFormComplete, returnEditTaskFormValues, formNotExist, populateFormForTaskToBeEdited} from "./forms";
import {addToTaskList, deleteTask, getTaskList, createNewTask, addToProject, editTask, checkDoneOnTask, getTaskInTaskList, getDailyTasks, getWeeklyTasks, getProjectThatContainsTask, setCurrentTask, getCurrentTask, findTaskAndDelete, getIndexOfTaskInList, repeatedTaskTitleExists, setCurrentTaskAsDOM, getCurrentTaskAsDOM} from "./taskListModule";
import {getCurrentProject, getCurrentProjectTasks, setCurrentProject, createNewProject, addNewProjectToList, deleteProject, getProjectsList, editTaskInProject, deleteTaskInProject, findProjectSelectMatch, checkIfCurrentProjectMatchesProjectSelectValue, getProjectInProjectListFromDOM, checkTasksInCurrentProject, getCurrentProjectInProjectArray, getIndexOfTaskInProject} from "./projectList";
import {renderTaskContainer, setUpTasks, renderFormForTaskToBeEdited, renderProjectContainer, setUpProjects, renderProjectForm, renderProjectInMainDisplay, renderTaskDetailsContainer, toggleTaskDetailsDisplay, showPopup, hideTaskFormContainer, renderGeneralTaskForm, getIsInboxOrProject, setIsInboxOrProject, renderProjectTitle, setColorOfProjectInSidebar} from "./render";
import {populateStorage, projectsExistInStorage, setProjectListFromLocalStorage, setListsFromLocalStorage, projectArrayInStorage, taskArrayInStorage } from "./storage";
import "./style.css"
import "./popup.css"
import "./form.css"
import { setCurrentTaskForSettingPriorityColor, setPriorityColor, setPriorityColorOfCurrentTask, setPriorityOfCurrentTask } from "./changingHTMLElement";

let isInboxOrDailyOrWeeklyOrProject;
let editOrAdd;

const addTodoButton = document.getElementById('add-todo-button');

addTodoButton.addEventListener('click', (e) => {
    if (formNotExist()) {
        editOrAdd = 'add';
        // renderTaskForm();
        renderGeneralTaskForm('new');
    }
})

//click on submit todo button
document.addEventListener('click', (e)=> {
    if (e.target.id == 'submit-todo-button') {

        let currentForm = returnTaskFormValues();
        if (isFormComplete(currentForm)) {

            if (repeatedTaskTitleExists()) {
                console.log('you utter dolt');
                showPopup();
            } else {


                setPriorityOfCurrentTask();

                if (editOrAdd == 'add') {
                    const newTask = createNewTask(currentForm);
                    addToTaskList(newTask);
                    addToProject(newTask, findProjectSelectMatch());
                    setCurrentTaskForSettingPriorityColor(newTask);

                } else if (editOrAdd == 'edit') {
                    let task = getCurrentTaskAsDOM();
                    const clonedTask = {...getTaskInTaskList(task)};
                    editTask(getTaskInTaskList(task),returnTaskFormValues());
                    editTaskInProject(getCurrentProjectInProjectArray(),returnTaskFormValues(), clonedTask);

                    if (checkIfCurrentProjectMatchesProjectSelectValue()) {
                    } else {
                        deleteTaskInProject(getCurrentProject(), getIndexOfTaskInProject(task));
                        setCurrentProject(findProjectSelectMatch());
                        addToProject(getCurrentTask(), getCurrentProject());
                    }; 
                    setCurrentTaskForSettingPriorityColor(getCurrentTask());
                }
                populateStorage();
                setCurrentProject(findProjectSelectMatch());

                switch(getIsInboxOrProject()) {
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
                setPriorityColorOfCurrentTask();
                hideTaskFormContainer();
                }
        }
    } 
})

//click on remove buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button-for-task')) {
        let task = event.target.parentNode.previousSibling;

        console.log('okay peko');
        setCurrentProject(getProjectThatContainsTask(task));
        deleteTask(getIndexOfTaskInList(task));
        deleteTaskInProject(getCurrentProjectInProjectArray(), getIndexOfTaskInProject(task));
        console.log(getCurrentProject());

        switch(getIsInboxOrProject()) {
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
        let task = event.target.parentNode.previousSibling;
        console.log(task);

        editOrAdd = 'edit';
        setCurrentTaskAsDOM(task);
        setCurrentProject(getProjectThatContainsTask(task));
        setCurrentTask(getTaskInTaskList(task));

        renderGeneralTaskForm('edit');
        populateFormForTaskToBeEdited(task, getCurrentTask());
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


        setIsInboxOrProject('project');
        // let project = event.target.parentNode;
        let project = event.target.closest('.project-div');
        console.log(project)
        let projectIndex = Array.from(project.parentNode.children).indexOf(project);
        // renderProjectInMainDisplay(projectIndex);
        console.log('what seems to be the prob');
        setCurrentProject(getProjectsList()[projectIndex]);
        setUpTasks(getProjectsList()[projectIndex].tasksList)
        setColorOfProjectInSidebar(project);
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
        setIsInboxOrProject('inbox');
        setUpTasks(getTaskList());
        setColorOfProjectInSidebar(event.target);
    }
})

//click on daily
document.addEventListener('click', function(event) {
    if (event.target.id == 'daily') {
        // isInboxOrDailyOrWeeklyOrProject = 'daily';
        setIsInboxOrProject('daily');
        setUpTasks(getDailyTasks());
        setColorOfProjectInSidebar(event.target);
    }
})

//click on weekly
document.addEventListener('click', function(event) {
    if (event.target.id == 'weekly') {
        setIsInboxOrProject('weekly');
        getWeeklyTasks();
        setColorOfProjectInSidebar(event.target);
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
        console.log(projectIndex)
        deleteProject(projectIndex);
        setUpProjects(getProjectsList());
        populateStorage();
    }
})

//click on task
document.addEventListener('click', (e) => {
    const taskDiv = e.target.closest('.task-div')
    const outerTaskDiv = taskDiv.parentNode;
    if (taskDiv) {
        toggleTaskDetailsDisplay(outerTaskDiv);
    } else {
    }
})

//click on mark complete button 
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('mark-complete-button')) {
        console.log(e.target.parentNode.parentNode)
    }
})


// on page load
renderTaskContainer();
setIsInboxOrProject('inbox');
if (!projectsExistInStorage()) {
    const defaultProject = createNewProject('default');
    addNewProjectToList(defaultProject);
    setCurrentProject(defaultProject);
    populateStorage();

} else {
    setListsFromLocalStorage();
}
// renderProjectTitle();
setUpTasks(getTaskList());
// renderProjectContainer();
setUpProjects(getProjectsList());

// localStorage.clear();