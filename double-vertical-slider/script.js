const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlidIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlidIndex++;
        if (activeSlidIndex > slidesLength - 1) {
            activeSlidIndex = 0;
        }
    }

    else if (direction === 'down') {
        activeSlidIndex--;
        if (activeSlidIndex < 0) {
            activeSlidIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlidIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlidIndex * sliderHeight}px)`;
}