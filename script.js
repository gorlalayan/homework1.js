let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

updateSlidePosition();