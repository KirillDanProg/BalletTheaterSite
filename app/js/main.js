// menu button
import {showNav, menuBtn, menu} from "./nav.js"
menuBtn.addEventListener('click', showNav)

// slider
import {nextSlide, showSlide, currentSlide, images} from "./slider.js"
const intervalID = setInterval(nextSlide, 10000);

// indicators slider 
import {activeDot, dots, getDot} from "./indicators.js"
dots.addEventListener('click', activeDot)
dots.addEventListener('click', getDot)

import { banner, swipeEnd, swipeEndX, swipeStart, swipeStartX } from "./swipe.js";
banner.addEventListener("touchstart", swipeStart);
banner.addEventListener("touchend", swipeEnd);
