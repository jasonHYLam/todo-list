const createTodoModule = () => {

    let todoArray = [];

    const wrapper = document.getElementById('wrapper');

    class ToDo {
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

        pushToList = () => {
            todoArray.push(this);
        }

    }
        const testTodo = new ToDo('stare in mirror', 'in bathroom', '11/09/2022');
        testTodo.renderTodo();
        testTodo.pushToList();

        console.log(todoArray);
}

export {createTodoModule};