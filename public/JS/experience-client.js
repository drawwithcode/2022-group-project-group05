var clientSocket = io();

let start = false;

let osc = new p5.Oscillator("sine")
let soundlock = false;

let colArray = [
  "#28DF93",
  "#DC99FB",
  "#EE018A",
  "#15068A",
  "#A65B12"
]

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  osc.amp(1)

  listenerSetup();

  socketSetup();

  let c1 = color(255);
  let c2 = color(random(colArray))
  
  for(let y=0; y<height; y++){
    n = map(y,height,0,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}

function draw() {

}

function startApp() {
  start = true;
  select("#morse").elt.style.display = "block"
  startSend();
}

function listenerSetup() {
  select("#heart").elt.addEventListener("click", startApp)

  selectAll(".bit").forEach(function (bit) {
    bit.elt.addEventListener("click", function (event) {
      let target = event.target;
      target.classList.toggle("active")

      let index = target.id.charAt(1);
      byte[index] = 1 - byte[index];
    })
  })

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
  //clientSocket = io.connect()

  clientSocket.on("morse", morseReceived)
  clientSocket.on("paired", statusUpdate)
  clientSocket.on("unpaired", statusUpdate)
}

function morseSend(value) {
  clientSocket.emit("morse", value)
  console.log(value, "sent")
}

function startSend() {
  clientSocket.emit("start")
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
  let status = select("#status").elt;
  if (data != 0) {
    status.innerHTML = data;
  }
  else {
    status.innerHTML = "Waiting"
  }
}