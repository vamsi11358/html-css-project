document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".move-slide-button.left");
  const nextButton = document.querySelector(".move-slide-button.right");
  const badgeButtons = document.querySelectorAll(".badge-button");

  let currentSlide = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    badgeButtons.forEach((badge, index) => {
      if (index == currentSlide) {
        badge.classList.add("active");
      } else {
        badge.classList.remove("active")
      }
    })
  }

  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  });

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  });

  badgeButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      currentSlide = i;
      updateSlides();
    });
  });

  updateSlides();
});
