"use strict";

const dropdown = document.querySelector(".dropdown");

if (dropdown) {
    const dropdownHeader = dropdown.querySelector(".dropdown__header");
    dropdownHeader.addEventListener("click", (e) => {
        dropdown.classList.toggle("_open");
    });
}

const getTemplate = options => {
    const $optionsEls = options.array.forEach(option => {
`        <li class="select__option" data-select-value=${option["value"]}>
            <div class="select__img">
                <img src="./assets/images/lang/${option["img"]}" alt=${option["alt"]}>
            </div>
            <div class="select__text">${option["text"]}</div>
        </li>`
    });
    return `<div class="select">
    <div class="select__header">
        <div class="select__img">
            <img src="" alt="Ru">
        </div>
        <div class="select__text">Ru</div>
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L10 0L0 0L5 5Z" fill="#2E3A59"/>
        </svg>
    </div>
    <ul class="select__dropdown">
        ${...$optionsEls}
    </ul>
</div>`;
    
}
class Dropdown{
    constructor(selector, options){
        this.$el = document.querySelector(selector);
        this.options = options;

        this.#render();
    }
    #render(){
        this.$el.innerHTML = getTemplate(this.options);
    }
    close(){
        this.$el.classList.remove("_open");
    }
    open(){
        this.$el.classList.remove("_close");
    }
}