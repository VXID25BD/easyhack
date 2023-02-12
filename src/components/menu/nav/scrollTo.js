"use strict";


class Scroll{
    constructor(selector, options){
        this.els = document.querySelectorAll(selector);
        this.options = options;

        this.#setup();
    }

    #setup(){
        this.scrollTo = this.scrollTo.bind(this);
        this.els.forEach(el => el.addEventListener("click", this.scrollTo));
        this.Burger = this.options.Burger;
    }

    scrollTo(e){
        const scrollToBlock = document.querySelector(e.target.dataset.scrollTo);
        console.log(scrollToBlock);
        if (scrollToBlock) {
            const scrollToBlockPos = scrollToBlock.getBoundingClientRect().top;

            if (this.Burger){
                this.Burger.close();
            }

            window.scrollTo({
                top: scrollToBlockPos,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

export default Scroll;