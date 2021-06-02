var lone;
var cruel;
var cruelGroup;
var bgImage;

function setup() {
  createCanvas(1350,600);
  lone = createSprite(650, 550, 20, 20);
  cruelGroup = createGroup()

}

function preload()
{
bgImage = loadImage("BG.jpg.jpeg")
}


function draw() {
  background(bgImage);  
  
 
    spawnCruel();
    loneMovement();
    touch();

  drawSprites();
}

function spawnCruel(){
  if (frameCount%200===0){
    var rand=Math.round(random(100,1000))
    var rand1=Math.round(random(100,300))
  for(var i=rand;i<rand+300;i=i+40){
    for(var j=rand1;j<=rand1+50;j=j+20){
      var cruel= createSprite(i,j,10,10)
      cruelGroup.add(cruel)
      cruelGroup.setVelocityYEach(2)
    }
    }
  }
    }

    function loneMovement()
    {
      if(keyDown("LEFT_ARROW")){
        lone.x = lone.x-5;
      }
      if(keyDown("RIGHT_ARROW")){
      lone.x = lone.x+5;
    }  
      if(keyDown("UP_ARROW")){
        lone.y = lone.y-5;
      }
      if(keyDown("DOWN_ARROW")){
        lone.y = lone.y+5;
      }
    }


function touch(){
  if (lone.isTouching(cruelGroup))
{
cruelGroup.setVelocityYEach(-6)
cruelGroup.setVelocityXEach(+6)
lone.x = 650;
lone.y = 550;
}}