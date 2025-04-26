const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

function openClick() {
   if (nav.style.display === "none") {
      nav.style.display = "block";
   } else {
      nav.style.display = "none";
   }
}

openMenu.addEventListener("click", openClick);

function closeClick() {
   if (nav.style.display === "block") {
      nav.style.display = "none";
   } else {
      nav.style.display = "block";
   }
}
closeMenu.addEventListener("click", closeClick);
