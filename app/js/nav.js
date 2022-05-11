export { showNav, menuBtn, menu };

const menuBtn = document.querySelector(".fa-solid");
const menu = document.querySelector(".nav");
const body = document.querySelector("body");
const dropdownBox = document.querySelectorAll(".drop-cont");

let swipeStartX = null;
let swipeEndX = null;


function showNav() {
  if (!menu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  menu.classList.toggle("active");
}

menu.addEventListener("click", dropDown);
function dropDown(e) {
  let target = e.target;
  let targetCheck = e.target.innerText;

  if (
    targetCheck === "Репертуар" ||
    targetCheck === "События" ||
    targetCheck === "Труппа"
  ) {
    let currentDropdown = target.parentElement.parentElement.childNodes[3];
    e.preventDefault();

    dropdownBox.forEach((box) => {
      if (!currentDropdown.classList.contains("dropdown-active")) {
        box.classList.remove("dropdown-active");
        currentDropdown.classList.add("dropdown-active");
      } else {
        box.classList.remove("dropdown-active");
        currentDropdown.classList.remove("dropdown-active");
      }
    });
  }
}

body.addEventListener("touchstart", swipeStart);
body.addEventListener("touchend", swipeEnd);

function swipeStart(e) {
  swipeStartX = e.changedTouches[0].pageX;
}
function swipeEnd(e) {
  swipeEndX = e.changedTouches[0].pageX;
  if (swipeStartX < swipeEndX) {
    menu.classList.remove("active");
  }
}
