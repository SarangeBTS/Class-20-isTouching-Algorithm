var Isha, BTS;



function setup() {
  createCanvas(800,400);
  BTS=createSprite(400, 200, 50, 50);
  BTS.shapeColor="green";
  BTS.debug=true;

  Isha=createSprite(200,100,30,40);
  Isha.shapeColor="blue";
  Isha.debug=true;

 
}

function draw() {
  background("white");  
  Isha.y=mouseY;
  Isha.x=mouseX;

  if(Isha.x-BTS.x<Isha.width/2+ BTS.width/2 && 
    BTS.x-Isha.x<Isha.width/2+BTS.width/2&&
    Isha.y-BTS.y<Isha.height/2+ BTS.height/2 && 
    BTS.y-Isha.y<Isha.height/2+BTS.height/2){
   BTS.shapeColor="yellow";
   Isha.shapeColor="yellow";
  }
  else{
    BTS.shapeColor="green";
    Isha.shapeColor="blue"; 
  }

  drawSprites();

  text("Isha.x= "+Isha.x,300,20)
  text("BTS.x= "+BTS.x,300,50)
  text("Isha.width=  "+Isha.width/2,300, 80)
  text("BTS.width=  "+BTS.width/2,300, 100)
}