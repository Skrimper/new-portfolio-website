const slideshows = document.querySelectorAll(".slideshow-container");

slideshows.forEach((slideshow) => {
  const slides = slideshow.querySelectorAll(".slide");
  let current = 0;

  function showSlide(i) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  showSlide(current);

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000); // 3 seconds per slide
});
