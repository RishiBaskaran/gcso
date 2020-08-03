var car,wall;
var speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(400, 200, 100, 50);
 wall = createSprite(200,200,20,40)
  car.shapeColor ="white";
  wall.shapeColor = color(80,80,80);
 car.velocityX = "speed";
 // rectangle1.velocityY = -3;

}

function draw() {
  background(255,255,255);
  background("black");
 // rectangle2.x = World.mouseX;
  //rectangle2.y = World.mouseY;

/*if(car.x - wall.x < car.width/2 + wall.width/2 && 
  wall.x - car.x < car.width/2 + wall.width/2 &&
car.y - wall.y < wall.height/2 + car.height/2 &&
  wall.y - car.y < car.height/2 + wall.height/2){
car.shapeColor = "blue";
//rectangle2.shapeColor = "blue";
//car.velocityX = car.velocityX * (-1);
  car.velocityX = 0;
}
 */
  
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
