var menubtn = document.getElementById("menu-btn")
var menu = document.getElementById("menu")

menubtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menubtn.classList.toggle("active")
    menu.classList.toggle("active")
}