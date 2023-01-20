//////CANVAS
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

let p1;//bg
let ctx;//contesto sketch1

let p2;//hearts




//CREO LA CLASSE DELLE CANVAS
let sketch = function(p) {

  p.preload = function(){
    heartImage = p.loadImage('assets/SVG/iconHeart.svg');
  }

  p.setup = function() {

    p.createCanvas(windowWidth, windowHeight);
    p.noStroke();
    p.colorMode(p.RGB, 255, 255, 255);
    p.pixelDensity(1)
    p.frameRate(24)
  }

//////imposto la funzione per adattare la dimensione della canva alla window
  addEventListener("resize", (event) => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    p.resizeCanvas(windowWidth, windowHeight)
  });

}





//DITHERED GRADIENT
let seed=0.0;
let userColor = "#FF36F7";

const thresholdMaps = [
    [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5],
    ],
    [
      [0, 48, 12, 60, 3, 51, 15, 63],
      [32, 16, 44, 28, 35, 19, 47, 31],
      [8, 56, 4, 52, 11, 59, 7, 55],
      [40, 24, 36, 20, 43, 27, 39, 23],
      [2, 50, 14, 62, 1, 49, 13, 61],
      [34, 18, 46, 30, 33, 17, 45, 29],
      [10, 58, 6, 54, 9, 57, 5, 53],
      [42, 26, 38, 22, 41, 25, 37, 21],
    ],
    [
      [0, 128, 32, 160, 8, 136, 40, 168, 2, 130, 34, 162, 10, 138, 42, 170],
      [192, 64, 224, 96, 200, 72, 232, 104, 194, 66, 226, 98, 202, 74, 234, 106],
      [48, 176, 16, 144, 56, 184, 24, 152, 50, 178, 18, 146, 58, 186, 26, 154],
      [
        240, 112, 208, 80, 248, 120, 216, 88, 242, 114, 210, 82, 250, 122, 218,
        90,
      ],
      [12, 140, 44, 172, 4, 132, 36, 164, 14, 142, 46, 174, 6, 134, 38, 166],
      [
        204, 76, 236, 108, 196, 68, 228, 100, 206, 78, 238, 110, 198, 70, 230,
        102,
      ],
      [60, 188, 28, 156, 52, 180, 20, 148, 62, 190, 30, 158, 54, 182, 22, 150],
      [
        252, 124, 220, 92, 244, 116, 212, 84, 254, 126, 222, 94, 246, 118, 214,
        86,
      ],
      [3, 131, 35, 163, 11, 139, 43, 171, 1, 129, 33, 161, 9, 137, 41, 169],
      [195, 67, 227, 99, 203, 75, 235, 107, 193, 65, 225, 97, 201, 73, 233, 105],
      [51, 179, 19, 147, 59, 187, 27, 155, 49, 177, 17, 145, 57, 185, 25, 153],
      [
        243, 115, 211, 83, 251, 123, 219, 91, 241, 113, 209, 81, 249, 121, 217,
        89,
      ],
      [15, 143, 47, 175, 7, 135, 39, 167, 13, 141, 45, 173, 5, 133, 37, 165],
      [
        207, 79, 239, 111, 199, 71, 231, 103, 205, 77, 237, 109, 197, 69, 229,
        101,
      ],
      [63, 191, 31, 159, 55, 183, 23, 151, 61, 189, 29, 157, 53, 181, 21, 149],
      [
        255, 127, 223, 95, 247, 119, 215, 87, 253, 125, 221, 93, 245, 117, 213,
        85,
      ],
    ],
  ];

p1 = new p5(sketch)
p1.draw = function (){

  p1.canvas.id = "bgCanvas"
  ctx= p1.canvas.getContext('2d', {willReadFrequently: true});
    
  //imposto un valore di noise che rende animato il mio gradiente di sfondo
  //rimappo il valore entro un range così che l'animazione sia delicata
  seed= seed + 0.05;
  let val= p1.noise(seed)*600; 
  let valMapped = p1.map(val, 0, p1.height, 400, 600)

  //disegno il gradiente di sfondo
  let gradient = ctx.createLinearGradient(0, valMapped, 0,  p1.height);
  gradient.addColorStop(0, userColor);
  gradient.addColorStop(1, "white");
    
  ctx.fillStyle=gradient;
  p1.rect(0,0,p1.width, p1.height)

  //prendo i dati dei pixel del gradiente
  let imageData = ctx.getImageData( 0, 0, p1.width, p1.height );

  //chiamo la funzione che applica il dither sull'array di pixel del gradiente
  dither(imageData, [imageData.data.buffer]);

  for(let i = 0; i < arrayHeart.length; i++) {arrayHeart[i].move()}//animo l'array di cuoricini

}

//////processo i pixel
function dither (imageData, []){
    // imageData
    const width = imageData.width;
    const pixels = imageData.data;
    const dither =  { mapIndex: [2, 1, 2], colorCount: [2, 4, 2],} //dithers["rgb_4"];
    
    //funzione che rimappa il valore di r, g e b di ogni pixel contenuti nell'arrray
    const intensity = (r, g, b) =>
    Math.floor(0.2126 * r + 0.7152 * g + 0.0722 * b);
    const clamp = (val, min, max) => Math.max(min, Math.min(val, max)); //prende un valore e verifica che sia compreso entro un range
    // quelli minori diventano il minimo, quelli maggiori diventano il massimo

    const map = (val, min1, max1, min2, max2) => ((val - min1) / (max1 - min1)) * (max2 - min2) + min2;
    
    // filter
    for (let i = 0; i < pixels.length; i += 4) {
      const x = (i / 4) % width;
      const y = Math.floor(i / 4 / width);
      const colors = pixels.slice(i, i + 3);
    
      for (let c = 0; c < 3; c++) {
        const thresholdMap = thresholdMaps[dither.mapIndex[c]];
        const mapSide = thresholdMap.length;
        const mapSize = mapSide * mapSide ;
        const threshold = thresholdMap[x % mapSide][y % mapSide];
        const numColors = dither.colorCount[c];

        const color = Math.floor(
          clamp( (numColors * colors[c]) / 256 + threshold / mapSize - 0.5,  0, numColors - 1)
        );
        const nearestColor = Math.floor(map(color, 0, numColors - 1, 0, 255));
    
        pixels[i + c] = nearestColor;
      }
    }
    
    drawCanvas(ctx, imageData);
}

//////ridisegno la canvas con l'array di pixel trasformato
function drawCanvas(cnv, img) {
    cnv.canvas.width = img.width;
    cnv.canvas.height = img.height;
    ctx.putImageData(img, 0, 0);
}






//////CUORICINI
let heartImage;
let arrayHeart= [];


//definisco la classe
class Heart {
  constructor(x, y){
      this.x = x;
      this.y = y;
  }

  move() {

    this.y= this.y-4 //si sposta verso l'alto di 4 pixel

    p1.push();
      p1.translate(this.x, this.y);
      p1.image(heartImage, 0, 0);
    p1.pop()
  }
}

let hasFocus = true;
window.addEventListener("focus", function () { hasFocus=true;})
window.addEventListener("blur", function () { hasFocus=false;})


//NEW HEART ON CLICK
document.addEventListener("click", function(){
  let xHeart= p1.mouseX-heartImage.width
  let yHeart= p1.mouseY-heartImage.height

  if(page!="experience"){
    arrayHeart.push(new Heart(xHeart, yHeart))//al click aggiungo un cuore all'array
  }
})


if (page=="qrcode" || page=="home") {

  //HEART SPAWNING
  setInterval(function(){
    
    let xHeart= p1.random(0, p1.canvas.width)
    let yHeart= p1.canvas.height

    if(hasFocus==true){
      if ( xHeart<p1.canvas.width/4||xHeart>p1.canvas.width*3/4 ){
        arrayHeart.push(new Heart(xHeart, yHeart))
      } else return
    }
  }, 3000)
}
