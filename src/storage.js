import { getProjectsList, setProjectList } from "./projectList";

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
    localStorage.setItem('projectArray', JSON.stringify(projectsList));
    setProjectListFromLocalStorage();
}

const setProjectListFromLocalStorage = () => {
    setProjectList(JSON.parse(localStorage.getItem('projectArray')));
}

const projectsExistInStorage = () => {
    // console.log(localStorage.getItem('projectArray'))
    return (localStorage.getItem('projectArray'))
}

export {
    storageAvailable,
    populateStorage,
    projectsExistInStorage,
    setProjectListFromLocalStorage,
}
