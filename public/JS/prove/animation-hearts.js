
windowWidth = window.innerWidth
windowHeight = window.innerHeight


//////CUORICINI
let heartImage;
let arrayHeart= [];

class Heart {
  constructor(x, y){
      this.x = x;
      this.y = y;
  }
  move() {

    this.y= this.y-2

    p2.push();

      p2.translate(this.x, this.y);
      p2.image(heartImage, 0, 0);

    p2.pop()
  }
}


sketch = function(p) {

  p.preload = function(){
    
    heartImage = p.loadImage('./assets/elements/animationHeart.svg');
  }

  p.setup = function() {
    p.createCanvas(windowWidth, windowHeight);
    p.noStroke();
    p.colorMode(p.RGB, 255, 255, 255);
    p.frameRate(24)

    p.canvas.id = "animation-hearts"
  }

  addEventListener("resize", (event) => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    p.resizeCanvas(windowWidth, windowHeight)});

}

let p2 = new p5(sketch)
p2.draw= function(){
  p2.clear()
  p2.canvas.id = "animation-hearts"
  for(let i = 0; i < arrayHeart.length; i++) {arrayHeart[i].move()}
}
//NEW HEART ON CLICK
document.addEventListener("click", clickHeart);

function clickHeart(){

  let xHeart= p2.mouseX
  let yHeart= p2.mouseY

  arrayHeart.push(new Heart(xHeart, yHeart))
}

setInterval(spawnHeart,1500)

//HEART SPAWNING
function spawnHeart(){
  
  let xHeart= p2.random(0, p2.canvas.width)
  let yHeart= p2.canvas.height

  arrayHeart.push(new Heart(xHeart, yHeart))
  
}