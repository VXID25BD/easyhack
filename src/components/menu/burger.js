"use strict";


class Burger{
    constructor(selector, options){
        this.el = document.querySelector(selector);
        this.options = options;

        this.#setup();
    }

    #setup(){
        this.burgerButton = this.el.querySelector(".menu-button");
        this.burgerBody = this.el.querySelector(".menu__body");

        this.clickHandler = this.clickHandler.bind(this);
        this.burgerButton.addEventListener("click", this.clickHandler)
    }

    get isOpen(){
        return this.burgerButton.classList.contains("_open");
    }

    clickHandler(){
        this.isOpen ? this.close() : this.open();
    }

    close(){
        this.burgerBody.classList.remove("_open");
        this.burgerButton.classList.remove("_open");
        document.body.classList.remove("_lock");
    }

    open(){
        this.burgerBody.classList.add("_open");
        this.burgerButton.classList.add("_open");
        document.body.classList.add("_lock");
    }
}

export default Burger;