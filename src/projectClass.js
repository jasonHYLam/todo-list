class Project {
    constructor(title) {
        this.title = title;
        this.tasksList = [];
    }

    addTasktoProject = (task) => {
        this.tasksList.push(task);
    }
}

export {Project};