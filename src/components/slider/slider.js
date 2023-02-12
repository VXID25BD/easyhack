"use strict";

class Slider{
    constructor(selector, options={}){
        this.el = document.querySelector(selector);
        this.currentSlideId = 1;
        this.options = options;
        this.slides = [];
        this.offset = 0;

        this.#setup();
    }

    #setup() {
        this.buttonPrev = this.el.querySelector(".slider__button_prev");
        this.buttonNext = this.el.querySelector(".slider__button_next");
        this.wrapper = this.el.querySelector(".slider__wrapper");

        this.el.querySelectorAll(".slider__slide").forEach((slide, index) => {
            slide.setAttribute("data-id", ++index);
            this.slides.push(slide);
        });

        this.countSlides = this.slides.length;

        this.wrapper.style.right = 0;
        this.move();
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.buttonPrev.addEventListener("click", this.prev);
        this.buttonNext.addEventListener("click", this.next);
    }
    get currentSlide(){
        return this.slides.find(slide => Number(slide.dataset.id) === this.currentSlideId);
    }
    move() {
        this.wrapper.style.right = this.offset * this.currentSlideId - this.offset;
    }
    
    next() {
        this.currentSlideId = this.currentSlideId < this.countSlides ? this.currentSlideId + 1 : 1;
        this.offset = this.currentSlide.getBoundingClientRect().width;
        this.move();
    }

    prev() {
        this.currentSlideId = this.currentSlideId > 1 ? this.currentSlideId - 1 : this.countSlides;
        this.offset = this.currentSlide.getBoundingClientRect().width;
        this.move();
    }
}

export default Slider;