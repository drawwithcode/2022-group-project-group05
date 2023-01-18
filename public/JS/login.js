let nameField = document.getElementById('nameField');

let experienceBtn = document.getElementById("experience-btn");


function setName(){
    let name = document.getElementById('name').value;
    nameField.innerHTML = name;
    window.sessionStorage.setItem("name", name)

    //check if name esiste
    if (name.length != 0 ){
        pShow()
    }
};

function pShow(){
    //faccio scomparire la sezione dell'input
    let parte1= document.getElementById('part1');
    parte1.style.display= "none";
    
    //faccio comparire la sezione dell'esperienza
    let parte2= document.getElementById('part2');
    parte2.style.display= "flex";
    experienceBtn.style.display="flex";
}

experienceBtn.addEventListener("click", newWindow)

function newWindow(){
    window.location.href = "experience-final.html";
}
