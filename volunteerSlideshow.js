// volunteerSlideshow.js
let volunteerCurrentSlide = 0;
const volunteerSlides = document.getElementsByClassName("volunteer-slide");
let volunteerSlideInterval;

function showVolunteerSlides() {
    for (let i = 0; i < volunteerSlides.length; i++) {
        volunteerSlides[i].classList.remove("active");
    }

    volunteerCurrentSlide++;

    if (volunteerCurrentSlide >= volunteerSlides.length) {
        volunteerCurrentSlide = 0;
    }

    volunteerSlides[volunteerCurrentSlide].classList.add("active");
    volunteerSlideInterval = setTimeout(showVolunteerSlides, 4000); // Slightly different timing than main slideshow
}

function changeVolunteerSlide(direction) {
    clearTimeout(volunteerSlideInterval);

    for (let i = 0; i < volunteerSlides.length; i++) {
        volunteerSlides[i].classList.remove("active");
    }

    volunteerCurrentSlide = volunteerCurrentSlide + direction;

    if (volunteerCurrentSlide >= volunteerSlides.length) {
        volunteerCurrentSlide = 0;
    }
    if (volunteerCurrentSlide < 0) {
        volunteerCurrentSlide = volunteerSlides.length - 1;
    }

    volunteerSlides[volunteerCurrentSlide].classList.add("active");
    volunteerSlideInterval = setTimeout(showVolunteerSlides, 4000);
}

window.addEventListener('load', function () {
    showVolunteerSlides();
});