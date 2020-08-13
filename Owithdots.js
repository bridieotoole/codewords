let max_distance;

function setup() {
createCanvas (500,500);
background (255,255,255);
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
stroke (mouseY/2,(mouseY+mouseX/4),mouseX/2);
strokeWeight (3);
fill (mouseX/2,(mouseX+mouseY/4),mouseY/2);
ellipse (250,250,230,350);
fill (mouseY/2,(mouseY+mouseX/4),mouseX/2);
ellipse (251,250,130,250);
fill (mouseX/2,(mouseX+mouseY/4),mouseY/2);
noStroke ();
}
