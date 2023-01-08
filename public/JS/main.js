let menubtn = document.querySelector("#menu-btn")
let heartPurple= document.getElementById("btnPurple")
let heartWhite= document.getElementById("btnWhite")

var menu = document.getElementById("menu")

let content= document.getElementById("content-wrap")
let logo=document.getElementById("logo-wrap")
let experienceBtn = document.getElementById("experience")


console.log(menubtn)
content.addEventListener("click", toggleMenu);

function toggleMenu() {

    //il bottone cambia colore di sfondo
    menubtn.classList.toggle("active")
    heartPurple.classList.toggle("active")
    heartWhite.classList.toggle("active")

    //diventa visibile il menu
    menu.classList.toggle("active")

    //spariscono gli elementi della home
    experienceBtn.classList.toggle("active")
    content.classList.toggle("active")
    logo.classList.toggle("active")


}