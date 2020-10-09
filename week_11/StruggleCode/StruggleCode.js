/*Code created by Karen Donnachie 28th September 2020
Modified by Bridie O'Toole*/ 
var font, wx, wy, word;
var points1 = [];
var margin = 50;
var topMargin = 50;
var para = 'And yet this naked body of words just now starting to play out its creative potential is not really my own. It’s part of something much larger than me—some kind of dynamic, shape-shifting intersubjectivity where I am always losing sight of myself as I improvisationally interact with The Network and, without thinking about it, intuitively manipulate the pulse of Time (as if such a thing as Time could actually exist).';
var words = para.split(' '); 
var typeSize = 36; 
var kerning = 12; 
var leading = 50; 
var fallWords = [];
//var speed = words[i].length;

function preload() {
  font = loadFont('data/AGMedium.otf'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(typeSize);
  strokeWeight(2);
  background(120,150,160);
  fill(255, 80); 
}

function draw() {
  background(120,150,160,50);
  let t = frameCount;
  wx = margin;
  wy = 50; 
  textSize(typeSize);
  for (let w=0; w<words.length; w++){
    if (wx+textWidth(words[w])<=width-margin){
      points1=font.textToPoints(words[w], wx, wy+50, typeSize, 1); 
      stroke(0,0,255);                             //turn off after debugging
    if (t>5*w){
      text(words[w], wx, wy+50);
      for (let i=0; i < points1.length; i++){
        stroke(255,0,0);                           //turn off after debugging
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
  textSize (15);  //turn off after debug
  text(t, 50,50); //turn off after debug
  
      //for (var b=0; b<fallWords.length; b++){
      //fallWords[b].update();
      //fallWords[b].display();
      //}
      //for (let word of fallWords){
      //  word.update(t); //update word position
      //  word.display(); // draw word
      //}
}
  
function mousePressed(){
  if (words[w]){                  //if a word from the array is clicked
  words[w].push(new Fall());      //then words[i] fall
  } 

  function Fall(){
    fallWords.update();
    fallWords.display();   
    speed = t*(2*words[i].length); //larger the word length, faster it falls

  update(); {
    this.posX += (points1[i].x + random(-points1[i], points1[i]));
    this.posY += (points1[i].y + speed); 
    }

  display(); {
    text(words[w](this.posX, this.posY)); //redraw word at new location
    }
  }
}
