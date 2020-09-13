  
 var bullet, wall, speed, weight, thickness;

 function setup() {
  createCanvas(1500,150);
  
  speed= random(223,321);
  weight= random(30,50);
  thickness= random(22,85);

  bullet=createSprite(50, 80, 10, 50);
  bullet.shapeColor= "white";

  wall= createSprite(1450,70,20,150);
  wall.shapeColor= "brown";

  bullet.velocityX= speed;

 }

 function draw() {

  background("lightblue");  
 
  if (collide(bullet,wall)) {

  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(damage>10){

  wall.shapeColor= "red";
  
  }
  if(deformation<10){

  wall.shapeColor= "green";
  
  }

  }

  drawSprites();

 }

 function collide (bullet, wall) {
   
  bulletREdge= bullet.x + bullet.width;
  wallLEdge= wall.x;
  if(bulletREdge>= wallLEdge) {
  return true;

 }
  return false;
  
 }