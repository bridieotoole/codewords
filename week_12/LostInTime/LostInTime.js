/* Code for para-split by Karen Donnachie
Modified by Bridie O'Toole*/ 
//14 October 2020
var font, wy, wy, song, analyzer;
var points1 = [];
var margin = 50;
var topMargin = 50;
var para = 'And yet this naked body of words just now starting to play out its creative potential is not really my own. It’s part of something much larger than me— some kind of dynamic, shape-shifting intersubjectivity where I am always losing sight of myself as I improvisationally interact with The Network and, without thinking about it, intuitively manipulate the pulse of Time (as if such a thing as Time could actually exist).';
var words = para.split(' '); 
var typeSize = 50; 
var kerning = 12; 
var leading = 70; 
var t = frameCount;


function preload() {
  font = loadFont('data/AGMedium.otf');
  song = loadSound('data/BachSuiteNo.3AriainDmajor.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight*1.5);
  textSize(typeSize);
  strokeWeight(2);
  background(120, 150, 160);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}

function draw() {
  let t = frameCount;
  fill(250);
  wx = margin;
  wy = 50; 
  textSize(typeSize);
  for (let w=0; w<words.length; w++) {
    if (wx+textWidth(words[w])<=width-margin) {
      if (t>30*w) {      
        text(words[w], wx, wy+50);
       for (let i=0; i < points1.length; i++) {
        }
        background(120, 150, 160, 45);
      }
      wx+= textWidth(words[w])+kerning;
    } else {
      wx = margin;
      wy+= leading;
      w--;
    }
  }
  textSize (15);
  fill(200);
//  text (t, 50,50); //toggle off after debug
  text('Cyberpsychogeography by Mark Amerika', margin, (windowHeight*1.5)-margin);
} 

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    song.noLoop();
  }
  else {
    song.play();
  }
}
