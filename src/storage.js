import { getProjectsList, setProjectList } from "./projectList";
import { getTaskList, setTaskList } from "./taskListModule";

const storageAvailable = () => {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            //everything except firefox
            e.code === 22 ||
            //firefox
            e.code === 1014 ||
            //check name field as well
            e.name === "QuotaExceededError" ||
            //firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") && 
            (storage  && storage.length !== 0);
    }
}


const populateStorage = () => {
    const projectsList = getProjectsList();
    const tasksList = getTaskList();
    localStorage.setItem('projectArray', JSON.stringify(projectsList));
    localStorage.setItem('taskArray', JSON.stringify(tasksList));
    setListsFromLocalStorage();
    console.log('this working dog');
    

    // console.log(getTaskList());
    // console.log(getProjectsList());
}

const setListFromLocalStorageOnFirstLoad = () => {

}


const setListsFromLocalStorage = () => {
    setProjectListFromLocalStorage();
    setTaskListFromLocalStorage();
}

const setProjectListFromLocalStorage = () => {
    setProjectList(JSON.parse(localStorage.getItem('projectArray')));
}

const setTaskListFromLocalStorage = () => {
    setTaskList(JSON.parse(localStorage.getItem('taskArray')));
}

const tasksExistInStorage = () => {
    return (localStorage.getItem('taskArray'));
}

const projectsExistInStorage = () => {
    // console.log(localStorage.getItem('projectArray'))
    return (
        localStorage.getItem('projectArray') != '[]' &&
        localStorage.getItem('projectArray') != null
        )
}

const projectArrayInStorage = () => {
    return localStorage.getItem('projectArray');
}

const taskArrayInStorage = () => {
    return localStorage.getItem('taskArray');
}
export {
    storageAvailable,
    populateStorage,
    projectsExistInStorage,
    setProjectListFromLocalStorage,
    tasksExistInStorage,
    setListsFromLocalStorage,

    projectArrayInStorage,
    taskArrayInStorage,
}
