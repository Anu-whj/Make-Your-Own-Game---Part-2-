var maskman, maskman_Image;
var road, road_Image;

function preload(){
  road_Image = loadImage("Road.jpg");
  maskman_Image = loadImage("Person_Masked1.png");
  //background_Image = loadImage("Background.png");
}

function setup() {
  createCanvas(1200, 800);
  
  road = createSprite(300,100,400,100);
  road.addImage(road_Image);
  road.width = 8000;
  //road.height = 12000;
  road.y = road.height/2;
  road.velocityY = -4;
  road.scale = 5.0;
  
  maskman = createSprite(300,100,40,40);
  maskman.addImage(maskman_Image);
  maskman.width = 40;
  maskman.height = 40;
  //maskman.velocityY = 2;
  maskman.visibility = true;
  
}

function draw() {
  background(147, 139, 128);
  
  //road_Image.velocityY = -4;
  
  if (road.y < 0){
      road.y = road.height/2;
  }
    
  
  drawSprites();
}