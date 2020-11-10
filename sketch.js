var player;
var edges;
var boyImage,bacGImage,enemyImage,coronaImage,schoolImage,CCImage;
var engine,world;
var corona1,corona2,corona3,coron4;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16;
var edges;

function preload(){
   bacGImage=loadImage("Pictures/Background.png");
   enemyImage=loadImage("Pictures/Antagonists.png");
   coronaImage=loadImage("Pictures/Corona.png");
   CCImage=loadImage("Pictures/Community Center.png")
   schoolImage=loadImage("Pictures/School Image.png")
}
function setup(){
    createCanvas(displayWidth-30,displayHeight-150);
    corona1=createSprite(770,390,30,30);
    corona1.addImage(coronaImage);
    corona1.scale=0.1;
    corona1.velocityX=2;
    corona1.setCollider("circle",0,0,40);

    corona2=createSprite(25,685,30,30);
    corona2.addImage(coronaImage);
    corona2.scale=0.1

    corona3=createSprite(1485,685,30,30);
    corona3.addImage(coronaImage);
    corona3.scale=0.1

    corona4=createSprite(1465,25,30,30);
    corona4.addImage(coronaImage);
    corona4.scale=0.1



  player=new Boy();
  wall1=createSprite(50,100,200,20);
  wall2=createSprite(350,100,20,200);
  wall3=createSprite(250,250,20,300);
  wall4=createSprite(550,450,20,500);
  wall5=createSprite(250,650,300,20);
  wall6=createSprite(200,550,20,100);
  wall7=createSprite(350,450,20,200);
  wall8=createSprite(735,275,20,200);
  /*wall9=new Wall();
  wall10=new Wall();
  wall11=new Wall();
  wall12=new Wall();
  wall13=new Wall();
  wall14=new Wall();
  wall15=new Wall();
  wall16=new Wall();       
   
   */
}
function draw(){
   background(255,235,149);

   player.display();
   player.control();
   
   console.log(mouseX,mouseY);
   edges=createEdgeSprites();

   corona1.bounceOff(edges);
   player.boy.collide(wall1)
   player.boy.collide(wall2);
   player.boy.collide( wall3);
   player.boy.collide(wall4);
   player.boy.collide(wall5);
   player.boy.collide(wall6);
   player.boy.collide(wall7);
   player.boy.collide(wall8);
   
   console.log(player.boy.height/2);

   image(bacGImage,500,0,250,100);
   image(schoolImage,1005,610,250,100);
   image(CCImage,1270,205,250,100);

   drawSprites();

   
   
}

