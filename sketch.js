
var gun, bomb, skull, diamond , bullet , backGround;

var gunImage, frontImage , skullImage, blastImage,gameOverImage , diamondImage, bulletImage , bombImage , backGroundImage;
var skullGroup, bombGroup, diamondGroup , bulletGroup;
var heading , scoreboard;

var life =3;
var score=0;
var gameState=1
 
function preload(){
   gunImage = loadImage("gun.png")
   blastImage = loadImage("blast.png")
   bulletImage = loadImage("bullet.png")
   frontImage = loadImage("start.png")
   skullImage = loadImage("skull.png")
   bombImage = loadImage("bomb.png")
   diamondImage = loadImage("diamond.png")
   backGroundImage = loadImage("back.jpg")
}

function setup() {
   createCanvas(900, 900);

   backGround= createSprite(50, width/2, 100,height);
   backGround.addImage(backGroundImage)
   
   gun= createSprite(100, height/2, 50,50);
   gun.addImage(gunImg)
   gun.scale=0.2
   
   bulletGroup = createGroup();   
   skullGroup = createGroup();   
  bombGroup = createGroup();
  diamondGroup = createGroup();   
   
   heading= createElement("h1");
   scoreboard= createElement("h1");
}

function draw() {
   background("#BDA297");
   
   heading.html("Life: "+life)
   heading.style('color:red'); 
   heading.position(150,20)
 
   scoreboard.html("Score: "+score)
   scoreboard.style('color:red'); 
   scoreboard.position(width-200,20)
 
   if(gameState===1){
     gun.y=mouseY  
 
     if (frameCount % 80 === 0) {
       drawSkull();
     }
  
     if(keyDown("space")){
       shootBullet();
     }
     
     if (frameCount % 120 === 0){
       drawBomb();
     }
     
     if (skull.collide(backBoard)){
       handleGameover(skullGroup);
     }
     
         drawSprites();
   }
     
   
 }
 
 function drawSkull(){
   skull = createSprite(800,random(20,780),40,40);
   skull.addImage(skullImage);
   skull.scale = 0.1;
   skull.velocityX = -8;
   skull.lifetime = 400;
   skullGroup.add(bluebubble);
 }
 function drawBomb(){
   bomb = createSprite(800,random(20,780),40,40);
   bomb.addImage(bombImage);
   bomb.scale = 0.1;
   bomb.velocityX = -8;
   bomb.lifetime = 400;
   bombGroup.add(bomb);
 }
 
 function shootBullet(){
   bullet= createSprite(150, width/2, 50,20)
   bullet.y= gun.y-20
   bullet.addImage(bulletImage)
   bullet.scale=0.12
   bullet.velocityX= 7
   bulletGroup.add(bullet)
 }
 
 function handleSkullCollision(skullGroup){
     if (life > 0) {
        score=score+1;
     }
 
      blast= createSprite(bullet.x+60, bullet.y, 50,50);
     blast.addImage(blastImage) 
   
     blast.scale=0.3
     blast.life=20
     bulletGroup.destroyEach()
    skullGroup.destroyEach()
   //hiiiiiii  
   }

   function handleGameover(skullGroup){
  
      life=life-1;
     skullGroup.destroyEach();
      
  
      if (life === 0) {
        gameState=2
        
        swal({
          title: `Game Over`,
          text: "Oops you lost the game....!!!",
          text: "Your Score is " + score,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
          imageSize: "100x100",
          confirmButtonText: "Thanks For Playing"
        });
      }
    
  }