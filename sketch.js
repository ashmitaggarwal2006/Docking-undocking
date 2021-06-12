var bg;
var spacecraft,space1,space2,space3,space4;
var hasDocked=false;


function preload(){
  bg=loadImage("Docking-undocking/spacebg.jpg");
  spacecraftimg=loadImage("Docking-undocking/iss.png");
  space1=loadImage("Docking-undocking/spacecraft1.png");
  space2=loadImage("Docking-undocking/spacecraft2.png");
  space3=loadImage("Docking-undocking/spacecraft3.png");
  space4=loadImage("Docking-undocking/spacecraft4.png");
}


function setup() {

  createCanvas(800,400);
 iss = createSprite(330, 130);
 iss.addImage(spacecraftimg)
 iss.scale=0.15
  spacecraft=createSprite(285,240);
  spacecraft.addImage(space1);
  spacecraft.scale=0.18;
}




function draw() {
  background(bg); 
  spacecraft.addImage(spacecraftimg)
 if(!hasDocked){
   spacecraft.x=spacecraft.x+random(-1,1);

   if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(space3)
 spacecraft.x=spacecraft.x-1
 }

 if(keyDown("RIGHT_ARROW")){
  spacecraft.addImage(space4)
spacecraft.x=spacecraft.x+1
}
  
 if(keyDown("UP_ARROW")){
    
 spacecraft.y=spacecraft.y-1
 }
 
 if(keyDown("Down_Arrow")){
  spacecraft.addImage(space2)

}
 }
if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
  hasDocked=true
  fill("yellow")
  textSize(20)
  text("Docking Successful",70,10)


}



  drawSprites();
}