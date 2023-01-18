import { artwork } from "/public/JS/firebase.js"

console.log(artwork)


//window.addEventListener("load", gallery)
document.body.addEventListener("click", gallery)
//setTimeout(gallery,350)



let outputs= []

function gallery() {
  console.log('calling');

    console.log(artwork)

    outputs= Object.keys(artwork)
    .map(function(key) {
    return artwork[key];
});

console.log(outputs)
//outputs.push(artwork.Giacomo.data)

  outputs.forEach(element => {
    
    let imgdata= document.createElement("img")
    
    imgdata.src= element.data
    console.log(element.data)
    document.body.appendChild(imgdata)

    imgdata.classList.add("artwork")

  })
}

