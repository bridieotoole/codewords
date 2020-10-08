/*Code created by Karen Donnachie 28th September 2020
Modified by Bridie O'Toole*/ 
var font, wx, wy;
var points1 = [];
var margin = 50;
var topMargin = 50;
var para = 'And yet this naked body of words just now starting to play out its creative potential is not really my own. It’s part of something much larger than me—some kind of dynamic, shape-shifting intersubjectivity where I am always losing sight of myself as I improvisationally interact with The Network and, without thinking about it, intuitively manipulate the pulse of Time (as if such a thing as Time could actually exist).';
var words = para.split(' '); 
var typeSize = 36; 
var kerning = 12; 
var leading = 50; 
var fallWords = [];
var speed = words[i].length;

function preload() {
  font = loadFont('data/AGMedium.otf'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(typeSize);
  strokeWeight(2);
  background(120,150,160);
  fill(255,50); 
}

function draw() {
  background(120,150,160,50);
  let t = frameCount;
  wx = margin;
  wy = 50; 
  textSize (15);
  text(t, 50,50);
  textSize(typeSize);
  for (let w=0; w<words.length; w++){
    if (wx+textWidth(words[w])<=width-margin){
      points1=font.textToPoints(words[w], wx, wy+50, typeSize, 1); // (words[i].length 
      noStroke();
    if (t>5*w){
      text(words[w], wx, wy+50);
        for (var i=0; i<fallWords.length; i++){
          point(points1[i].x, points1[i].y);
          fallWords[i].move();
          fallWords[i].display();
        }
      //for (let i=0; i < points1.length; i++){
      //  noStroke();
      // // fallWords.push( new Fall(points1[i].x, points1[i].y), speed);
      //  point(points1[i].x, points1[i].y);
      //  }    
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
function mousePressed(){
  words[i] = [];
  fallWords.push(new Fall(words[i].x, words[i].y));
}

class Fall {
  constructor(x, y){
  this.x = x;
  this.y = y;  
}

move() {
  this.x += (-50,10);
  this.y += (-20,20); 
}

display(){
  textSize(this.typeSize);
  text(this.words[i], this.x, this.y); //(this.words[w], this.x, this.y); 
  }
}
