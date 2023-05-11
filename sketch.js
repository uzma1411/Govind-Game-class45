var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obs1Image,obs2Image, obs3Image, obs4Image

function preload() {
  bgImg = loadImage("assets/cityimage.png")

  balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png")

  obs1Image = loadImage("assets/obsBottom1.png");
  

}

function setup() {

  createCanvas(windowWidth, windowHeight)

  bottomGround = createSprite(200, 500, 800, 20);
  bottomGround.visible = true;

  topGround = createSprite(200, 10, 800, 20);
  topGround.visible = true;

  //creating balloon     
  balloon = createSprite(100, 200, 20, 50);
  balloon.addAnimation("balloon", balloonImg);
  balloon.scale = 0.2;

  edges = createEdgeSprites()


}

function draw() {

  background(bgImg);

  balloon.bounceOff(edges)
  //making the hot air balloon jump
  if (keyIsDown(UP_ARROW)) {
    balloon.y -=20;
  }

  if(keyIsDown(RIGHT_ARROW)){
    balloon.x +=10
  }

  if(keyIsDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10
  }

  balloon.collide(bottomGround)
  balloon.collide(topGround)

  //adding gravity
  balloon.y = balloon.y + 5;

  drawSprites();

}