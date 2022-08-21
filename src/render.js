const wrapper = document.getElementById('wrapper');

const renderFormContainer = () => {

}

const renderTaskContainer = () => {
    const taskContainer = document.createElement('div');
    taskContainer.id = 'task-container';

    wrapper.appendChild(taskContainer);
}

const renderTaskElement = () => {

}

const setUpTasks = (taskArray) => {
    takeDownRenderedTasks();
    renderTasks(taskArray);
}

const takeDownRenderedTasks = () => {
    const taskContainer = document.getElementById('task-container');
    while (taskContainer.lastChild) {
        taskContainer.removeChild(taskContainer.lastElementChild);
    }
}

const renderTasks = (taskArray) => {
    for (const task of taskArray) {
        console.log(task);
        const taskDiv = document.createElement('div');

        renderText(task, taskDiv);
        renderClickables(taskDiv);
        sendToContainer(taskDiv);


        // for (const [key, value] of Object.entries(task)) {
        //     if (key == 'title' || key == 'description' || key == 'dueDate') {
        //         const taskPropdiv = document.createElement('div');
        //         taskPropdiv.textContent = value;
        //         taskDiv.appendChild(taskPropdiv);
        //     }
        // }

        // //done checkbox
        // const doneCheckBox = document.createElement('input');
        // doneCheckBox.setAttribute('type', 'checkbox');

        // //buttons
        // const editButtonInTask = document.createElement('button');
        // editButtonInTask.classList.add('task-button');
        // editButtonInTask.classList.add('edit-button-for-task');
        // editButtonInTask.textContent = 'edit';

        // const deleteButtonInTask = document.createElement('button');
        // deleteButtonInTask.classList.add('task-button');
        // deleteButtonInTask.classList.add('delete-button-for-task');
        // deleteButtonInTask.textContent = 'delete';

        // taskContainer.appendChild(doneCheckBox);
        // taskContainer.appendChild(editButtonInTask);
        // taskContainer.appendChild(deleteButtonInTask);

        // taskContainer.appendChild(taskDiv);
    }
}

const renderText = (task, taskDiv) => {
    for (const [key, value] of Object.entries(task)) {
        if (key == 'title' || key == 'description' || key == 'dueDate') {
            const taskPropdiv = document.createElement('div');
            taskPropdiv.textContent = value;
            taskDiv.appendChild(taskPropdiv);
        }
    }
}

const renderClickables = (taskDiv) => {
    //done checkbox
    const doneCheckBox = document.createElement('input');
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

    // taskContainer.appendChild(doneCheckBox);
    // taskContainer.appendChild(editButtonInTask);
    // taskContainer.appendChild(deleteButtonInTask);
    taskDiv.appendChild(doneCheckBox);
    taskDiv.appendChild(editButtonInTask);
    taskDiv.appendChild(deleteButtonInTask);

    // taskContainer.appendChild(taskDiv);
}

const sendToContainer = (taskDiv) => {
    const taskContainer = document.getElementById('task-container');
    taskContainer.appendChild(taskDiv)

}

export {
    renderTaskContainer,
    setUpTasks,
}
