const openMenu = document.getElementById("js-menu-open");
const navList = document.getElementById("js-nav-list");

openMenu.addEventListener("click", ()=> {
    openMenu.classList.toggle("ri-menu-fill");
    openMenu.classList.toggle("ri-close-fill");
    navList.classList.toggle("-translate-y-full");
});