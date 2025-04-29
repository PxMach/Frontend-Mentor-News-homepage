const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const body = document.querySelector(".body");

function openClick() {
   if (nav.style.display === "none" || nav.style.display === "") {
      body.style.opacity = 0.6;
      nav.style.display = "block";
      nav.style.opacity = 1;
   } else {
      nav.style.display = "none";
      body.style.opacity = 1;
   }
}

openMenu.addEventListener("click", openClick);

function closeClick() {
   if (nav.style.display === "block") {
      nav.style.display = "none";
      body.style.opacity = 1;
   } else {
      nav.style.display = "block";
   }
}
closeMenu.addEventListener("click", closeClick);
