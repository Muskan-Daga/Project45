const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
 
var bg;
var engine,world;
var girl,home,hospital,virus,germ,aeroplane,bus,cigarette,mask,sanitizer,vaccine,gathering,veggie,fruits,pizza,bfc_junk;
var girl1,home1,hospital1,virus1,germ1,aeroplane1,bus1,cigarette1,mask1,sanitizer1,vaccine1,gathering1,veggie1,fruits1,pizza1,bfc_junk1;

function preload(){
bg=loadImage("bg.jpg");
girl1=loadImage("girlfinal.png");
home1=loadImage("home.png");
hospital1=loadImage("hospital.png");
virus1=loadImage("virus.png");
germ1=loadImage("germ.png");
aeroplane1=loadImage("aeroplaneimg.jpg");
bus1=loadImage("busimg.jpg");
cigarette1=loadImage("Cigaretteimg.jpg");
mask1=loadImage("maskimg.jpg");
sanitizer1=loadImage("sanitizerimg.jpg");
vaccine1=loadImage("vaccineimg.jpg");
gathering1=loadImage("gathering.png");
veggie1=loadImage("veggie.jpg");
fruits1=loadImage("fruits.jpg");
pizza1=loadImage("pizza.png");
bfc_junk1=loadImage("bfc_junk.png");
}

function setup() {

  engine=Engine.create();
  world=engine.world;

  createCanvas(displayWidth,displayHeight);
  
  girl=createSprite(50,displayHeight-200,50,50);
  girl.addImage(girl1);
  girl.scale=0.25;

  home=createSprite(displayWidth-150,displayHeight-750,50,50);
  home.addImage(home1);
  home.scale=0.75;

  hospital=createSprite(displayWidth-150,displayHeight-200,50,50);
  hospital.addImage(hospital1);
  hospital.scale=0.5;
}

function draw() {
  background(bg);
 
  Engine.update(engine);

  spawnvirus();
  spawngerm();

  drawSprites();
}

function spawnvirus(){
  if(frameCount % 70 === 0){
    virus=createSprite(displayWidth,displayHeight/2,10,10);
    virus.addImage(virus1);
    virus.scale=0.1;
    virus.velocityX=-2;
    virus.x=Math.round(random(displayWidth,displayWidth+500));    
    virus.y=Math.round(random(10,displayHeight));
  }
}
  function spawngerm(){
    if(frameCount % 70 === 0){
      germ=createSprite(displayWidth/2,displayHeight,10,10);
      germ.addImage(germ1);
      germ.scale=0.1;
      germ.velocityY=-2;
      germ.x=Math.round(random(displayWidth-1200,displayWidth));    
      germ.y=Math.round(random(displayWidth,10)); 
  
  }
}
