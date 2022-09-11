import {format} from "date-fns"
import { getProjectsList } from "./projectList";
import { getProjectThatContainsTask } from "./taskListModule";

const returnTaskFormValues = () => {
    const titleValue = document.getElementById('task-title').value;
    const descValue = document.getElementById('task-desc').value;
    const priorityValue = document.getElementById('priority-select').value;
    // const taskDoneValue = 'no';
    
    const dateValue = formatDate(document.getElementById('due-date').value);

    return {
        titleValue,
        descValue, 
        dateValue,
        priorityValue,
        // taskDoneValue,
    };
}

// const returnEditTaskFormValues = () => {
//         const newTitle = document.querySelector('#edit-task-title').value;
//         const newDesc = document.querySelector('#edit-task-desc').value;
//         const newDueDate = formatDate(document.querySelector('#edit-task-due-date').value);
//         const newPriority = document.querySelector('#edit-task-priority').value;

//         return {
//             newTitle,
//             newDesc,
//             newDueDate,
//             newPriority,
//         }


// }

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

const formNotExist = () => {
    const newTaskFormContainer = document.querySelector('#task-form-container');
    
    return newTaskFormContainer == null;
}
const populateFormForNewTask = () => {

    const formHeader = document.querySelector('#form-header');
    formHeader.textContent = 'add new task'
    const titleInput = document.querySelector('#task-title');
    titleInput.setAttribute('placeholder', 'task: ')
    const descInput = document.querySelector('#task-desc');
    descInput.setAttribute('placeholder', 'description: ')
}


const populateFormForTaskToBeEdited = (taskElement, taskData) => {


    const formHeader = document.querySelector('#form-header');
    formHeader.textContent = 'edit task';

    const titleInput = document.querySelector('#task-title');
    const descInput = document.querySelector('#task-desc');


    // const form = document.createElement('div');
    // form.classList.add('form-for-task-to-be-edited');
    // taskElement.appendChild(form);
    console.log('IM GONNA IMOOOOOORSE');
    console.log(taskData);

    titleInput.value = taskData.title;

    descInput.value = taskData.description;

    const dueDateInput = document.querySelector('#due-date');
    dueDateInput.value = taskData.dueDate;

    //priority select list    
    const selectList = document.querySelector('#priority-select')
    selectList.value = taskData.priority;

    
    const highOption = document.createElement('option');
    highOption.textContent = 'high';

    const medOption = document.createElement('option');
    medOption.textContent = 'med';
    
    const lowOption = document.createElement('option');
    lowOption.textContent = 'low';

    selectList.appendChild(highOption);
    selectList.appendChild(medOption);
    selectList.appendChild(lowOption);

    const projectToMoveTo = document.querySelector('#project-select');
    projectToMoveTo.value = getProjectThatContainsTask(taskElement).title;
    // for (const project of getProjectsList()) {
    //     const projectTitle = document.createElement('option');
    //     projectTitle.textContent = project.title;
    //     projectToMoveTo.appendChild(projectTitle);
    // }

    // const editTodoButton = document.createElement('button');
    // editTodoButton.setAttribute('type', 'button');

//THE BELOW IS EXTREMELY FUCKN IMP

    // editTodoButton.id = 'submit-edit-todo-button';
    // editTodoButton.textContent = 'change';

    // const cancelButton = document.createElement('button');
    // cancelButton.textContent = 'x';


    // form.appendChild(titleInput);
    // form.appendChild(descInput);
    // form.appendChild(dueDateInput);
    // form.appendChild(selectList);
    // form.appendChild(projectToMoveTo);
    // form.appendChild(editTodoButton);
    // form.appendChild(cancelButton);
}

export {
    returnTaskFormValues, 
    isFormComplete, 
    returnProjectFormValue,
    returnProjectSelectValue,

    // returnEditTaskFormValues,

    repeatedTaskTitleExists,

    formNotExist,

    populateFormForNewTask,
    populateFormForTaskToBeEdited,
};