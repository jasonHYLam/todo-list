const createToDo = () => {

    class ToDo {
        constructor(title, description, dueDate) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
        }

        alertNewToDo = () => {
            console.log(this);
        }
    }
}

export {createToDo};