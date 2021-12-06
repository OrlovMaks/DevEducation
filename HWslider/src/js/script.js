import '../css/style.css';
import { DOM } from "./dom";
const play = require('../img/play.png')
const stop = require('../img/stop.png')
let slideInterval = setInterval(nextSlide, 2500);
let playing = true;
let currentSlide = 0;
function nextSlide() {
    showSlide(currentSlide + 1);
}
function previousSlide() {
    showSlide(currentSlide - 1);
}
function showSlide(current) {
    DOM.slide[currentSlide].classList.remove('show');
    currentSlide = (current + DOM.slide.length) % DOM.slide.length;
    DOM.slide[currentSlide].classList.add('show');
}
function pauseSlide() {
    DOM.play.setAttribute("src", "../src/img/play.png")
    playing = false;
    clearInterval(slideInterval);
}
function playSlide() {
    DOM.play.setAttribute("src", "../src/img/stop.png")
    playing = true;
    slideInterval = setInterval(nextSlide, 2500);
}
DOM.play.addEventListener('click', function () {
    if (playing) pauseSlide();
    else playSlide();
})
DOM.next.addEventListener('click', function () {
    pauseSlide();
    nextSlide();
})
DOM.previous.addEventListener('click', function () {
    pauseSlide();
    previousSlide();
})