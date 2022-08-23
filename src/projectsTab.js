import {renderProjectContainer, setUpProjects} from "./render";

const mainDisplay = document.getElementById('main-display');

const loadProjectsTab = () => {
    while (mainDisplay.lastChild) {
        mainDisplay.removeChild(mainDisplay.lastElementChild);
    }
    renderProjectContainer();
    setUpProjects();
}

export {loadProjectsTab }