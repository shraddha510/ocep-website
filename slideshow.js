let currentSlide = 0;
const slides = document.getElementsByClassName("slide");
let slideInterval;

function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Advance to next slide
    currentSlide++;

    // Reset to first slide if we've reached the end
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // Show current slide
    slides[currentSlide].classList.add("active");

    // Set timer for next slide
    slideInterval = setTimeout(showSlides, 3000);
}

function changeSlide(direction) {
    // Clear existing timer
    clearTimeout(slideInterval);

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Update current slide index
    currentSlide = currentSlide + direction;

    // Handle wraparound in both directions
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    // Show new slide
    slides[currentSlide].classList.add("active");

    // Restart timer
    slideInterval = setTimeout(showSlides, 3000);
}

// Start slideshow when page loads
window.onload = function () {
    showSlides();
}