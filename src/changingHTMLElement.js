let priorityOfCurrentTask;
const getPriorityOfCurrentTask = () => {
    return priorityOfCurrentTask;
}

const setPriorityOfCurrentTask = (value) => {
    const priorityValue = document.getElementById('priority-select').value;
    priorityOfCurrentTask = priorityValue;
}

const setPriorityColor = (task) => {
    console.log(
    task.priority
    )
    switch (task) {
        case 'high':

    }
}

export {
    setPriorityOfCurrentTask,
    setPriorityColor,
}