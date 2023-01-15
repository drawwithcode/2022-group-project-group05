
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








/*

    let menuElt= Array.from(document.getElementsByClassName("menu-elt"))

    console.log(menuElt)

    menuElt.forEach( (element) =>{
        element.addEventlistner("click", btnPressed(element))
    })

    function btnPressed(element){
   element.style.filter= "drop-shadow(0px)"
}*/





    //per le pagine con la canvas di sfondo cambio il menu
    //if (page="home"|| page=="gallery" || page=="waiting" || page=="login" || page=="output"){
    //il bottone cambia colore di sfondo
    //}

    /*if ( page=="login"){
        buttonSubmit.classList.toggle("active")
    }*/