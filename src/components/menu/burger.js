"use strict";

const menuButton = document.querySelector(".menu__button");

if (menuButton){
    menuButton.addEventListener("click", e => {
        document.querySelector(".menu__body").classList.toggle("_open");
        e.target.classList.toggle("_open");
        document.body.classList.toggle("_lock");
    });
}