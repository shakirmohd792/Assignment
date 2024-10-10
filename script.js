// Toggle mobile menu visibility
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Carousel functionality
const carouselContainer = document.querySelector('.carousel-container');
let scrollAmount = 0;

const scrollStep = 200;
const scrollInterval = 3000;

setInterval(() => {
    if (scrollAmount <= carouselContainer.scrollWidth - carouselContainer.clientWidth) {
        carouselContainer.scrollBy({
            left: scrollStep,
            behavior: 'smooth',
        });
        scrollAmount += scrollStep;
    } else {
        carouselContainer.scrollTo({
            left: 0,
            behavior: 'smooth',
        });
        scrollAmount = 0;
    }
}, scrollInterval);
