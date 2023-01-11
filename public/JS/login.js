let nameField = document.getElementById('nameField');
let	button = document.getElementById("submit");

//let experienceBtn = document.getElementById("experience")

function setName(name){
    let nameInput= document.getElementById('name')
    name = document.getElementById('name').value;
    var pInput = ("Dear " +  name +",");
    nameField.innerHTML = pInput;
console.log(nameInput.required)

    if (nameInput.required == true){
        pShow()
    }
};

function pShow(){
    let parte1= document.getElementById('part1');
    parte1.classList.toggle("active");
    let parte2= document.getElementById('part2');
    parte2.classList.toggle("active");

    experienceBtn.classList.toggle("active");
}