const wrapper = document.getElementById('wrapper');

const displayTodoForm = () => {
    const todoForm = document.createElement('form');

    const titleInput = document.createElement('input');

    todoForm.appendChild(titleInput);

    wrapper.appendChild(todoForm);
}

export {displayTodoForm};