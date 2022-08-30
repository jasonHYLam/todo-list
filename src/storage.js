import { getProjectsList } from "./projectList";

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

if (storageAvailable) {
    console.log('what a triumph')
} else {
    console.log('terrible earth')
}

const populateStorage = () => {
    localStorage.setItem('projectArray', getProjectsList())
}

const setArray = () => {
    
}

const checkStorage = () => {
    console.log(localStorage);
}

export {
    storageAvailable,
    populateStorage,
    setArray,
    checkStorage
}
