import { dotsSlider } from "./indicators.js";

const images = document.querySelectorAll(".banner-img");
let currentSlide = 0;

function showSlide(arg) {
  for (let img of images) {
    img.classList.remove("active-slide");
  }
  images[currentSlide].classList.add("active-slide");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }
  showSlide();
  dotsSlider();
}
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  showSlide();
  dotsSlider();
}
function modCurVal(val) {currentSlide = val}

export { nextSlide, prevSlide, showSlide, currentSlide, images, modCurVal };
