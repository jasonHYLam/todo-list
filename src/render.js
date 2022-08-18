const wrapper = document.getElementById('wrapper');

const renderFormContainer = () => {

}

const renderTaskContainer = () => {
    const taskContainer = document.createElement('div');
    taskContainer.id = 'task-container';

    wrapper.appendChild(taskContainer);
}

const renderTasks = (taskArray) => {
    for (task of taskArray) {
        console.log(task);
    }
    // const task = document.createAttribute('div');

    // task.textContent = taskValues;

    // taskContainer.appendChild(task);
}

export {
    renderTaskContainer,
    renderTasks,


}
