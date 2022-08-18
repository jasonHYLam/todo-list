class Task {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    renderTodo = () => {
        const todoContainer = document.createElement('div');

        const titleElement = document.createElement('p');
        titleElement.textContent = this.title;

        const descElement = document.createElement('p');
        descElement.textContent = this.description;
            
        const dueDateElement = document.createElement('p');
        dueDateElement.textContent = this.dueDate;

        todoContainer.appendChild(titleElement);
        todoContainer.appendChild(descElement);
        todoContainer.appendChild(dueDateElement);

        wrapper.appendChild(todoContainer);
    }
}

export {Task};