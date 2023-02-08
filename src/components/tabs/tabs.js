"use strict";

class Tabs{
    constructor(selector, options){
        this.el = document.querySelector(selector);
        this.options = options;
        this.multiTab = Boolean(options.multiTab);
        this.tabs = [];
        
        this._currentTabId = null;
        this._setup();
    }

    _setup(){
        this.el.querySelectorAll(".tab-tabs").forEach((tab, index) => {
            tab.dataset.id = index++;

            const tabTrigger = tab.querySelector(".tab-tabs__trigger");

            this._clickHandler = this._clickHandler.bind(this);
            tabTrigger.addEventListener("click", this._clickHandler)

            this.tabs.push(tab);
        });
    }
    get currentTab(){
        return this.tabs.find(tab => tab.dataset.id === this._currentTabId);
    }
    get isOpen(){
        return this.currentTab.classList.contains("_open");
    }
    _clickHandler(e){
        const tab = this._searchTab(e.target);

        if (this.currentTab && tab !== this.currentTab && !this.multiTab) {
            this.close();
        }

        this._currentTabId = tab.dataset.id;
        this.isOpen ? this.close() : this.open();
    }
    _searchTab(target){
        let parent = target.parentNode;

        while (!parent.dataset.id){
            parent = parent.parentNode;
        }

        return parent;
    }
    open(){
        this.currentTab.classList.add("_open");
    }
    close(){
        this.currentTab.classList.remove("_open")
    }

}

export default Tabs;