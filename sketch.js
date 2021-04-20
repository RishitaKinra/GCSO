var car, wall, speed, weight;


function setup() {
  createCanvas(windowWidth,windowHeight);
  car = createSprite(50, windowHeight/2, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
  car.shapeColor = "purple";
  wall = createSprite(windowWidth-50,windowHeight/2,60,windowHeight);
  wall.shapeColor = "white";
}

function draw() {
  background(0); 
  
  if(wall.x-car.x < (car.width  + wall.width)/2){
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed^2)/22500;

    if(deformation> 180){
      car.shapeColor = "blue";
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = "seablue";
    }

    if(deformation < 100){
      car.shapeColor = "cadetblue";
    }
  }

  drawSprites();
}