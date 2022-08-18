class Project {
    constructor(title) {
        this.title = title;
        this.tasksList = [];
    }

    addTasktoProject = (task) => {
        this.tasksList.push(task);
    }

    removeTaskFromProject = (taskIndex) => {
        this.tasksList.splice(taskIndex, 1);
    }
}

export {Project};