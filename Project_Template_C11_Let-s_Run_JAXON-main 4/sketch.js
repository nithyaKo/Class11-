var path
var runner

var pathImg

var boundary1
var boundary2
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path= createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4
  path.scale=1.2

  runner= createSprite(40,40)
  runner.addAnimation(runnerImg)

  boundary1= createSprite(20,200,20,200)
  boundary2=createSprite(380,200,20,200)
}

function draw() {
  background(0);


  if (path.y > 400){
    path.y = height/2;}
  
  if(keyDown("right")){ runner.x = runner.x + 2;
    }
    
  if(keyDown("left")){ runner.x = runner.x - 2;
  }

  boundary1.visible = false
  boundary2.visible = false

  runner.collide(boundary1)
  runner.collide(boundary2)
  }

