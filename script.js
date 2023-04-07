/* Game opdracht
   Informatica - Emmauscollege Rotterdam
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
const BorderLeft= 0;
const BorderRight = 1280;
function preload() {
  
  imageVeld = loadImage('imgVeld.jpg');
}

 // x-positie van speler
var spelerY1 = 490; // y-positie van speler 1
var spelerY2 = 490; // y-positie van speler 2
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
      spelerY1 = spelerY1 + 2.5;
   }
  if (keyIsDown('40')) {
     console.log("Arrow down is ingedrukt");
      spelerY2 = spelerY2 + 2.5;
   }
  
if (keyIsDown('87')) {
     console.log("w is ingedrukt");
      spelerY1 = spelerY1 - 2.5;
   }
  if (keyIsDown('38')) {
    
     console.log("Arrow up is ingedrukt");
      spelerY2 = spelerY2 - 2.5;
   }
  // vijand

  // kogel

};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
 
  rect(0, 0, width, height);
  image(imageVeld, 5, 5, width-10, height-10);
  // vijand


  // kogel

  // speler
  fill("red");
  rect(BorderLeft+50 , spelerY1 - 185, 25, 100);
  fill("red");
  rect(BorderRight-75, spelerY2 - 185, 25, 100);
  

  // punten en health

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

  }
}
