const prevButton = document.querySelector('.carousel__buttonPrev--js');
const nextButton = document.querySelector('.carousel__buttonNext--js');
const opinionBox = document.querySelector('.carousel__opinions--js');
const carouselBox = document.querySelector('.carousel__box--js');


nextButton.addEventListener('click', () => {
    const position = opinionBox.offsetWidth;
    carouselBox.scrollLeft += position;
    console.log('next');
})

prevButton.addEventListener('click', () => {
    const position = opinionBox.offsetWidth;
    carouselBox.scrollLeft -= position;
    console.log('prev');
})

