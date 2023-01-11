//menu compatto
let menubtn = document.querySelector("#menu-btn")
let heartPurple= document.getElementById("btnPurple")
let heartWhite= document.getElementById("btnWhite")
//menu esteso
var menu = document.getElementById("menu")


//contenuto
let content= document.getElementById("content-wrap")
//experience
let experienceBtn = document.getElementById("experience")


//elementi home
let logo=document.getElementById("logo-wrap")
    
//elementi login
let	buttonSubmit = document.getElementById("submitBtn");

console.log(menubtn)

//MENU
function toggleMenu(page) {

    //diventa visibile il menu
    menu.classList.toggle("active")

    //per le pagine con la canvas di sfondo cambio il menu
    if (page=="home"|| page=="gallery" || page=="waiting" || page=="login"){
    //il bottone cambia colore di sfondo
    menubtn.classList.toggle("active")
    heartPurple.classList.toggle("active")
    heartWhite.classList.toggle("active")
    }

    //il contenuto diventa invisibile
    content.classList.toggle("active")
    experienceBtn.classList.toggle("active")

    if (page=="home"){
        logo.classList.toggle("active")
    }

    if ( page=="login"){
        buttonSubmit.classList.toggle("active")
    }
}

/*
    let menuElt= Array.from(document.getElementsByClassName("menu-elt"))

    console.log(menuElt)

    menuElt.forEach( (element) =>{
        element.addEventlistner("click", btnPressed(element))
    })

    function btnPressed(element){
   element.style.filter= "drop-shadow(0px)"
}*/