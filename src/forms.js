const returnTaskFormValues = () => {
    const titleValue = document.getElementById('task-title').value;
    const descValue = document.getElementById('task-desc').value;
    const dueDateValue = document.getElementById('task-due-date').value;
    const priorityValue = document.getElementById('priority-select').value;
    const taskDoneValue = 'no';
    return {
        titleValue,
        descValue, 
        dueDateValue, 
        priorityValue,
        taskDoneValue,
    };
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

export {returnTaskFormValues, isFormComplete, returnProjectFormValue};