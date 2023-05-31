/* Game opdracht
   Informatica - Emmauscollege Rotterdams
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
const A_TOETS_c = 65
var imageVeld;
const BorderLeft = 0;
const BorderRight = 1280;
function preload() {

  imageVeld = loadImage('imgVeld.jpg');
}

// x-positie van speler
var spelerY1 = 360; // y-positie van speler 1
var spelerY2 = 360; // y-positie van speler 2
var spelerX1 = 60
var spelerX2 = 1220
var balX = 600;
var balY = 200;
var speedX = 4;
var speedY = 4;
var punten1 = 0;
var punten2 = 0;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler

  if (keyIsDown('83')) {
    console.log("S is ingedrukt");
    spelerY1 = spelerY1 + 4;
  }

  if (keyIsDown('40')) {
    console.log("Arrow down is ingedrukt");
    spelerY2 = spelerY2 + 4;
  }

  if (keyIsDown('87')) {
    console.log("w is ingedrukt");
    spelerY1 = spelerY1 - 4;
  }
  if (keyIsDown('38')) {
    console.log("Arrow up is ingedrukt");
    spelerY2 = spelerY2 - 4;
  }


  // bal stuiteren tegen randen

  if (balY >= 720) {
    speedY = speedY * -1;
  }

  if (balY <= 0) {
    speedY = speedY * -1;
  }

  // bal stuiteren tegen plank links
  if (balY - spelerY1 < 50 &&
    balY - spelerY1 > -50 &&
    balX - spelerX1 < 10 &&
    balX - spelerX1 > -10) {
    speedX = speedX * -1;
  }
  // bal stuiteren tegen plank rechts
  if (balY - spelerY2 < 50 &&
    balY - spelerY2 > -50 &&
    balX - spelerX2 < 10 &&
    balX - spelerX2 > -10) {
    speedX = speedX * -1;
  }

  // bal bewegen
  balX = balX + speedX;
  balY = balY + speedY;
  // kogel

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  if (spelerY1 === balY &&
    spelerX1 === balX) {
    console.log("botsing1")
  }
  if (spelerY2 === balY &&
    spelerX2 === balX) {
    console.log("botsing2")
  }
// ball sneller bewegem



  // update punten en health

  if (balX >= 1280) {
    punten1 = punten1 + 1;
    balX = 640;
     speedX = speedX * -1; 
  }
  if (balX <= 0) {
    punten2 = punten2 + 1;
    balX = 640;
    speedX = speedX * -1; 
  }

  if (punten1 === 5) {
    spelStatus = GAMEOVER;
  }
  if (punten2 === 5) {
    spelStatus = GAMEOVER;
  }

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond

  rect(0, 0, width, height);
  image(imageVeld, 5, 5, width - 10, height - 10);
  // vijand


  // bal
  fill("white");
  ellipse(balX, balY, 50, 50);

  // speler
  fill("red");
  rect(spelerX1 - 12.5, spelerY1 - 50, 25, 100);
  fill("red");
  rect(spelerX2 - 12.5, spelerY2 - 50, 25, 100);


  // punten en health
  textSize(50);
  fill(255, 0, 0);
  text(punten1, 580, 50);
  text(punten2, 660, 50);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond lichtgroen, zodat je het kunt zien

}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
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
    console.log('Game Over');
    textSize(75);
    fill("black");
    text("Game Over", 440, 360);
    textSize(40);
    text ("Press space to restart.", 440, 440)
  if (keyIsDown(32)){
    punten1 = 0;
    punten2 = 0;
    balX = 640; 
    balY = 360;
    spelStatus = SPELEN; 
  }
    
  }
}
