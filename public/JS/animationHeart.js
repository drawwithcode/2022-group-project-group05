
class Heart {
    constructor(e, x, y){
        this.e= new Image(100,100);
        this.x = x;
        this.y = y;
    }
    move() {
    this.y--
    }
}

let cnv;
let heart;

let heartCnv= document.getElementById("animationHeart")
let heartCtx;
let heartImage;
let arrayHeart= [];

document.addEventListener("click",spawnHeart);


function spawnHeart(){

    //heartCtx= heartCnv.getContext("2d");
    heartImage= new Image(40,40)
    heartImage.src='./assets/elements/animationHeart.svg';
    heartImage.style ="position:fixed";
    //document.body.appendChild(heartImage);
    heartCnv.appendChild(heartImage);

    let xHeart= Math.random()*(400);
    let yHeart=Math.random()*(400);
    console.log(xHeart,yHeart)

    if (xHeart>100 || xHeart<300){
    
    heart= new Heart(heartImage, xHeart, yHeart)

    arrayHeart.push(Heart)
    console.log(arrayHeart)
    console.log(heart)
    }

    //arrayHeart.forEach(move())
}
