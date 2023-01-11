let menubtn = document.querySelector("#menu-btn")
let heartPurple= document.getElementById("btnPurple")
let heartWhite= document.getElementById("btnWhite")

var menu = document.getElementById("menu")

let content= document.getElementById("content-wrap")

//elementi home
let logo=document.getElementById("logo-wrap")
let experienceBtn = document.getElementById("experience")


console.log(menubtn)

//MENU
function toggleMenu(page) {

    //diventa visibile il menu
    menu.classList.toggle("active")
    
    //il contenuto diventa invisibile
    content.classList.toggle("active")
    experienceBtn.classList.toggle("active")

    if (page=="concept"|| page=="credits" ){

    } else if (page=="home"|| page=="gallery" || page=="waiting" || page=="login"){
    //il bottone cambia colore di sfondo
    menubtn.classList.toggle("active")
    heartPurple.classList.toggle("active")
    heartWhite.classList.toggle("active")
    }

if (page=="home"){
    //spariscono gli elementi della home
    logo.classList.toggle("active")
}

}