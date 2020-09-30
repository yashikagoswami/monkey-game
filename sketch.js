var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
  
  monkey = createSprite(60,300,1,1);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,334,800,10);
  ground.velocityX=-10 ;
  ground.x=ground.width/2;
  
  bananaGroup = new Group();
  
  score=0;
  
}


function draw() {
 background(220);
 
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,240,30);
  
  
if (keyDown("space")) {
 monkey.velocityY=-10;
}
  
monkey.velocityY = monkey.velocityY + 0.8; 
monkey.collide(ground);
  
if (ground.x < 0){
      ground.x = ground.width/2;
   } 
  
food();
obstacles();
    
 drawSprites(); 
}

function food() {
 if (frameCount % 60 === 0) {
   var banana = createSprite(400,250,1,1); 
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-10;
   banana.lifetime=-1;
   
   bananaGroup.add(banana);
 }
}

function obstacles() {
 if (frameCount % 300   === 0) {
   var obstacle = createSprite(400,313,1,1);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1;
   obstacle.velocityX=-10;
   obstacle.lifetime=-1;
 }
}