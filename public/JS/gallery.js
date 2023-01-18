import { artwork } from "/public/JS/firebase.js"

//imposto una funzione che controlla quando vengono importati i dati dal database ogni 100 millisecondi
let loadingTime = setInterval( ()=>{

  if (artwork!=undefined){ //se artwork esiste allora visualizzo la galleria

    setTimeout( galleryCreation ,1800)
    clearInterval(loadingTime, loadingQuotes);

  } else quotesDisplay //altrimenti chiamo l'animazione di loading

}, 100)


let outputs= []
let container= document.getElementById("img-ctn")

function galleryCreation () {
  
  document.body.classList.add("active"); //cambio il flex del div
  (document.getElementById("loading")).style.display="none";

  //creo un array a partire dai dati importati dal database
  outputs= Object.keys(artwork).map( function(key) {
      return artwork[key];
    });

  outputs.forEach(element => {
    
    let imgdata= document.createElement("img")
    
    imgdata.src= element.data;
    imgdata.classList.add("artwork");
    
    container.appendChild(imgdata);
    document.body.appendChild(imgdata);

  })
}


//LOADING
//scelta randomica delle frasi
let quote= document.getElementById("quotes");

let quotes=[
  "You call it madness, but I call it love",
  "If you can’t love yourself how the hell you’re gonna love somebody else?",
  "All you need is love",
  "True love stories never have endings",
  "Let’s commit a perfect crime: I’ll steal your heart and you’ll steal mine",
  "Let’s flip a coin: tails you’re mine, heads I’m yours",
  "Isn’t it beautiful when ‘once upon a time’ turns into and ‘happily ever after’?",
  "Will you lend me a kiss? I promise to give it back",
  "Forget the butterflies, I feel the entire zoo in my stomach when I'm with you!",
  "I think you are suffering from a lack of vitamin ME"]

  
quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

//animazione cuoricini per il caricamento
let counter = 0;
let arrayHearts=Array.from(document.getElementsByClassName("hearts"));


let loadingQuotes= setInterval(quotesDisplay, 600)

function quotesDisplay(){

  for (let i=0;i<=2;i++){
      arrayHearts[i].classList.remove("move")
  }
  
  if (counter>2){
      counter=0;

  } else {
      arrayHearts[counter].classList.add("move")
  }
  
  counter++
}
