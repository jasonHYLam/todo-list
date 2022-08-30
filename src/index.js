
import {returnTaskFormValues, returnProjectFormValue, isFormComplete} from "./forms";
import {addToTaskList, deleteTask, getTaskList, createNewTask, addToProject, editTask, checkDoneOnTask} from "./taskListModule";
import {Task} from "./taskClass";
import { Project } from "./projectClass";
import { getCurrentProject, getCurrentProjectTasks, setCurrentProject, createNewProject, addNewProjectToList, deleteProject, getProjectsList, editTaskInProject, deleteTaskInProject, findProjectSelectMatch, checkIfCurrentProjectMatchesProjectSelectValue} from "./projectList";
import {renderTaskForm, renderTaskContainer, setUpTasks, renderFormForTaskToBeEdited, renderProjectContainer, setUpProjects, renderProjectForm, renderProjectInMainDisplay} from "./render";
import "./style.css"
import {format, compareAsc} from "date-fns"


let indexOfTaskToBeEdited;

let currentTaskData;

const addTodoButton = document.getElementById('add-todo-button');
addTodoButton.addEventListener('click', (e) => {
    renderTaskForm();
})

//click on submit todo button
document.addEventListener('click', (e)=> {
    if (e.target.id == 'submit-todo-button') {


        console.log('this is the date value ha ha ha');
        const dateValue = document.getElementById('due-date').value;
        console.log(dateValue);

        let currentForm = returnTaskFormValues();
        if (isFormComplete(currentForm)) {
            const newTask = createNewTask(currentForm);
            addToTaskList(newTask);

            addToProject(newTask, findProjectSelectMatch());

            setUpTasks(getCurrentProjectTasks());
        }
    } 
})

//click on remove buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button-for-task')) {
        let task = event.target.parentNode;
        let indexOfTaskToBeRemoved = Array.from(task.parentNode.children).indexOf(task);

       deleteTask(indexOfTaskToBeRemoved);
       deleteTaskInProject(getCurrentProject(), indexOfTaskToBeRemoved);
       setUpTasks(getCurrentProjectTasks());
    }
})

//click on edit buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-button-for-task')) {
        let task = event.target.parentNode;
        
        indexOfTaskToBeEdited = Array.from(task.parentNode.children).indexOf(task);
        let currentTasks = getCurrentProjectTasks();
        currentTaskData = currentTasks[indexOfTaskToBeEdited];
        renderFormForTaskToBeEdited(task, currentTaskData);
    }
})

//click on submit edit task
document.addEventListener('click', function(event) {
    if (event.target.id == 'submit-edit-todo-button') {
        let task = event.target.parentNode.parentNode;

        let newTitle = document.querySelector('#edit-task-title').value;
        let newDesc = document.querySelector('#edit-task-desc').value;
        let newDueDate = document.querySelector('#edit-task-due-date').value;
        let newPriority = document.querySelector('#edit-task-priority').value;

        indexOfTaskToBeEdited = Array.from(task.parentNode.children).indexOf(task);



        editTask(
            indexOfTaskToBeEdited,
            newTitle,
            newDesc,
            newDueDate,
            newPriority,
            );


        editTaskInProject(
            getCurrentProject(), 
            currentTaskData, 
            newTitle, 
            newDesc, 
            newDueDate, 
            newPriority
            );

        if (checkIfCurrentProjectMatchesProjectSelectValue()) {
            return
        } else {
            deleteTaskInProject(getCurrentProject(), indexOfTaskToBeEdited);
            setCurrentProject(findProjectSelectMatch());
            addToProject(currentTaskData, getCurrentProject());
        }; 

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



// on page load


renderTaskContainer();

const inbox = createNewProject('inbox');
addNewProjectToList(inbox);

setCurrentProject(inbox);

const project1 = createNewProject('the great reckoning');
addNewProjectToList(project1);

const testTodo1 = new Task("walk", "til me feet hurt", "tomorrow", "high");
const testTodo2 = new Task("fish", "catch 50", "tomorrow", "low");
const testTodo3 = new Task("sing", "for the queen", "tomorrow","chicalo");
const testTodo4 = new Task("play", "the donkey game", "tomorrow","mcdonalds");

addToTaskList(testTodo1);
addToTaskList(testTodo2);
addToTaskList(testTodo3);
addToTaskList(testTodo4);

project1.addTasktoProject(getTaskList()[0]);
project1.addTasktoProject(getTaskList()[1]);
project1.addTasktoProject(getTaskList()[2]);

inbox.addTasktoProject(getTaskList()[0]);
inbox.addTasktoProject(getTaskList()[1]);
inbox.addTasktoProject(getTaskList()[2]);
inbox.addTasktoProject(getTaskList()[3]);

// setUpTasks(getTaskList());
console.log(inbox);
setUpTasks(getCurrentProject().tasksList);

renderProjectContainer();

setUpProjects(getProjectsList());

console.log(
format(new Date(2022, 9, 9), 'MM/dd//yyyy')

);