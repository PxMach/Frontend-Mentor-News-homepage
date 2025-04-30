const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const body = document.querySelector(".body");

function toggleNav() {
   document.body.classList.toggle("nav-shown");
   nav.style.display = nav.style.display === "block" ? "none" : "block";
}

openMenu.addEventListener("click", toggleNav);
closeMenu.addEventListener("click", toggleNav);