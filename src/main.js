const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const opinionBox = document.querySelector('.carousel__opinions--js');
const carouselBox = document.querySelector('.carousel__box--js');


nextButton.addEventListener('click', () => {
    const position = opinionBox.offsetWidth + 16;
    carouselBox.scrollLeft += position;
    console.log('next');
})

prevButton.addEventListener('click', () => {
    const position = opinionBox.offsetWidth + 16;
    carouselBox.scrollLeft -= position;
    console.log('prev');
})

