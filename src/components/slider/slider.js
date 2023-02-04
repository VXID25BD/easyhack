"use strict";

class Slider{
    constructor(selector, options={}){
        this._el = document.querySelector(selector);
        this._currentSlide = 1;
        this._options = options;

        this._setup();
    }

    _setup() {
        this._buttonPrev = this._el.querySelector(".slider__button_prev");
        this._buttonNext = this._el.querySelector(".slider__button_next");
        this._container = this._el.querySelector(".slider__container");

        this._offset = this._container.getBoundingClientRect().width;
        this._slides = this._el.querySelectorAll(".slider__slide");
        this._countSlides = this._slides.length;

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this._buttonPrev.addEventListener("click", this.prev);
        this._buttonNext.addEventListener("click", this.next);
    }

    _move() {
        this._container.style.right = this._offset * this._currentSlide - this._offset;
    }
    
    next() {
        this._currentSlide = this._currentSlide < this._countSlides ? this._currentSlide + 1 : 1;
        this._move();
    }

    prev() {
        this._currentSlide = this._currentSlide > 1 ? this._currentSlide - 1 : this._countSlides;
        this._move();
    }
}

window.onload = () => {
    const functionSlider = new Slider(".slider", {});
}