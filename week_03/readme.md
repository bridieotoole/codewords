# Electronic Literature 
## Week 03

![](electronicslides.gif)

Electronic Literature emcompasses; chatbots, performance live coding, generative texts (eg. AI Dungeon), text animation, motion type and generative novels. I came across Aaron Reed, a writer, designer and researcher who focusses on finding new ways for gamemakers and players to tell stories together in his work [*Passive Aggresive (Procedural Novel)*](https://aaronareed.net/bots-and-generative-texts/)

## Coding With Karen

[*Karen's Spiroworm*](https://bridieotoole.github.io/codewords/week_03/Karens_Spiroworm/)
:-------------------------:
![](spiroworm.gif)

```
var movement=0;
var angleRotation=0;
function setup() {
createCanvas (800,600);
background (255,0,0);
stroke(0); //the colour of the stroke
strokeWeight(5); //the line thickness
frameRate(10);
}

function draw() {
 strokeWeight(1);
 noFill();
 angleMode(DEGREES);
 translate (movement, movement);
 movement+=5;
 angleRotation+=5;
 rotate (angleRotation);
 noFill();
 ellipse (0,0,300,400); //(centre x, centre y, width, height)
 noFill();
 ellipse (0,0,190,310);
 noFill();
if (movement>=600){
   background(255,0,0);
   movement=0;
 }
}
function keyPressed (){
  rotate(0);
  translate(0,0);
  background(255,0,0);
}
```
## Re-Readings Development 

To collate our thoughts and cut down the script, our group has been working in a shared [Google doc](https://docs.google.com/document/d/19jYVR71h8XhRFNsr-k470x9JxL-L0lmXoieETXrT_1o/edit ) to achieve this.

![](holsahred.jpg)

<a href='https://bridieotoole.github.io/codewords/week_02/'> <-- Last Week/Hunting and Gathering </a> | <a href='https://bridieotoole.github.io/codewords/week_04/'> Next Week/Spinning Text --> </a>
  

