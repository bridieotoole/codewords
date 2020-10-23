# Making FUNctions 

## Week 07 

~ reviewed our learninngs from the semester so far, from weeks 1-6

~ discussed the SKO submission for wk 13 and checked out the syllabus 

~ Talked about the Mark Marino book on Critical Code Studies 
  - he collaborated with data scientists and presented findings of climate change 
  - non executable code
  
~ which leads us into MORE pseudo code 

~ Karen discussed a very current issue for Australian Universities-cuts! 

(27 librarians to be let go this week, make-a-space - no longer and all HDR scholarships frozen...) 

```
Karen's Code
#include <australianUniversities.h>
#include <HEstaff.h>
#include <NTEU.h>
#include <students.h> 

void fightTheCuts() {
  while (cuts > 0) {
    resist ();
    print (“Fight The Cuts!”);
    protest++; 
    discuss();
  }
  print (“university belongs to all Australians”);
} 
``` 
## P5 Play

Later in the lesson we explored libraries within p5js. This lead us explore p5 Play... Is it okay if i spend the rest of the week here? These games are simple, clean and incredibly addictive. It really opened my eyes up to what is possible with code. 

[*P5 Play Background Game*](https://molleindustria.github.io/p5.play/) | [*P5 Play Collisions Example*](https://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions.js)
:-------------------------:|:-------------------------: 
![](p5play.gif) | ![](p5playanimations.gif)

## Coding with Karen 

```
var song; //initiating our variable
var analyzer;
function preload() {
 song = loadSound ('data/groove.mp3'); 
}

function setup() {
  //song = loadSound ('data/groove.mp3'); //associate our sound to the variable 'song'
  createCanvas (windowWidth, windowHeight); // create full window canvas
  background(0);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fill(120);
  textSize(72);
  textAlign(CENTER,CENTER);
}


function draw() {
  background(0, 10);
  fill(120);
  var volume = analyzer.getLevel();
  volume*=400;
  //ellipse(width/2,height/2,volume,volume);
  fill(255);
  textSize(volume*2);
  text('DANCE!', width/2, height/2);
}

function mousePressed() {
  if (song.isPlaying()) {
    background(255);
    song.stop(); // if the song is playing, stop it
    song.noLoop();
  }
  else {
    background(0);
    song.loop();
    song.play();
    
  }
}
```
~ Example of P5js remix soundtest with Karen 

## Further Paper Prototyping

![paperprototype](pp.gif) 

<a href='https://bridieotoole.github.io/codewords/week_06/'> <-- Last Week/Pseudo Pstuff </a> | <a href='https://bridieotoole.github.io/codewords/week_08/'> Next Week/Objectified --> </a>
  
