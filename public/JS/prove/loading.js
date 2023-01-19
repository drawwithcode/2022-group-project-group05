//scelta randomica delle frasi
let quote= document.getElementById("quotes");

let quotes=[
  "You call it madness, but I call it love",
  "If you can’t love yourself how the hell you’re gonna love somebody else?",
  "All you need is love",
  "True love stories never have endings",
  "Let’s commit a perfect crime: I’ll steal your heart and you’ll steal mine",
  "Let’s flip a coin: tails you’re mine, heads I’m yours",
  "Isn’t it beautiful when ‘once upon a time’ turns into an ‘happily ever after’?",
  "Will you lend me a kiss? I promise to give it back",
  "Forget the butterflies, I feel the entire zoo in my stomach when I'm with you!",
  "I think you are suffering from a lack of vitamin ME"]

addEventListener("load", function(){
  quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
})



//animazione cuoricini per il caricamento
let counter = 0;
let arrayHearts=Array.from(document.getElementsByClassName("hearts"))

setInterval(loading, 600)

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



let url = new URL(location.href); 
let input = url.searchParams.get("name1");

setTimeout(experienceOpener, 3600)

function experienceOpener(){
  window.open("experience.html?name1="+ input, "_self")
}
