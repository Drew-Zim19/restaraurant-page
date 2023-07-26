import {homePageLoad} from './initial-page-load.js';
import * as menuLoad from './menuLoad.js';

const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');

const header = document.createElement('h1');
header.textContent = "Welcome to Drew's Rockin Pizza Tavern";
contentDiv.appendChild(header);

const buttonSpan = document.createElement('span');

const button1 = document.createElement('button');
button1.textContent = 'Menu';
button1.setAttribute('id', 'menu');
buttonSpan.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent = 'Contact';
buttonSpan.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent = 'Home';
buttonSpan.appendChild(button3);

contentDiv.appendChild(buttonSpan);

document.body.appendChild(contentDiv);

const contentDiv2 = document.createElement('div');
contentDiv2.setAttribute('id', 'content2');
document.body.appendChild(contentDiv2);

homePageLoad();

function clearTab() {


}

const menuButton = document.getElementById("menu");

menuButton.addEventListener('click', ()=> {
    
    
    menuLoad.load();
});

