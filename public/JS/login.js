let nameField = document.getElementById('nameField');
experienceBtn = document.getElementById("experience");


function setName(name){
    //let nameInput= document.getElementById('name')
    name = document.getElementById('name').value;
    input = name;
    nameField.innerHTML = input;

//check if name esiste
    if (name.length != 0 ){
        pShow()
    }
};

function pShow(){
    let parte1= document.getElementById('part1');
    parte1.classList.toggle("active");
    let parte2= document.getElementById('part2');
    parte2.classList.toggle("active");

    experienceBtn.style.display="flex";
    console.log(experienceBtn)
}

function newWindow(page){
    if(page=="login"){
        window.open("waiting.html?name1="+ input, "_self")
    }
}
