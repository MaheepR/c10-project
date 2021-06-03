var sea,seaImg;
var ship,ship_moving;

function preload(){
seaImg.loadImage("sea.png");

ship_moving.loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(50,160,20,50);
  ship.addAnimation("moving",ship_moving);

  sea=createSprite(400,180,800,10);
  sea.addImage("sea",seaImg);
  sea.x=width/2
}

function draw() {
  background("blue");
 sea.velocityX=-2;
 console.log(ship.x);

 if(sea.x<0){
sea.x=sea.width/2;
 }
drawSprites();
 
}