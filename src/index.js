import {loadHome} from './home';
import {projectForm} from './projectForm.js';
import {loadAbout} from './about';
import "./styles.css";

function setActiveTab(tab){
    const content = document.getElementById('content');
    content.innerHTML = ''; //clears the current content
    content.appendChild(tab());
}

function initWebsite() {
    document.addEventListener('DOMContentLoaded', () => {
        projectForm();  
    });
    setActiveTab(loadHome);
}

initWebsite();