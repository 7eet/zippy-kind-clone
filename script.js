const menu_icon = document.querySelector(".menu-icon");
const menu_list = document.querySelector(".menu");

menu_icon.addEventListener("click", () => {
    menu_list.classList.toggle("show-menu");
}) 