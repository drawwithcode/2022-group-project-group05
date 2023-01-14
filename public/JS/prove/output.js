
      
    let url = new URL(location.href); 
    let input = url.searchParams.get("name1");

      window.onload=()=>{
        console.log(input);

        let output= document.createElement("div")
        output.id="output"

        let img= document.createElement("img");
        img.src="./assets/elements/output.png"

        let names= document.createElement("p")
        names.innerHTML = String(input) + " + " + String(input)
        
        names.style.fontSize="2em"
        names.style.fontFamily="myFont"

        document.body.appendChild(output)
        document.body.appendChild(img)
        document.body.appendChild(names)

        output.appendChild(img)
        output.appendChild(names)

      }