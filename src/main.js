const prevButton = document.querySelector('.js-carousel-prev');
const nextButton = document.querySelector('.js-carousel-next');
const opinionBox = document.querySelector('.js-carousel-opinions');
const carouselBox = document.querySelector('.js-carousel-box');


nextButton.addEventListener('click', () => {
    const position = opinionBox.offsetWidth;
    carouselBox.scrollLeft += position;
    console.log(position);
})

prevButton.addEventListener('click', () => {
    const position = opinionBox.offsetWidth;
    carouselBox.scrollLeft -= position;
    console.log(position);
})

