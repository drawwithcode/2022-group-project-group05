import { artwork } from "/public/JS/firebase.js"

document.addEventListener("click", newImage)

let outputs= []

function newImage(){
    
  console.log(artwork.Giacomo.data)
  
  outputs.push(artwork.Giacomo.data)

    outputs.forEach(element => {
        
        let imgdata= document.createElement("img")
        
        imgdata.src= element
        document.body.appendChild(imgdata)
    })
}
