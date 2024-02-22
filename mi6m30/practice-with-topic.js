document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const previousBtn = document.getElementById("previousBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    function goToSlide(index) {
        console.log("Going to slide", index);
        carousel.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    previousBtn.addEventListener("click", function () {
        console.log("Previous button clicked");
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        goToSlide(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
        console.log("Next button clicked");
        currentIndex = (currentIndex + 1) % carouselItems.length;
        goToSlide(currentIndex);
    });
});
