
let scrollCtn= document.getElementById("scrollable-ctn");

let container= document.getElementById("logo-ctn");
let description= document.getElementById("description");
let experienceBtn= document.getElementById("experience-btn");

window.onclick= (event) => {
    console.log("ciao")
    console.log(scrollY);

    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = windowHeight*(windowHeight/2);
        
        //if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.remove("reveal");
        /*} else {
        reveals[i].classList.add("reveal");
        }*/
    }


}

