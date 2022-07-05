var tank1,tank2,tank1_img,tank2_img
var backGroundimg,background
var missle,missel1,missel2
var missleGroup1,missleGroup2
var life1=5
var life2=5
var gameState="play"
function  preload(){
    tank1_img = loadImage("assets/Tank1.png")
    tank2_img = loadImage("assets/Tank2.png")
    backGroundimg = loadImage("assets/bg.jpg")

} 
    
function setup(){
  createCanvas(windowWidth,windowHeight)

  
    tank1 = createSprite(width - 200,height/2)
    tank1.addImage(tank1_img)
    tank1.scale = 0.25

    tank2 = createSprite(400,height/2)
    tank2.addImage(tank2_img)
    tank2.scale = 0.35
    image(backGroundimg,0,0,width,height)

    missleGroup1 = new Group()
    missleGroup2 = new Group()
    
}

function draw() {
    image(backGroundimg,0,0,width,height)
 //background("green")
 if(gameState==="play"){
keyPressed()
if(missleGroup1.isTouching(tank2)){
life2-=1
if(life2<=0){
   gameState="end"
}
}

if(missleGroup2.isTouching(tank1)){
    life1-=1
    if(life1<=0){
        gameState="end"
    }
}
 }

 if(gameState==="end"){
    background("black")
    text("Game_Over")
 }

/*if(keyIsDown("UP_ARROW")){
    tank1.y -= 10
}
if(keyIsDown("DOWN_ARROW")){
    tank1.y += 10
}


if(keyIsDown("w")){
    tank2.y -= 10
}
if(keyIsDown("s")){
    tank2.y += 10
}*/
    drawSprites()
}


function keyPressed(){
    if(keyDown("UP_ARROW")){
        tank1.position.y -= 10
    }
    if(keyDown("DOWN_ARROW")){
        tank1.position.y += 10
    }
    
    
    if(keyDown("w")){
        tank2.position.y -= 10
    }
    if(keyDown("s")){
        tank2.position.y += 10
    }

    if(keyDown("m")){
        LaunchMissle1()
    }

    if(keyDown("z")){
        LaunchMissle2()
    }

}

function LaunchMissle1()
{
if(frameCount%20===0){


    missel1 = createSprite(tank1.position.x,tank1.position.y,20,20)
missel1.velocity.x=-5
missleGroup1.add(missel1)
}
}

function LaunchMissle2()
{
if(frameCount%20===0){
    missel2 = createSprite(tank2.position.x,tank2.position.y,20,20)
    missel2.velocity.x=5
missleGroup2.add(missel2)}
}