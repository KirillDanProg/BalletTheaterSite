import { currentSlide, modCurVal, showSlide } from "./slider.js";

const dots = document.querySelector(".dots");
const inds = document.querySelectorAll(".dot");
let prev = null;

function activeDot(e) {
  if (e.target.classList.contains("dot")) {
    e.target.classList.add("active-dot");
    if (prev && prev !== e.target) {
      prev.classList.remove("active-dot");
    }
    prev = e.target;
  }
}

function dotsSlider() {
  inds.forEach((ind) => {
    ind.classList.remove("active-dot");
  });
  inds[currentSlide].classList.add("active-dot");
}

function getDot(e, arg) {
  let target = e.target;
  if (target.classList.contains("dot")) {
    modCurVal(target.dataset.count);
    dotsSlider()
    showSlide();
  }
}

export { activeDot, dots, dotsSlider, getDot };
