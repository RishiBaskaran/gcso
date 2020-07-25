var rectangle1,rectangle2;


function setup() {
  createCanvas(800,400);
  rectangle1 = createSprite(400, 200, 40, 50);
  rectangle2 = createSprite(200,200,30,40)
  rectangle1.shapeColor = "red";
  rectangle2.shapeColor = "red";
  rectangle1.velocityX = -3;
 // rectangle1.velocityY = -3;
}

function draw() {
  background(255,255,255);  
 // rectangle2.x = World.mouseX;
  //rectangle2.y = World.mouseY;

if(rectangle1.x - rectangle2.x < rectangle1.width/2 + rectangle2.width/2 && 
  rectangle2.x - rectangle1.x < rectangle1.width/2 + rectangle2.width/2 &&
  rectangle1.y - rectangle2.y < rectangle1.height/2 + rectangle2.height/2 &&
  rectangle2.y - rectangle1.y < rectangle1.height/2 + rectangle2.height/2){
//rectangle1.shapeColor = "blue";
//rectangle2.shapeColor = "blue";
rectangle1.velocityX = rectangle1.velocityX * (-1);
}

  drawSprites();
}