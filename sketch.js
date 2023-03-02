var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  
createCanvas(400,400);

path = createSprite(200,0)
path.addImage(pathImg)
path.scale=1.2;
path.velocityY = 4

boy = createSprite (220,0)
boy.addAnimation("menino", boyImg)
boy.scale=0.08;
  
leftBoundary=createSprite(0,200,10,400);
leftBoundary.visible = false;

rightBoundary=createSprite(400,200,10,400);
rightBoundary.visible = false;
}

function draw() {
  background(0);

  boy.position.x = mouseX;

  
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
