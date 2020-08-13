function preload () {
  // Ensure the .ttf or .otf font stored in the assest directory
  // is loaded before sesrtup() and draw() are called
  akzidenz = loadFont('data/Akzidenz-Grotesk-Medium.otf'); 
}
var spin=0;
var letterSize=(24);

function setup() {
  createCanvas(600, 600);
  background(220);
  fill (0);
  angleMode(DEGREES);
  textAlign (CENTER);
  frameRate(20);
}


function draw() {
  fill(0);
  translate (300,300);
  rotate(spin);
  textSize (letterSize);
  textFont (akzidenz);
  text('hello world', 0, 0); 
  spin+=int(mouseX<300);
  spin-=int(mouseX>300);
  letterSize=map(mouseY,0,600,8,72);

  stroke(0)
  fill(240,20);
  
  rotate(0);
  noStroke();
  background(240,90);
  translate(0,0);
  rect(0,0,600,600);
}
