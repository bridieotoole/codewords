# An Admiral Start
## Week 09

I feel somewhat slow to launch. The overwhelming possibly of what to create in Processing and also have that user interaction relay and translate the meaning of Mark Amerika's text is crippling!! Speaking with others in class is helpful, I know that through sharing ideas and resources we will all achieve some pretty impressive results but maybe thats why COVID has been especially difficult for study and collaboration.

With Karen, achieving the printed text to screen felt like the biggest hurdle that anything afterwards would be a couple of extra tweaks. This is proving not to be quite as simple. I feel like I'm coding the most ridiculous classes and begging p5 to guess what I'm hoping to achieve. Back to the drawing board. I know my skills aren't there yet. So a few hundred more hours of perusing references and tutorials should be the right direction. 


![screenshot](majortest.jpg)

In my endlesss hopes and code manipulation, I've created a 'pulse' for the text to appear and fade off the screen. I feel like this speaks to Amerika's 'pulse of time', this could be super poetic and require user engagement to read the text. But so far all this clicking for an on-screen event is giving me RSI. 

![](heartbeat.gif)
```
const myText = "And yet this naked body of words just now starting to play out its creative potential is not really my own. It’s part of something much larger than me— some kind of dynamic, shape-shifting intersubjectivity where I am always losing sight of myself as I improvisationally interact with The Network and, without thinking about it, intuitively manipulate the pulse of Time (as if such a thing as Time could actually exist).";

function setup() {
createCanvas (windowWidth, windowHeight);
background (0);
textSize (32); 
textFont ('Times');
noStroke();
}

function draw() {
  background (0,20);
  fill(255);
    text((frameCount*1), 10, 600); 
    if (frameCount>10) {
    } 
}
  
function mousePressed(){
  text(myText, 10, 20, width, height);
}
```

## Notable Practitioner
[Tim Roden Broeker](https://timrodenbroeker.de)

<a href='https://bridieotoole.github.io/codewords/week_08/'> <-- Last Week/Objectified </a> | <a href='https://bridieotoole.github.io/codewords/week_10/'> Next Week/Noto Type --> </a>
