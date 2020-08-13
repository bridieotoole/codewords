function preload () {
  // Ensure the .ttf or .otf font stored in the assest directory
  // is loaded before sesrtup() and draw() are called
  woodtype = loadFont('data/Woodtype.otf'); 
  akzidenz = loadFont('data/Akzidenz-Grotesk-Medium.otf'); 
}


function setup() {
  createCanvas(600, 600);
  background(220);
  fill (0);
  //textSize (32);
  //textFont (akzidenz);
  textAlign (CENTER);
}


function draw() {
  textSize (32);
  textFont (akzidenz);
  text('hello world',300,250); 
  textSize (8);
  text('hi',300,100);
  //textFont();
  textSize (100);
  text ('I am Bridie', 300,200);
  
  
}
