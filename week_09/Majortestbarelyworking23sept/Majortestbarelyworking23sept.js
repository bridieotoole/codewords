const myText = "And yet this naked body of words just now starting to play out its creative potential is not really my own. It’s part of something much larger than me— some kind of dynamic, shape-shifting intersubjectivity where I am always losing sight of myself as I improvisationally interact with The Network and, without thinking about it, intuitively manipulate the pulse of Time (as if such a thing as Time could actually exist).";

function setup() {
createCanvas (windowWidth, windowHeight);
background (0);
textSize (32); 
textFont ('Times');
noStroke();
}

function draw() {
  background (0,20);
  fill(255);
    text((frameCount*1), 10, 600); 
    if (frameCount>10) {
//      text(myText, 10, 20, width, height);  //(x,y, length of x, length of y)
    } 
}
  
function mousePressed(){
  text(myText, 10, 20, width, height);
}
