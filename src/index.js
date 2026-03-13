import generateMenu from "./scriptMenu.js"
import generateHome from "./scriptHome.js";
import generateContacts from "./contactScript.js";

import "./style.css"

const contentDiv = document.getElementById("content");
let currentBtn = document.querySelector("nav>button");

document.querySelector("nav").addEventListener("click", (e) => {
    if (e.target.dataset.navBtn == "home") {
        contentDiv.innerText = '';
        generateHome(contentDiv);
        currentBtn.classList.remove("selected");
        e.target.classList.add("selected");
        currentBtn = e.target;
    }
    if (e.target.dataset.navBtn == "menu") {
        contentDiv.innerText = '';
        generateMenu(contentDiv);
        currentBtn.classList.remove("selected");
        e.target.classList.add("selected");
        currentBtn = e.target;
    }
    if (e.target.dataset.navBtn == "contact") {
        contentDiv.innerText = '';
        generateContacts(contentDiv);
        currentBtn.classList.remove("selected");
        e.target.classList.add("selected");
        currentBtn = e.target;
    }
});

generateHome(contentDiv);