
let url = new URL(location.href); 
let input = url.searchParams.get("name1");

     setTimeout(experienceOpener, 3600)

      function experienceOpener(){
        window.open("experience.html?name1="+ input, "_self")
      }

      setInterval(loading, 600)

      let counter=0;
      let arrayHearts=Array.from(document.getElementsByClassName("hearts"))


      function loading(){

        for (let i=0;i<=2;i++){
            arrayHearts[i].classList.remove("move")
        }
        
        if (counter>2){
            counter=0;
            return

        } else {
            arrayHearts[counter].classList.add("move")
        }
        
        counter++
      }