var xPosition, yPosition, size, rand, letter;
var letterCount = 0;
var sentence = "Plugged in, turned on";
var wigglyLetters = [];
function setup() {
  createCanvas (windowWidth, windowHeight);
  background (0);
  textSize(32);
  textFont("Times"); 
}
function draw() {
  background(0);
  fill(255);
  //text(frameCount, mouseX, mouseY);
  for (var i=0; i<wigglyLetters.length; i++){
    wigglyLetters[i].wiggle();
    wigglyLetters[i].display();   
  }
}
function mousePressed(){
  size = int(random(6,100));
  //letter = char(int(random(60,160)));
  letter = sentence[letterCount];
  wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter));
  if (letterCount<sentence.length){
    letterCount++;
  }  else {
    letterCount = 0; 
  }
}
class Wiggle {
  constructor (x, y, size, letter) {
    this.x = x;
    this.y = y;
    this.textSize = size;
    this.letter = letter;
  }
  wiggle() {
    this.x += random (-5,+5);
    this.y += random (-5,+5);
  }
  
  display() {
  textSize(this.textSize);
  text(this.letter, this.x, this.y);
  }
} 
