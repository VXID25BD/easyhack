"use strict";

class Select{
    constructor(selector, options){
        this._el = document.querySelector(selector);
        this.selectedId = options.hasOwnProperty("selectedId") ? options.selectedId : 1;
        this._items = [];
        this._setup();
    }

    _setup(){
        this._clickHandler = this._clickHandler.bind(this);
        
        this._el.querySelectorAll("[data-type='item']").forEach(item => {
            this._items.push(item);
            return item.addEventListener("click", this._clickHandler);
        });
        
        this.current.classList.add("_active");
    }
    get current(){
        return this._items.find(item => Number(item.dataset.id) === this.selectedId);
    }
    _clickHandler(e){
        const target = e.target;
        const el = this._clickChecker(target);
        const {type} = el.dataset;

        if (type === "item") {this.select(el);}
    }
    select(el){
        this.current.classList.remove("_active");
        this.selectedId = Number(el.dataset.id);
        this.current.classList.add("_active");
    }
    _clickChecker(target){
        let el = target;
        while (!el.dataset.hasOwnProperty("type")){
            el = el.parentNode;
        }
        return el;
    }
}


export default Select;