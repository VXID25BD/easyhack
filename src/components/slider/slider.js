"use strict";

class Slider{
    constructor(selector, options={}){
        this._el = document.querySelector(selector);
        this._currentSlideId = 1;
        this._options = options;
        this._slides = [];
        this._offset = 0;

        this._setup();
    }

    _setup() {
        this._buttonPrev = this._el.querySelector(".slider__button_prev");
        this._buttonNext = this._el.querySelector(".slider__button_next");
        this._wrapper = this._el.querySelector(".slider__wrapper");

        this._el.querySelectorAll(".slider__slide").forEach((slide, index) => {
            slide.setAttribute("data-id", ++index);
            this._slides.push(slide);
        });

        this._countSlides = this._slides.length;

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this._buttonPrev.addEventListener("click", this.prev);
        this._buttonNext.addEventListener("click", this.next);
    }
    get currentSlide(){
        return this._slides.find(slide => Number(slide.dataset.id) === this._currentSlideId);
    }
    _move() {
        this._wrapper.style.right = this._offset * this._currentSlideId - this._offset;
    }
    
    next() {
        this._currentSlideId = this._currentSlideId < this._countSlides ? this._currentSlideId + 1 : 1;
        this._offset = this.currentSlide.getBoundingClientRect().width;
        this._move();
    }

    prev() {
        this._currentSlideId = this._currentSlideId > 1 ? this._currentSlideId - 1 : this._countSlides;
        this._offset = this.currentSlide.getBoundingClientRect().width;
        this._move();
    }
}

export default Slider;