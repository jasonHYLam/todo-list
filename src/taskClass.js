class Task {
    constructor(title, description, dueDate, priority, taskDone) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskDone = taskDone;
        this.projectsList = [];
    }
}

export {Task};