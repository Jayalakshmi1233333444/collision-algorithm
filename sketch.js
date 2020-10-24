var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 100);
  movingrect=createSprite(400,100,100,50);
  movingrect.debug=true;
  fixedrect.debug=true;
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
}

function draw() {
  
  background(0); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      movingrect.shapeColor="yellow";
  fixedrect.shapeColor="yellow";
    }
    else{
      movingrect.shapeColor="red";
      fixedrect.shapeColor="red"; 
    }

  drawSprites();
}