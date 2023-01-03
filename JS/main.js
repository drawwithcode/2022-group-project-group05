var menubtn;
var menu;

function setup() {
    menubtn = select("#menu-btn");
    menu = select("#menu");

    menubtn.elt.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    menubtn.elt.classList.toggle("active")
    menu.elt.classList.toggle("active")
}