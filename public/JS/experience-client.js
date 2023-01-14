var clientSocket = io();

let start = false;
let paired = false;

let osc = new p5.Oscillator("sine")

let video;

let subimage;
let subW;
let subH;
let subX;
let subY;

let total = 0;
let threshold = 3;
let targetPercent = 0.7;

let colArray = [
  "#28DF93",
  "#DC99FB",
  "#EE018A",
  "#15068A",
  "#A65B12"
]

let userColor;
let pairColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(20);

  //setup video
  video = createCapture(VIDEO)
  video.hide();

  let subW = Math.round(video.width / 10)
  let subH = Math.round(video.height / 10)
  let subX = Math.round(video.width / 2 - subW / 2)
  let subY = Math.round(video.height / 2 - subH / 2)

  video.elt.setAttribute('playsinline', '');
  
  //setup oscillator
  osc.amp(1)

  listenerSetup();

  socketSetup();

  //pick bg color
  userColor = random(colArray)

  //gradient bg
  let c1 = color(255);
  let c2 = color(userColor)
  
  for(let y=0; y<height; y++){
    n = map(y,height,0,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}

function draw() {
  if (paired) {
    if (checkColor()) {
      pairFound();
    }
  }
}

function checkColor() {
  total = 0;
  subimage = video.get(subX, subY, subW, subH)
  rect(subX, subY, subW, subH)
  for (let x = 0; x < subW; x++) {
    for (let y = 0; y < subH; y++){
      /* let r = subimage.pixels[i]
      let g = subimage.pixels[i + 1]
      let b = subimage.pixels[i + 2] */

      let pixel = get(subX + x, subY + y)
      
      /* var diff =
        Math.abs(red(pixel) - targetColor[0]) +
        Math.abs(green(pixel) - targetColor[1]) +
        Math.abs(blue(pixel) - targetColor[2]); */
      
      var diff = Math.abs(hue(pixel) - hue(pairColor))
      
      if (diff < threshold) {
        total++
      }
    }
  }

  return (total/(subW*subH) > targetPercent) 
}

function pairFound() {
  window.alert("evviva evviva evvivaevvivaevvivaaaa")
}

function startApp() {
  if(!start){
    start = true;
    select("#morse").elt.style.display = "block"
    startSend();
  }
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
  clientSocket.emit("start", userColor)
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
  if (data == 0) {
    status.innerHTML = "Waiting";
    paired = false;
  }
  else {
    status.innerHTML = data.id
    pairColor = data.color
    paired = true;
  }
}