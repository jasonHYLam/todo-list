const createToDo = () => {

    class ToDo {
        constructor(title, description, dueDate) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
        }

        alertNewToDo = () => {
            return this;
        }

    }
        const takeAShit = new ToDo('shit', 'shit in my toilet', '11/09/2022');
        console.log(takeAShit.alertNewToDo());
}

export {createToDo};