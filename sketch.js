
function preload(){
seaImg = loagImg("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png")
spriteName.addImage(seaImg);

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();
    if(sea.x < 0){
      sea.x = sea.width/2;
      }
 
}
