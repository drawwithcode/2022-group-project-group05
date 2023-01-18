//////CUORICINI
let heartImage;
let arrayHeart= [];

let p2= document.getElementById("bgCanvas")
console.log(p2)

//definisco la classe
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

//if (page=="home"){
  //p2 = new p5(sketch)

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

  //HEART SPAWNING
  setInterval(spawnHeart,3000)
  function spawnHeart(){
    
    let xHeart= p2.random(0, p2.canvas.width)
    let yHeart= p2.canvas.height
    arrayHeart.push(new Heart(xHeart, yHeart))
    
  }