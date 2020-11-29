var MAX_PLAYER_COUNT = 2
var database;
var background_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;

var player;
var form, game;
var playersGroup;
var fruit;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload() {
  background_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  playersGroup = new Group();
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(background_img);

  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
    displayScores()
  }
  if (gameState === 2) {

    game.end();
  }

}

function displayScores() {
  var yPos = 100
  for (var pName in allPlayers) {
    var player = allPlayers[pName]
    text(player.name + " - " + player.score, 50, yPos)
    yPos += 50
  }
}