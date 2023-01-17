
//menu compatto
let menubtn = document.getElementById("menu-btn")
let heart= document.getElementById("heart")

//menu esteso
let menu = document.getElementById("menu")
    
//elementi login
let	buttonSubmit = document.getElementById("submitBtn");



//MENU
menubtn.addEventListener("click", toggleMenu )//diventa visibile il menu

function toggleMenu() {
    menu.classList.toggle("active")
    menubtn.classList.toggle("active")
    heart.classList.toggle("active")
    console.log("funziona")
}