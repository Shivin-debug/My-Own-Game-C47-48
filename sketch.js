var database, form, player, game, allPlayers;
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22, w23, w24, w25, w26;
var p1, p2, p3;
var bg;
var g1, g2, g3;
var b1, b2, b3;
var o1, o2, o3;
var o = [];
var distance = 0;
var xvel, yvel;
var gameState = 0;
var playerCount = 0;
var p = [];

function preload(){
  bg = loadImage("bg.png");
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight);

  game = new Game();
  game.getState();
  game.start();

  xvel = 0;
  yvel = 0;

  xset = false;
  
}

function draw(){

  if(playerCount === 1){
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }
}
