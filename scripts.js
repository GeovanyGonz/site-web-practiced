let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function changeSlide(n) {
    currentIndex += n;

    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    } else if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

setInterval(() => changeSlide(1), 5000); // Automatic slide change every 5 seconds

