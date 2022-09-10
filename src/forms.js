import {format} from "date-fns"

const returnTaskFormValues = () => {
    const titleValue = document.getElementById('task-title').value;
    const descValue = document.getElementById('task-desc').value;
    const priorityValue = document.getElementById('priority-select').value;
    const taskDoneValue = 'no';
    
    const dateValue = formatDate(document.getElementById('due-date').value);

    return {
        titleValue,
        descValue, 
        dateValue,
        priorityValue,
        taskDoneValue,
    };
}

const returnEditTaskFormValues = () => {
        const newTitle = document.querySelector('#edit-task-title').value;
        const newDesc = document.querySelector('#edit-task-desc').value;
        const newDueDate = formatDate(document.querySelector('#edit-task-due-date').value);
        const newPriority = document.querySelector('#edit-task-priority').value;

        return {
            newTitle,
            newDesc,
            newDueDate,
            newPriority,
        }


}

const formatDate = (date) => {
        return format(new Date(date), 'dd/MM/yyyy')
}

const returnProjectSelectValue = () => {
    const projectSelectValue = document.getElementById('project-select').value;
    return projectSelectValue;
}

const returnProjectFormValue = () => {
    const titleValue = document.getElementById('project-title').value;
    return(titleValue);

}

const isFormComplete = (form) => {
    let formValues = (Object.values(form));

    const isFieldFilled = (field) => field != "";

    return (formValues.every(isFieldFilled));
}

const repeatedTaskTitleExists = () => {
    const titleFromForm = document.querySelector('#task-title').value;
    return getTaskList().find((task) => {
        return task.title == titleFromForm;
    })
}


export {
    returnTaskFormValues, 
    isFormComplete, 
    returnProjectFormValue,
    returnProjectSelectValue,

    returnEditTaskFormValues,

    repeatedTaskTitleExists,
};