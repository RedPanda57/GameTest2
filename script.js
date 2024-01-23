<reference path="p5.global-mode.d.ts" />
"use strict"

const SPELEN = 1;
const GAMEOVER = 2;

/*const A = 65;
const D = 68
const SPACE = 32;
*/

var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler


var beweegAlles = function() {
  // speler
  /*if(keydown(A))
    spelerX = spelerX +1;
  }
  
  if(keydown(D)) {
    spelerX = spelerX -1;
  }
 
  if(keydown(SPACE)) {
    spelerY = spelerY +1;
  }*/

  // vijand

  // kogel

};

var verwerkBotsing = function() {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health
};

var tekenAlles = function() {
  // achtergrond
  //fill("blue");
  //rect(0, 0, 1270, 720);
  // vijand

  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health

};

var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

function setup() {

  createCanvas(1280, 720);

  background('blue');
}

function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

    }
  }