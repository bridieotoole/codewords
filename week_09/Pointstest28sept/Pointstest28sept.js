/*KAREN DONNACHIE CREATED 99% OF THIS CODE, I NEED USE THIS CODE AS A SPRINGBOARD TO CREATE MY OWN*/ 
var font;
var points1 = [];
var margin = 50;
var topMargin = 50;
var para = 'And yet this naked body of words just now starting to play out its creative potential is not really my own. It’s part of something much larger than me— some kind of dynamic, shape-shifting intersubjectivity where I am always losing sight of myself as I improvisationally interact with The Network and, without thinking about it, intuitively manipulate the pulse of Time (as if such a thing as Time could actually exist).';
var words = para.split(' '); 
var wx, wy; 
var typeSize = 60; 
var kerning = 17; 
var leading = 75; 
function preload() {
  font = loadFont('data/AGMedium.otf');   // this file must exist
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(typeSize);
 // textFont('Helvetica');
  strokeWeight(2);
  background(200);

 
}

function draw() {
  background(120,150,200,50);
  //noStroke();
  fill(0,50);
  wx = margin;
  wy = 50; 
 // frameCount = 0;
  textSize (15);
  text(frameCount, 50,50);
  textSize(typeSize);
  for (let w=0; w<words.length; w++){
    if (wx+textWidth(words[w])<=width-margin){
    points1=font.textToPoints(words[w], wx, wy+50, typeSize, 0.9);
    noStroke();
  if (frameCount>5*w){
    text(words[w], wx, wy+50);
    for (let i=0; i < points1.length; i++){
      noStroke();
      point(points1[i].x, points1[i].y);
    }
  }  
  wx+= textWidth(words[w])+kerning; 
}
   else {
     wx = margin;
     wy+= leading;
     w--;
   }
}

} 

// function mousePressed() {

//} 

 
