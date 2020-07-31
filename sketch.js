var car,wall;


function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 100, 50);
 wall = createSprite(200,200,20,40)
  car.shapeColor = "gray";
  wall.shapeColor = "white";
wall.velocityX = 5;
 // rectangle1.velocityY = -3;
}

function draw() {
  background(255,255,255);
  background("black");
 // rectangle2.x = World.mouseX;
  //rectangle2.y = World.mouseY;

if(car.x - wall.x < car.width/2 + wall.width/2 && 
  wall.x - car.x < car.width/2 + wall.width/2 &&
car.y - wall.y < wall.height/2 + car.height/2 &&
  wall.y - car.y < car.height/2 + wall.height/2){
car.shapeColor = "blue";
//rectangle2.shapeColor = "blue";
car.velocityX = car.velocityX * (-1);
}

  drawSprites();
}
