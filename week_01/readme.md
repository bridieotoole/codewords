# Introduction 
## Week 01

In today's age, our concentration is limited and we are easily distracted - we want our information quick, concise and in bullet points before commiting to giving our precious time to an article, lest a book. <br>

Opening the Semester, Andy and Karen introduced us to what we'd be covering over the next 13 or so weeks. Our first task will be covering a chapter of *House of Leaves* by Mark Z. Danielewski. In groups, we will perform an extract in a digital world.


*What was the most recent book you interacted with?* <br>
*What was the most recent long-form text you read?*<br>
*Where do you get your news/info?*<br>


![minecraft](minecraftss.jpg)

The class explored a digital representation of Melbourne's CBD in Minecraft Education Education. 

![processing screenshot](B.jpg)

My initials [*'B'*](https://bridieotoole.github.io/codewords/week_01/B/) and [*'O'*](https://bridieotoole.github.io/codewords/week_01/Owithdots/).

Our homework for the week was to create our initials on a 500x500 pixel canvas. I chose to create blocky, capital letters which change colour based on curser location.

I did some research for the background because I wanted something which was interactive and colourful but not overwhelming... I’m not sure if I've mastered the art of the most aesthetic coded characters, but I've enjoyed playing around with colours, shapes, outlines and size.

:-------------------------:|:-------------------------:
![example gif](B.gif) | ![example gif](O.gif)

```
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
```

<p align="center">
  
<a href='https://bridieotoole.github.io/codewords/week_02/'>Next Week/Hunting and Gathering --></a>

</p>

