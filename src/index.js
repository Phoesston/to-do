import {loadHome} from './home';
import {loadMenu} from './menu';
import {loadAbout} from './about';
import "./styles.css";

function setActiveTab(tab){
    const content = document.getElementById('content');
    content.innerHTML = ''; //clears the current content
    content.appendChild(tab());
}

function initWebsite(){
    const buttons = document.querySelectorAll('nav button');

    buttons[0].addEventListener('click', ()=> setActiveTab(loadHome));
    buttons[1].addEventListener('click', ()=> setActiveTab(loadMenu));
    buttons[2].addEventListener('click', ()=> setActiveTab(loadAbout));

    setActiveTab(loadHome);
}

initWebsite();