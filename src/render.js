import { formattedDate } from "./date";
import { populateFormForNewTask } from "./forms";
import { getCurrentProject, getProjectsList } from "./projectList";
import { getTaskInTaskList } from "./taskListModule";


const wrapper = document.getElementById('wrapper');
const mainDisplay = document.getElementById('main-display');
const sidebar = document.getElementById('sidebar');
const projectTitle = document.getElementById('project-title');
const projectTitleInSidebar = document.getElementById('project-title-in-sidebar');
const addProjectButton = document.getElementById('add-project-in-sidebar');
const projectContainer = document.getElementById('project-container');

let isInboxOrProject;

const getIsInboxOrProject = () => {
    return isInboxOrProject;
}

const setIsInboxOrProject = (value) => {
    isInboxOrProject = value;
}



const renderGeneralTaskForm = (newOrEdit) => {
    const outerTaskFormContainer = document.createElement('div');
    outerTaskFormContainer.id = 'outer-task-form-container';

    wrapper.appendChild(outerTaskFormContainer);

    const taskFormContainer = document.createElement('div');
    outerTaskFormContainer.appendChild(taskFormContainer);
    taskFormContainer.id = 'task-form-container';

    const formHeader = document.createElement('h1');
    formHeader.id = 'form-header';
    // formHeader.textContent = 'add new task';

    const belowHeader = document.createElement('div');
    belowHeader.id = 'form-below-header';

    taskFormContainer.appendChild(formHeader);
    taskFormContainer.appendChild(belowHeader);

    const todoForm = document.createElement('form');
    todoForm.id = 'task-form';

    belowHeader.appendChild(todoForm);


    const todoFormLeft = document.createElement('div');
    const todoFormRight = document.createElement('div');
    todoForm.appendChild(todoFormLeft);
    todoForm.appendChild(todoFormRight);

    todoFormLeft.id = 'todoFormLeft';
    todoFormRight.id = 'todoFormRight';


    const titleTitle = document.createElement('p');
    titleTitle.textContent = 'title';
    const titleInput = document.createElement('input');
    titleInput.id = 'task-title';

    const descTitle = document.createElement('p');
    descTitle.textContent = 'description';
    const descInput = document.createElement('input');
    descInput.id = 'task-desc';

    todoFormLeft.appendChild(titleTitle);
    todoFormLeft.appendChild(titleInput);

    todoFormLeft.appendChild(descTitle);
    todoFormLeft.appendChild(descInput);


    const dateTitle = document.createElement('p');
    dateTitle.textContent = 'date';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type','date');
    dateInput.id = 'due-date';
    
    //priority select list    
    const priorityTitle = document.createElement('p');
    priorityTitle.textContent = 'priority';
    const selectList = document.createElement('select')
    selectList.id = "priority-select";

    const highOption = document.createElement('option');
    highOption.textContent = 'high';

    const medOption = document.createElement('option');
    medOption.textContent = 'med';
    
    const lowOption = document.createElement('option');
    lowOption.textContent = 'low';

    selectList.appendChild(highOption);
    selectList.appendChild(medOption);
    selectList.appendChild(lowOption);

    const projectTitle = document.createElement('p');
    projectTitle.textContent = 'project';
    const projectToSendTo = document.createElement('select');
    projectToSendTo.id = 'project-select';
    for (const project of getProjectsList()) {
        const projectTitle = document.createElement('option');
        projectTitle.textContent = project.title;
        projectToSendTo.appendChild(projectTitle);
    }

    if (newOrEdit == 'new') {
        populateFormForNewTask();
    } else if (newOrEdit == 'edit') {
        // renderFormForTaskToBeEdited();
    }

    todoFormRight.appendChild(dateTitle);
    todoFormRight.appendChild(dateInput);
    todoFormRight.appendChild(priorityTitle);
    todoFormRight.appendChild(selectList);
    todoFormRight.appendChild(projectTitle);
    todoFormRight.appendChild(projectToSendTo);


    const submitTodoButton = document.createElement('button');
    submitTodoButton.setAttribute('type', 'button');
    submitTodoButton.id = 'submit-todo-button';
    submitTodoButton.textContent = 'add';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'x';

    todoForm.appendChild(submitTodoButton);
    todoForm.appendChild(cancelButton);
}

const hideTaskFormContainer = () => {
    
    const outerTaskFormContainer = document.querySelector('#outer-task-form-container');
    if (outerTaskFormContainer) {
        wrapper.removeChild(outerTaskFormContainer);
    }
}

const renderTaskContainer = () => {
    const taskContainer = document.createElement('div');
    taskContainer.id = 'task-container';

    mainDisplay.appendChild(taskContainer);
}

const setUpTasks = (taskArray) => {
    takeDownRenderedTasksOrProjects('tasks');
    renderTasks(taskArray);
    // console.log(getCurrentProject().title);
    renderProjectTitle();
}

const takeDownRenderedTasksOrProjects = (tasksOrProjects) => {
    let container;
    if (tasksOrProjects == 'tasks') {
        container = document.getElementById('task-container');
    } else if (tasksOrProjects == 'projects') {
        container = document.getElementById('project-container');
    }
    while (container.lastChild) {
        container.removeChild(container.lastElementChild);
    }
}

const renderTasks = (taskArray) => {
    for (const task of taskArray) {
        const outerTaskDiv = document.createElement('div');
        outerTaskDiv.className = 'outer-task-div';

        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-div';

        outerTaskDiv.appendChild(taskDiv);

        const taskDivLeft = document.createElement('div');
        const taskDivRight = document.createElement('div');
        taskDivLeft.className = 'task-div-left';
        taskDivRight.className = 'task-div-right';

        taskDiv.appendChild(taskDivLeft);
        taskDiv.appendChild(taskDivRight);

        renderTaskText(task, taskDivRight);
        sendToContainer(outerTaskDiv);
        renderTaskDetailsContainer(task, outerTaskDiv);
    }
}

const renderTasksAndTitle = () => {
    renderTasks()
}

const renderTaskText = (task, taskDiv) => {
    for (const [key, value] of Object.entries(task)) {
        if (key == 'title') {
            const taskPropdiv = document.createElement('div');
            taskPropdiv.textContent = value;
            taskPropdiv.className = 'task-title';
            taskDiv.appendChild(taskPropdiv);
        }
    }
}

const renderTaskClickables = (taskDiv) => {
    //done checkbox
    const markCompleteButtonInTask = document.createElement('button');
    markCompleteButtonInTask.classList.add('task-button');
    markCompleteButtonInTask.classList.add('mark-complete-button');
    markCompleteButtonInTask.textContent = 'mark as complete';

    //buttons
    const editButtonInTask = document.createElement('button');
    editButtonInTask.classList.add('task-button');
    editButtonInTask.classList.add('edit-button-for-task');
    editButtonInTask.textContent = 'edit';

    const deleteButtonInTask = document.createElement('button');
    deleteButtonInTask.classList.add('task-button');
    deleteButtonInTask.classList.add('delete-button-for-task');
    deleteButtonInTask.textContent = 'delete';

    taskDiv.appendChild(markCompleteButtonInTask);
    taskDiv.appendChild(editButtonInTask);
    taskDiv.appendChild(deleteButtonInTask);
}

const renderTaskDetailsContainer = (task, outerTaskDiv) => {
    const taskDetailsContainer = document.createElement('div');
    taskDetailsContainer.className = 'task-details-container';

    const taskDetailsContainerAbove = document.createElement('div');
    const taskDetailsContainerLeft = document.createElement('div');
    const taskDetailsContainerRight = document.createElement('div');
    taskDetailsContainerAbove.appendChild(taskDetailsContainerLeft);
    taskDetailsContainerAbove.appendChild(taskDetailsContainerRight);
    const taskDetailsContainerBottom = document.createElement('div');

    taskDetailsContainerAbove.className = 'task-details-container-above';
    taskDetailsContainerLeft.className = 'task-details-container-left';
    taskDetailsContainerRight.className = 'task-details-container-right';
    taskDetailsContainerBottom.className = 'task-details-container-bottom';

    taskDetailsContainer.appendChild(taskDetailsContainerAbove);

    taskDetailsContainer.appendChild(taskDetailsContainerBottom);

    const title = document.createElement('div');
    const description = document.createElement('div');
    const dueDate = document.createElement('div');
    const priority = document.createElement('div');

    taskDetailsContainerLeft.appendChild(title);
    taskDetailsContainerLeft.appendChild(description);
    taskDetailsContainerRight.appendChild(dueDate);
    taskDetailsContainerRight.appendChild(priority);

    title.className = 'task-title';
    description.className = 'task-description';
    dueDate.className = 'task-dueDate';
    priority.className = 'task-priority';

    title.textContent = task.title;
    description.textContent = task.description;
    dueDate.textContent = task.dueDate;
    priority.textContent = task.priority;

    renderTaskClickables(taskDetailsContainerBottom);

    taskDetailsContainer.style.display = 'none';
    outerTaskDiv.appendChild(taskDetailsContainer);
}

const showPopup = () => {
    const popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

const sendToContainer = (taskDiv) => {
    const taskContainer = document.getElementById('task-container');
    taskContainer.appendChild(taskDiv);
}

const setUpProjects = (projectArray) => {

    takeDownRenderedTasksOrProjects('projects');

    const projectContainer = document.querySelector('#project-container');
    //for each project in a array of projects
    for (const project of projectArray) {

        //create a container
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-div';

        //populate with the project's data

        //project title
        const projectTitle = document.createElement('p');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.title;

        projectDiv.appendChild(projectTitle);

        const deleteProject = document.createElement('div');
        deleteProject.className = 'delete-project-button';
        deleteProject.textContent = 'x';

        projectDiv.appendChild(deleteProject);

        const taskList = document.createElement('div');

        //add project to project container
        projectContainer.appendChild(projectDiv);
        
    }
}

const renderProjectForm = () => {

    const projectForm = document.createElement('div');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('placeholder', 'project: ')
    titleInput.id = 'project-title';

    const addButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    addButton.id = 'submit-new-project-button';
    cancelButton.id = 'cancel-button';

    addButton.textContent = 'add';
    cancelButton.textContent = 'x';

    projectForm.appendChild(titleInput);
    projectForm.appendChild(addButton);
    projectForm.appendChild(cancelButton);



    sidebar.appendChild(projectForm);

}

const renderProjectInMainDisplay = (index) => {
    removeFromTaskContainer();
    let currentProject = getProjectsList()[index];
    renderTasks(currentProject.tasksList);
}


const removeFromTaskContainer = () => {
    const taskContainer = document.getElementById('task-container');
    while (taskContainer.lastChild) {
        taskContainer.removeChild(taskContainer.lastChild);
    }
}


const toggleTaskDetailsDisplay = (taskDiv) => {

    const taskDetailsContainer = taskDiv.querySelector('.task-details-container');

    if (taskDetailsContainer.style.display === 'none') {
        taskDetailsContainer.style.display = 'grid';
    } else {
        taskDetailsContainer.style.display = 'none';
    }
}

const renderProjectTitle = () => {
    switch (isInboxOrProject) {
        case 'inbox':
            projectTitle.textContent = 'inbox';
            break;
        case 'daily':
            projectTitle.textContent = 'daily';
            break;
        case 'weekly':
            projectTitle.textContent = 'weekly';
            break;
        case 'project':
            console.log(getCurrentProject().title);
            projectTitle.textContent = getCurrentProject().title;
            break;
    }
}

const setColorOfProjectInSidebar = (project) => {
    const homeInSideBar = document.querySelectorAll('.home-in-sidebar');
    const projectsInSidebar = document.querySelectorAll('.project-div');

    homeInSideBar.forEach(elementUnderHomeInSidebar => {
        elementUnderHomeInSidebar.classList.remove('current-clicked-project');
    })
    
    projectsInSidebar.forEach(elementUnderHomeInSidebar => {
        elementUnderHomeInSidebar.classList.remove('current-clicked-project');
    })

    project.classList.add('current-clicked-project');
}



export {
    renderTaskContainer,
    setUpTasks,
    // renderProjectContainer,
    setUpProjects,

    renderProjectForm,
    renderProjectInMainDisplay,
    renderTaskDetailsContainer,
    toggleTaskDetailsDisplay,

    showPopup,
    hideTaskFormContainer,

    renderGeneralTaskForm,

    getIsInboxOrProject,
    setIsInboxOrProject,
    renderProjectTitle,

    setColorOfProjectInSidebar,
}