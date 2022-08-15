const wrapper = document.getElementById('wrapper');

const displayTodoForm = () => {
    const todoForm = document.createElement('form');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('placeholder', 'task: ')


    const descInput = document.createElement('input');
    descInput.setAttribute('placeholder', 'description: ')

    const dueDate = document.createElement('input');
    dueDate.setAttribute('placeholder', 'due date: ')

    const submitTodoButton = document.createElement('button');
    submitTodoButton.setAttribute('type', 'button');
    submitTodoButton.id = 'submit-todo-button';
    submitTodoButton.textContent = 'add';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'x';


    todoForm.appendChild(titleInput);
    todoForm.appendChild(descInput);
    todoForm.appendChild(dueDate);
    todoForm.appendChild(submitTodoButton);
    todoForm.appendChild(cancelButton);

    wrapper.appendChild(todoForm);
}

export {displayTodoForm};