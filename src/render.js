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

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('placeholder', 'due date: ')
    dueDateInput.id = 'task-due-date';
    
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


    const submitTodoButton = document.createElement('button');
    submitTodoButton.setAttribute('type', 'button');
    submitTodoButton.id = 'submit-todo-button';
    submitTodoButton.textContent = 'add';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'x';


    todoForm.appendChild(titleInput);
    todoForm.appendChild(descInput);
    todoForm.appendChild(dueDateInput);
    todoForm.appendChild(selectList);
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

const takeDownRenderedTasks = () => {
    const taskContainer = document.getElementById('task-container');
    while (taskContainer.lastChild) {
        taskContainer.removeChild(taskContainer.lastElementChild);
    }
}

const takeDownRenderedProjects = () => {
    const projectContainer = document.getElementById('project-container');
    while (projectContainer.lastChild) {
        projectContainer.removeChild(projectContainer.lastElementChild);
    }
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
    taskContainer.appendChild(taskDiv)
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
    dueDateInput.setAttribute('placeholder', 'due date: ')
    dueDateInput.id = 'edit-task-due-date';
    dueDateInput.value = taskData.dueDate;

    const editTodoButton = document.createElement('button');
    editTodoButton.setAttribute('type', 'button');
    editTodoButton.id = 'submit-edit-todo-button';
    editTodoButton.textContent = 'change';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'x';


    form.appendChild(titleInput);
    form.appendChild(descInput);
    form.appendChild(dueDateInput);
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

        //populate with the project's data
        console.log(project);

        //project title
        const projectTitle = document.createElement('div');
        projectTitle.textContent = project.title;

        projectDiv.appendChild(projectTitle);

        const taskList = document.createElement('div');
        console.log(project.tasksList);



        //add buttons
        const addTasktoProject = document.createElement('button');
        addTasktoProject.id = 'add-task-to-project-button';
        addTasktoProject.textContent = 'Add task';
        projectDiv.appendChild(addTasktoProject);

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

export {
    renderTaskForm,
    renderTaskContainer,
    setUpTasks,
    renderFormForTaskToBeEdited,
    renderProjectContainer,
    setUpProjects,

    renderProjectForm,
}