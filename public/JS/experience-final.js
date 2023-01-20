//setup connessione
var clientSocket = io();

function listenerSetup() {
  select("#morse").elt.addEventListener("mousedown", function (event) {
    event.target.classList.add("active");
    morseSend(true)
  })

  select("#morse").elt.addEventListener("touchstart", function (event) {
    event.target.classList.add("active");
    morseSend(true)
  })

  document.addEventListener("mouseup", function () {
    let morse = select("#morse").elt;
    if (morse.classList.contains("active")) {
      morse.classList.remove("active")
      morseSend(false)
    }
  })

  document.addEventListener("touchend", function () {
    let morse = select("#morse").elt;
    if (morse.classList.contains("active")) {
      morse.classList.remove("active")
      morseSend(false)
    }
  })
}

function socketSetup() {
  clientSocket.on("morse", morseReceived)
  clientSocket.on("paired", statusUpdate)
  clientSocket.on("unpaired", statusUpdate)
  clientSocket.on("success", successReceive)
}

function morseSend(value) {
  clientSocket.emit("morse", value)
  console.log(value, "sent")
}

function startSend() {
  clientSocket.emit("start", userColor)
}

function readySend() {
  clientSocket.emit("ready", username)
}

function morseReceived(data) {
  if (data == 1) {
    osc.start();
  }
  else {
    osc.stop();
  }
  console.log(data)
}

function statusUpdate(data) {
  if (data == 0) {
    paired = false;
    userColor = "#FF36F7";
    startLoading();
  }
  else {
    userColor = data.userColor
    pairColor = data.pairColor
    paired = true;
    stopLoading();
  }
}

function startApp() {
  if(!start){
    start = true;
    select("#morse").elt.style.display = "block"
    startSend();
  }
}

//setup status
let start = false;
let paired = false;
let pairColor;

//setup oscillatore
let osc = new p5.Oscillator("sine")

//setup camera
let video;
let videoReady = false;

let subimage;
let subW;
let subH;
let subX;
let subY;

//let d; //= pixelDensity()
let startingPosition; // = 4 * d * (subY * video.width + subX)

//setup bottoni
document.getElementById('morse').oncontextmenu = function (event) {
  //disabilita menù a tendina quando tieni premuto
  event.preventDefault();
  event.stopPropagation(); 
  event.stopImmediatePropagation();
  return false;
};

//p5 setup
function setup() {
  noCanvas()
  frameRate(24);
  //setup video
  video = createCapture({
    audio: false,
    video: {
        facingMode: {
          ideal: "user",
        }
    }
}, function() {
    console.log('capture ready')
    videoReady = true

    subW = Math.round(video.width / 2)
    subH = Math.round(video.height / 4)
    subX = Math.round(video.width / 2 - subW / 2)
    subY = Math.round(video.height - subH)

    //d = pixelDensity()
    startingPosition = 4 * (subY * video.width + subX)
});
  video.hide();

  video.elt.setAttribute('playsinline', '');

  //setup oscillator
  osc.amp(1)

  listenerSetup();

  socketSetup();
}

function draw() {

  if (paired && videoReady) {
    if (colorSearch(pairColor)) {
      successFind();
    }
  }
  
}

const PIXEL_TRESHOLD = 50 //max 422 min 0
const PERCENT_THRESHOLD = 0.7 //max 1 min 0

function colorSearch(targetHex) {
  let total = 0;
  let target = color(targetHex)

  let r = red(target)
  let g = green(target)
  let b = blue(target)

  

  video.loadPixels()

  p1.push()
  p1.stroke(255)
  //p1.translate(p1.width / 2 + subW / 2, p1.height * 2 / 3 - subH / 2)
  //p1.scale(-1,1)
  //p1.image(sub, 0, 0)
  
  let distanceTotal = 0;
  
  for (let x = 0; x < subW; x++){
    for (let y = 0; y < subH; y++){
      let index = startingPosition + (4  * (y * subW + x))

      let diffR = Math.abs(video.pixels[index + 0] - r)
      let diffG = Math.abs(video.pixels[index + 1] - g)
      let diffB = Math.abs(video.pixels[index + 2] - b)

      let distance = Math.sqrt(diffR * diffR + diffG * diffG + diffB * diffB)
      distanceTotal += distance;
      
      if (distance < PIXEL_TRESHOLD) {
        total++
      }
    }
  }
  let avgDist = distanceTotal / (subH * subW)
  //p1.textSize(20)
  p1.text(Math.round(avgDist*100)/100 + " success%: " + (total / (subH * subW)), 10, 10)
  let result = (total / (subH * subW) > PERCENT_THRESHOLD)

  return result
}

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

//window onload
addEventListener("load", function(){
  quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
  startLoading()
  setTimeout(readySend, 1000)
})



//animazione cuoricini per il caricamento
let counter = 0;
let arrayHearts = Array.from(document.getElementsByClassName("hearts"))
const HEART_TIME = 300;

let loadingTimer;

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

//variabili stato pagina
let url = new URL(location.href); 
//let input = url.searchParams.get("name1");
let username = sessionStorage.getItem("name")


function stopLoading() {
  //nascondi elementi loading
  document.getElementById("quotes").classList.add("hidden")
  document.getElementById("arrayHearts").classList.add("hidden")

  //ferma animazione
  clearInterval(loadingTimer)    

  //mostra tasto cuore
  document.getElementById("heart-container").classList.remove("hidden")
}

function startLoading() {
  //mostra elementi loading
  console.log("start loading")
  document.getElementById("quotes").classList.remove("hidden")
  document.getElementById("arrayHearts").classList.remove("hidden")

  //avvia animazione
  loadingTimer = setInterval(loading, HEART_TIME)

  //nascondi tasto cuore
  document.getElementById("heart-container").classList.add("hidden")
}

function successFind() {
  clientSocket.emit("success")
}

function successReceive(data) {
  console.log(data)

  sessionStorage.setItem("msg1", JSON.stringify(data.msg1))
  sessionStorage.setItem("color1", data.color1)
  sessionStorage.setItem("name1", data.name1)

  sessionStorage.setItem("msg2", JSON.stringify(data.msg2))
  sessionStorage.setItem("color2", data.color2)
  sessionStorage.setItem("name2", data.name2)

  location.href="output.html"
}