"use strict";

class Select{
    constructor(selector,){
        this.el = document.querySelector(selector);
        this.#setup();
    }
    #setup(){
        this.clickHandler = this.clickHandler.bind(this);
        this.el.addEventListener("click", this.clickHandler);
    }

    clickHandler(e){
        const target = e.target;
        console.log(target);

        if (target.dataset["type"] === "trigger" || parent.dataset["type"] === "trigger") {
            this.toggle();
        }
        if (type === "item"){
            this.select(e);
        }
    }
    clickChecker(){
        
    }
    select(e){
        const item = e.target;

        const itemValue = item.dataset.value;
        const itemText = item.querySelector(".select__text").innerText;
        const itemImgHref = item.querySelector("img").href;

        const itemTrigger = this.el.querySelector(".select__header");
        itemTrigger.dataset.value = itemValue;
        itemTrigger.querySelector("img").href = itemImgHref;
        itemTrigger.querySelector(".select__text").innerText = itemText;
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

const selectLanguage = new Select(".language");
