var clientSocket = io();

let start = false;

let osc = new p5.Oscillator("sine")
let soundlock = false;

let byte = [];

const BIT_DURATION = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  osc.amp(1)

  for (let i = 0; i < 8; i++){
    byte.push(0)
  }

  listenerSetup();

  socketSetup();
  
}

function draw() {
  if (start) {
    push()
    stroke(255)
    translate(0, 0.5*height)
    line(0, 0, width, 0)
    pop()
  }
}

function startApp() {
  start = true;
  select("#start").elt.style.display = "none"
  select("#byte").elt.style.display = "flex"
  select("#bitsend").elt.style.display = "block"
  select("#morse").elt.style.display = "block"
}

function listenerSetup() {
  select("#start").elt.addEventListener("click", startApp)

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

  select("#bitsend").elt.addEventListener("click", bitSend)
}

function socketSetup() {
  clientSocket = io.connect()

  clientSocket.on("morse", morseReceived)
  clientSocket.on("bitsend", bitSendReceived)
}

function bitSend() {
  clientSocket.emit("bitsend", byte)
  console.log(byte, "sent")
}

function morseSend(value) {
  clientSocket.emit("morse", value)
  console.log(value, "sent")
}

async function bitSendReceived(data) {
  if (!soundlock) {
    soundlock = true;
    setTimeout(function () {
      soundlock = false;
    }, BIT_DURATION*8)

    for (let i = 0; i < data.length; i++){
      if (data[i] == 1) {
        osc.start();
        if (i == data.length - 1) {
          await sleep(BIT_DURATION)
          osc.stop();
        }
      }
      else {
        osc.stop();
      }

      await sleep(BIT_DURATION)
    }
  }
  console.log(data)
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}