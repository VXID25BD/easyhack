"use strict";

// console.log(img);
const renderTemplate = (items, selectedId) => {
    const selectItem = items.find(item => item.id === selectedId);

    const itemsEls = items.map(item => `<li class="dropdown__item" data-type="item" data-id="${item.id}" >
    <div class="dropdown__img">
        <img src=${require(`../../../assets/images/lang/${item.img}`)} alt="${item.value}">
    </div>
    <div class="dropdown__value">${item.value}</div>
</li>`);

    return `<div class="dropdown__header" data-type="trigger" data-id="${selectItem.id}">
        <div class="dropdown__img">
            <img src=${require(`../../../assets/images/lang/${selectItem.img}`)} alt="${selectItem.value}">
        </div>
        <div class="dropdown__value">${selectItem.value}</div>
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L10 0L0 0L5 5Z" fill="#2E3A59"/>
        </svg>

    </div>
    <div class="dropdown__body">
        <ul class="dropdown__list">
            ${itemsEls.join("")}
        </div>
    </div>
`
}

class Dropdown{
    constructor(selector, options){
        this.el = document.querySelector(selector);
        this.options = options;
        this.selectedId = options.selectedId;
        
        this.#render();
        this.#setup();
    }
    #setup(){
        this.clickHandler = this.clickHandler.bind(this);
        this.el.addEventListener("click", this.clickHandler);
        this.value = this.el.querySelector(".dropdown__value");
        this.img = this.el.querySelector(".dropdown__img").querySelector("img");
        console.log(this.img);
    }
    #render(){
        const {items} = this.options;
        this.el.innerHTML = renderTemplate(items, this.selectedId);
    }
    get current() {
        return this.options.items.find(item => item.id === Number(this.selectedId));
    }
    clickHandler(e){
        const target = e.target;
        const el = this.clickChecker(target);
        const {type} = el.dataset;

        if (type === "trigger") {
            this.toggle();
        } else if (type === "item"){
            const {id} = el.dataset;
            this.select(id);
        }
    }
    clickChecker(target){
        let el = target;
        while (!el.dataset.hasOwnProperty("type")){
            el = el.parentNode;
        }
        return el;
    }
    select(id){
        this.selectedId = id;
        const currentItem = this.current;
        this.value.innerHTML = currentItem.value;
        this.img.src = require(`../../../assets/images/lang/${currentItem.img}`);
        this.close();
    }
    toggle(){
        this.isOpen() ? this.close(): this.open();
    }

    isOpen() {
        return this.el.classList.contains("_open");
    }

    open(){
        this.el.classList.add("_open");
    }
    close(){
        this.el.classList.remove("_open");
    }
}

export default Dropdown;