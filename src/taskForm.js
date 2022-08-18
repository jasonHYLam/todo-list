const wrapper = document.getElementById('wrapper');

let titleInput;
let descInput;
let dueDateInput;

const displayTaskForm = () => {
    const todoForm = document.createElement('form');

    titleInput = document.createElement('input');
    titleInput.setAttribute('placeholder', 'task: ')
    titleInput.id = 'task-title';

    descInput = document.createElement('input');
    descInput.setAttribute('placeholder', 'description: ')
    descInput.id = 'task-desc';

    dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('placeholder', 'due date: ')
    dueDateInput.id = 'task-due-date';

    const submitTodoButton = document.createElement('button');
    submitTodoButton.setAttribute('type', 'button');
    submitTodoButton.id = 'submit-todo-button';
    submitTodoButton.textContent = 'add';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'x';


    todoForm.appendChild(titleInput);
    todoForm.appendChild(descInput);
    todoForm.appendChild(dueDateInput);
    todoForm.appendChild(submitTodoButton);
    todoForm.appendChild(cancelButton);

    wrapper.appendChild(todoForm);

}

const returnFormValues = () => {
    const titleValue = document.getElementById('task-title').value;
    const descValue = document.getElementById('task-desc').value;
    const dueDateValue = document.getElementById('task-due-date').value;
    return {titleValue, descValue, dueDateValue};
}

const isFormComplete = (form) => {
    let formValues = (Object.values(form));

    const isFieldFilled = (field) => field != "";

    return (formValues.every(isFieldFilled));
}

export {displayTaskForm, returnFormValues, isFormComplete};