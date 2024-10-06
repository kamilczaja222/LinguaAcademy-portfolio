const prevButton = document.querySelector('.js-carousel-prev');
const nextButton = document.querySelector('.js-carousel-next');
const opinionBox = document.querySelector('.js-carousel-opinions');
const carouselBox = document.querySelector('.js-carousel-box');
const screenBox = document.querySelector('.js-screen-box');
const hamburger = document.querySelector('.js-hamburger');
const nav = document.querySelector('.js-nav');

let counter = 0;
let maxScroll = 0;
const screenSize = parseInt(screenBox.offsetWidth);
const position = parseInt(opinionBox.offsetWidth)

function checkScreen(screenSize) {
    if(screenSize < 768) {
        maxScroll = 5;
    } else if (screenSize < 1256) {
        maxScroll = 5;
    } else {
        maxScroll = 3;
    }
}

checkScreen(screenSize);

nextButton.addEventListener('click', () => {
    checkScreen(screenSize);
    carouselBox.scrollLeft += position;
    counter++;
    console.log(counter);
    if(counter > 0) {
        prevButton.classList.remove('js-hidden');
    }
    if(counter >=maxScroll) {
        nextButton.classList.add('js-hidden');
    }
})

prevButton.addEventListener('click', () => {
    checkScreen(screenSize);
    carouselBox.scrollLeft -= position;
    counter--;
    console.log(counter);
    if(counter <= maxScroll) {
        nextButton.classList.remove('js-hidden');
    }
    if(counter <= 0) {
        prevButton.classList.add('js-hidden');
    }
})

hamburger.addEventListener('click', () => {
    nav.classList.toggle('header__nav--close');
    nav.classList.toggle('header__nav--open');
})
