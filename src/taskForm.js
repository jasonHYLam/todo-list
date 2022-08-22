const returnFormValues = () => {
    const titleValue = document.getElementById('task-title').value;
    const descValue = document.getElementById('task-desc').value;
    const dueDateValue = document.getElementById('task-due-date').value;
    return {titleValue, descValue, dueDateValue};
}

const isFormComplete = (form) => {
    let formValues = (Object.values(form));

    const isFieldFilled = (field) => field != "";

    return (formValues.every(isFieldFilled));
}

export {returnFormValues, isFormComplete};