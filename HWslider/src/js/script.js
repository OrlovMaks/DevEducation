import '../css/style.css';
import { DOM } from "./dom";
const play = require('../img/play.png');
const stop = require('../img/stop.png');

class Slider {
    slideInterval = setInterval(this.nextSlide, 2500);
    playing = true;
    currentSlide = 0;
    constructor() {
        this.showSlide = this.showSlide.bind();
        this.playButt = this.playButt.bind();
        this.next = this.next.bind();
        this.previous = this.previous.bind();
    }
    showSlide(current) {
        DOM.slide[this.currentSlide].classList.remove('show');
        currentSlide = (current + DOM.slide.length) % DOM.slide.length;
        DOM.slide[this.currentSlide].classList.add('show');
    }
    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }
    previousSlide() {
        this.showSlide(this.currentSlide - 1);
    }
    pauseSlide() {
        DOM.play.setAttribute("src", "../src/img/play.png");
        this.playing = false;
        clearInterval(this.slideInterval);
    }
    playSlide() {
        DOM.play.setAttribute("src", "../src/img/stop.png");
        this.playing = true;
        slideInterval = setInterval(this.nextSlide, 2500);
    }
    playButt() {
        if (this.playing) this.pauseSlide();
        else this.playSlide();
    }
    next() {
        this.pauseSlide();
        this.nextSlide();
    }
    previous() {
        this.pauseSlide();
        this.previousSlide();
    }
}
const slider = new Slider();

DOM.play.addEventListener('click', slider.playButt)
DOM.next.addEventListener('click', slider.next)
DOM.previous.addEventListener('click', slider.previous)