document.getElementById("nav").addEventListener("click", function () {
   const menu = document.getElementById("menu");
   const img = document.getElementById("img");
   if (menu.style.display === "none") {
      menu.style.display = "block";
   } else {
      menu.style.display = "none";
   }
});
