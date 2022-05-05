export { showNav, menuBtn, menu };

const menuBtn = document.querySelector(".fa-solid");
const menu = document.querySelector(".nav");

menuBtn.addEventListener("click", showNav);

function showNav() {
  menu.classList.toggle("active");
}
