var movement=0;
//var forward=true;
var angleRotation=0;
function setup() {
createCanvas (800,600);
background (255,0,0);
stroke(0); //the colour of the stroke
strokeWeight(5); //the line thickness
//line (100,100,400,400);
frameRate(10);

}


function draw() {
 strokeWeight(1);
 noFill();
 //fill (mouseX/2,(mouseX+mouseY)/4,mouseY/2);
 //fill(255,0,0,5); //rectangle with alpha transparency
 //rect (0,0,500,500); //rect(x1,y1,width, height)
 angleMode(DEGREES);
 translate (movement, movement);
 //movement++;//auto-move by one pixel diagonally
 //movement++;//this doubles the previous line
 movement+=5;
 
 //translate(250+mouseY/10, 250+mouseY/10); //mouse control here
 //rotate(mouseX-180); //mouse control here
 angleRotation+=5;
 rotate (angleRotation);
 noFill();
 //fill ((mouseX+mouseY)/4,255-mouseX/2,255-mouseY/2);
 ellipse (0,0,300,400); //(centre x, centre y, width, height)
 //fill(0);
 noFill();
 ellipse (0,0,190,310);
 noFill();
 //triangle(250,250,mouseX,mouseY,pmouseX,pmouseY); //(x1,y1,x2,y2,x3,y3)
 //line (mouseX, mouseY, pmouseX, pmouseY);
if (movement>=600){
   background(255,0,0);
   movement=0;
 }
}
function keyPressed (){
  rotate(0);
  translate(0,0);
  background(255,0,0);
 
}
