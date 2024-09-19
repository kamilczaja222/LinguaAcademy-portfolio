const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const opinionBox = document.querySelector('.carousel__opinions--js');
const carouselBox = document.querySelector('.carousel__box--js');


nextButton.addEventListener('click', e => {
    const position = opinionBox.offsetWidth;
    const translateValue = "translate3d(" + position + ", 0px, 0)";
    opinionBox.style.transform = translateValue;
    console.log(position);
})

prevButton.addEventListener('click', e => {
    const position = -(opinionBox.offsetWidth);
    const translateValue = "translate3d(" + position + ", 0px, 0)";
    opinionBox.style.transform = translateValue;
    console.log(position)
})

