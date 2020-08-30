let max_distance;

function setup() {
createCanvas (500,500);
background (235,210,200); //R,G,B
max_distance = dist(0,0,width,height);
}


function draw() {
  background (mouseX/2,(mouseY+mouseX)/4,mouseY/2); 

for (let i = 0; i <= width; i+= 50) {
  for (let j = 0; j <= height; j+= 50) {
    let size = dist(mouseX, mouseY, i, j);
    size = (size / max_distance) * 70; 
    ellipse(i, j, size, size);
  }
 }
fill (mouseY/2,(mouseX+mouseY/2),mouseX)/2;
strokeWeight (3);
stroke (mouseX/2,(mouseY+mouseX/2),mouseY/2);
ellipse (250,175,200,200);
ellipse (250,325,200,200);
rect (150,75,95,350);
noStroke ();
ellipse (244,250,143,347);
}
