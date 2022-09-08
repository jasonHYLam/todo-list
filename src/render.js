import { formattedDate } from "./date";
import { getProjectsList } from "./projectList";


const wrapper = document.getElementById('wrapper');

const mainDisplay = document.getElementById('main-display');

const sidebar = document.getElementById('sidebar');


const renderTaskForm = () => {

    const mainDisplay = document.getElementById('main-display');

    const taskFormContainer = document.createElement('div');
    taskFormContainer.id = 'task-form-container';

    const todoForm = document.createElement('form');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('placeholder', 'task: ')
    titleInput.id = 'task-title';

    const descInput = document.createElement('input');
    descInput.setAttribute('placeholder', 'description: ')
    descInput.id = 'task-desc';

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type','date');
    // dateInput.value = formattedDate;
    dateInput.id = 'due-date';
    
    //priority select list    
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

    const projectToSendTo = document.createElement('select');
    projectToSendTo.id = 'project-select';
    for (const project of getProjectsList()) {
        const projectTitle = document.createElement('option');
        projectTitle.textContent = project.title;
        projectToSendTo.appendChild(projectTitle);
    }


    const submitTodoButton = document.createElement('button');
    submitTodoButton.setAttribute('type', 'button');
    submitTodoButton.id = 'submit-todo-button';
    submitTodoButton.textContent = 'add';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'x';


    todoForm.appendChild(titleInput);
    todoForm.appendChild(descInput);
    todoForm.appendChild(dateInput);
    todoForm.appendChild(selectList);
    todoForm.appendChild(projectToSendTo);
    todoForm.appendChild(submitTodoButton);
    todoForm.appendChild(cancelButton);

    // wrapper.appendChild(todoForm);
    taskFormContainer.appendChild(todoForm);
    wrapper.appendChild(taskFormContainer);

}

const renderTaskContainer = () => {
    const taskContainer = document.createElement('div');
    taskContainer.id = 'task-container';

    mainDisplay.appendChild(taskContainer);
}

const setUpTasks = (taskArray) => {
    takeDownRenderedTasksOrProjects('tasks');
    renderTasks(taskArray);
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
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-div';

        renderTaskText(task, taskDiv);
        renderTaskClickables(taskDiv);
        sendToContainer(taskDiv);
    }
}

const renderTaskText = (task, taskDiv) => {
    for (const [key, value] of Object.entries(task)) {
        if (key == 'title' || key == 'description' || key == 'dueDate' || key == 'priority') {
            const taskPropdiv = document.createElement('div');
            taskPropdiv.textContent = value;

            if (key == 'title') {
                taskPropdiv.className = 'task-title';
            }
            else if (key == 'description') {
                taskPropdiv.className = 'task-description';
            }
            else if (key == 'dueDate') {
                taskPropdiv.className = 'task-dueDate';
            }
            else if (key == 'priority') {
                taskPropdiv.className = 'task-priority';
            }
            taskDiv.appendChild(taskPropdiv);
        }
    }
}

const renderTaskClickables = (taskDiv) => {
    //done checkbox
    const doneCheckBox = document.createElement('input');
    doneCheckBox.classList.add('done-check-box');
    doneCheckBox.setAttribute('type', 'checkbox');

    //buttons
    const editButtonInTask = document.createElement('button');
    editButtonInTask.classList.add('task-button');
    editButtonInTask.classList.add('edit-button-for-task');
    editButtonInTask.textContent = 'edit';

    const deleteButtonInTask = document.createElement('button');
    deleteButtonInTask.classList.add('task-button');
    deleteButtonInTask.classList.add('delete-button-for-task');
    deleteButtonInTask.textContent = 'delete';

    taskDiv.appendChild(doneCheckBox);
    taskDiv.appendChild(editButtonInTask);
    taskDiv.appendChild(deleteButtonInTask);
}

const sendToContainer = (taskDiv) => {
    const taskContainer = document.getElementById('task-container');
    taskContainer.appendChild(taskDiv);
}

const renderFormForTaskToBeEdited = (taskElement, taskData) => {

    const form = document.createElement('div');
    form.classList.add('form-for-task-to-be-edited');
    taskElement.appendChild(form);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('placeholder', 'task: ')
    titleInput.id = 'edit-task-title';
    titleInput.value = taskData.title;

    const descInput = document.createElement('input');
    descInput.setAttribute('placeholder', 'description: ')
    descInput.id = 'edit-task-desc';
    descInput.value = taskData.description;

    const dueDateInput = document.createElement('input');
    // dueDateInput.setAttribute('placeholder', 'due date: ')
    dueDateInput.setAttribute('type','date');
    dueDateInput.id = 'edit-task-due-date';
    dueDateInput.value = taskData.dueDate;

    //priority select list    
    const selectList = document.createElement('select')
    selectList.id = "edit-task-priority";

    
    const highOption = document.createElement('option');
    highOption.textContent = 'high';

    const medOption = document.createElement('option');
    medOption.textContent = 'med';
    
    const lowOption = document.createElement('option');
    lowOption.textContent = 'low';

    selectList.appendChild(highOption);
    selectList.appendChild(medOption);
    selectList.appendChild(lowOption);

    const projectToMoveTo = document.createElement('select');
    projectToMoveTo.id = 'project-select';
    for (const project of getProjectsList()) {
        const projectTitle = document.createElement('option');
        projectTitle.textContent = project.title;
        projectToMoveTo.appendChild(projectTitle);
    }

    const editTodoButton = document.createElement('button');
    editTodoButton.setAttribute('type', 'button');
    editTodoButton.id = 'submit-edit-todo-button';
    editTodoButton.textContent = 'change';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'x';


    form.appendChild(titleInput);
    form.appendChild(descInput);
    form.appendChild(dueDateInput);
    form.appendChild(selectList);
    form.appendChild(projectToMoveTo);
    form.appendChild(editTodoButton);
    form.appendChild(cancelButton);
}


const renderProjectContainer = () => {
    const projectContainer = document.createElement('div');
    projectContainer.id = 'project-container';

    sidebar.appendChild(projectContainer);
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

export {
    renderTaskForm,
    renderTaskContainer,
    setUpTasks,
    renderFormForTaskToBeEdited,
    renderProjectContainer,
    setUpProjects,

    renderProjectForm,
    renderProjectInMainDisplay,
}