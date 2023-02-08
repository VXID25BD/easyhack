"use strict";

class Tabs{
    constructor(selector, options){
        this.el = document.querySelector(selector);
        this.options = options;
        this.tabs = [];
        
        this._setup();
    }

    _setup(){
        this.el.querySelectorAll(".tabs__tab").forEach((tab, index) => {
            tab.dataset.id = index++;
            this.tabs.append(tab);
        });
    }
}

export default Tabs;