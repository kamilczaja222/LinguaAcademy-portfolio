const prevButton = document.querySelector('.js-carousel-prev');
const nextButton = document.querySelector('.js-carousel-next');
const opinionBox = document.querySelector('.js-carousel-opinions');
const carouselBox = document.querySelector('.js-carousel-box');
const hamburger = document.querySelector('.js-hamburger');
const nav = document.querySelector('.js-nav');

let element = 2;

const margin = (carouselBox.offsetWidth - opinionBox.offsetWidth)/element;


nextButton.addEventListener('click', () => {
    const position = parseInt(opinionBox.offsetWidth);
    carouselBox.scrollLeft += position;
    console.log(position);
})

prevButton.addEventListener('click', () => {
    const position = opinionBox.offsetWidth;
    carouselBox.scrollLeft -= position;
    console.log(position);
})

hamburger.addEventListener('click', () => {
    nav.classList.toggle('header__nav--close');
    nav.classList.toggle('header__nav--open');
})
