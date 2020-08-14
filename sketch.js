var bullet,wall;
var speed,weight;
var damage,thickness;
//var tracks

function setup() {
  createCanvas(1600,400);

  //creating speed and weight for bullet
  speed = random(223,321);
  weight = random(30,52);

  thickness = random(22,83);

  //creating bullet and wall
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = color(0,0,0);
  wall = createSprite(1200, 200, thickness, height/2);
  
  //giving speed to the bullet
  bullet.velocityX = speed;
 
}

function draw() {
  background(0); 
  //giving colour to the wall
  wall.shapeColor = color(80,80,80);
  
  //creating track lines
  //for (let i = 0; i < 1100; i = i + 200) {
  //  tracks = createSprite(i,200,100,30);    
  //}

  //danger stste
  if (isTouching(wall,bullet)) {
   bullet.shapeColor = color(250,0,0);
  }else{  
   bullet.shapeColor = color(0,250,0);
  }

  drawSprites();
}