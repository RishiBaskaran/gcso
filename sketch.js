var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
 
  
 
 // rectangle1.velocityY = -3;

}

function draw() {
  background(255,255,255);
  background("black");
  car = createSprite(50, 200, 50, 50);
  car.shapeColor ="white";
  
 wall = createSprite(1200,200,60,40);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation > 180){
      wall.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      wall.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
