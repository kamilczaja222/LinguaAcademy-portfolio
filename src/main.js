const HIDDEN_CLASS = 'hidden';
const prevButton = document.querySelector('.js-carousel-prev');
const nextButton = document.querySelector('.js-carousel-next');
const opinionBox = document.querySelector('.js-carousel-opinions');
const carouselBox = document.querySelector('.js-carousel-box');
const screenBox = document.querySelector('.js-screen-box');
const hamburger = document.querySelector('.js-hamburger');
const nav = document.querySelector('.js-nav');

let carouselPostCounter = 0;
let maxScroll = 0;
let screenSize;
const position = parseInt(opinionBox.offsetWidth)

function checkScreen() { 
    if(screenSize < 768) {
        maxScroll = 5;
    } else if (screenSize < 1256) {
        maxScroll = 4;
    } else {
        maxScroll = 3;
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    screenSize = parseInt(screenBox.offsetWidth);
    checkScreen(screenSize);
});

window.addEventListener("resize", () => {
    screenSize = parseInt(screenBox.offsetWidth);
    checkScreen(screenSize);
});

nextButton.addEventListener('click', () => {
    carouselBox.scrollLeft += position;
    carouselPostCounter++;
    if(carouselPostCounter > 0) {
        prevButton.classList.remove(HIDDEN_CLASS);
    }
    if(carouselPostCounter >=maxScroll) {
        nextButton.classList.add(HIDDEN_CLASS);
    }
})

prevButton.addEventListener('click', () => {
    carouselBox.scrollLeft -= position;
    carouselPostCounter--;
    if(carouselPostCounter <= maxScroll) {
        nextButton.classList.remove(HIDDEN_CLASS);
    }
    if(carouselPostCounter <= 0) {
        prevButton.classList.add(HIDDEN_CLASS);
    }
})

hamburger.addEventListener('click', () => {
    nav.classList.toggle('header__nav--close');
    nav.classList.toggle('header__nav--open');
})
