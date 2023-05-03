export default class Slider {
    constructor({container = null, 
        btns = null, 
        next = null, 
        prev = null,
        activeClass = '',
        animate,
        prevBtn = null,
        nextBtn = null,
        autoplay } = {}) {
        this.container = document.querySelector(container);
        try {
            this.slides = this.container.children;
        } catch(e) {}

        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        
        this.prevBtn = document.querySelectorAll(prevBtn);
        this.nextBtn = document.querySelectorAll(nextBtn);

        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }

};