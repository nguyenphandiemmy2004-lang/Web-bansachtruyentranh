/*==========================
        SLIDER
===========================*/

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

/* Hiển thị banner */
function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

/* Banner tiếp theo */
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

/* Banner trước */
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

/* Tự động chạy */
setInterval(nextSlide, 3000);

