const slideshows = document.querySelectorAll(".slideshow-container");

slideshows.forEach((slideshow) => {
  const slides = slideshow.querySelectorAll(".slide");
  const nextBtn = slideshow.querySelector(".next");
  const prevBtn = slideshow.querySelector(".prev");
  let current = 0;
  let interval;

  function showSlide(i) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  function startSlideshow() {
    interval = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 3000);
  }

  function stopSlideshow() {
    clearInterval(interval);
  }

  function showNext() {
    stopSlideshow();
    current = (current + 1) % slides.length;
    showSlide(current);
    startSlideshow();
  }

  function showPrev() {
    stopSlideshow();
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
    startSlideshow();
  }

  showSlide(current);
  startSlideshow();

  slideshow.addEventListener("mouseenter", stopSlideshow);
  slideshow.addEventListener("mouseleave", startSlideshow);

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);
  }
});
