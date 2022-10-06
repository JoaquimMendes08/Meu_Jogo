
var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var explosao;
var poças;
var zombie;
var zombies;

function preload() {
  backgroundImage = loadImage("planodefundo.png");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  track = loadImage("pista+alongada.jpg");
  fuelImage = loadImage("fuel.png");
  powerCoinImage = loadImage("goldCoin.png");
  obstacle1Image = loadImage("obstacle1.png");
  obstacle2Image = loadImage("obstacle2.png");
  lifeImage = loadImage("life.png");
  explosao = loadImage("blast.png");
  poçaImage = loadImage("poça_d'água.png");

  zombie = loadAnimation("./zombie_frames/frame_00_delay-0.04s.gif", "zombie_frames/frame_01_delay-0.04s.gif", "zombie_frames/frame_02_delay-0.04s.gif", "zombie_frames/frame_03_delay-0.04s.gif", "zombie_frames/frame_04_delay-0.04s.gif", 
  "zombie_frames/frame_05_delay-0.04s.gif", "zombie_frames/frame_06_delay-0.04s.gif", "zombie_frames/frame_07_delay-0.04s.gif", "zombie_frames/frame_08_delay-0.04s.gif", "zombie_frames/frame_09_delay-0.04s.gif", "zombie_frames/frame_10_delay-0.04s.gif",
  "zombie_frames/frame_11_delay-0.04s.gif", "zombie_frames/frame_12_delay-0.04s.gif", "zombie_frames/frame_13_delay-0.04s.gif", "zombie_frames/frame_14_delay-0.04s.gif", "zombie_frames/frame_15_delay-0.04s.gif", "zombie_frames/frame_16_delay-0.04s.gif",
  "zombie_frames/frame_17_delay-0.04s.gif", "zombie_frames/frame_18_delay-0.04s.gif", "zombie_frames/frame_19_delay-0.04s.gif", "zombie_frames/frame_20_delay-0.04s.gif", "zombie_frames/frame_21_delay-0.04s.gif", "zombie_frames/frame_22_delay-0.04s.gif",
  "zombie_frames/frame_23_delay-0.04s.gif", "zombie_frames/frame_24_delay-0.04s.gif", "zombie_frames/frame_25_delay-0.04s.gif", "zombie_frames/frame_26_delay-0.04s.gif", "zombie_frames/frame_27_delay-0.04s.gif", "zombie_frames/frame_28_delay-0.04s.gif",
  "zombie_frames/frame_29_delay-0.04s.gif", "zombie_frames/frame_30_delay-0.04s.gif", "zombie_frames/frame_31_delay-0.04s.gif", "zombie_frames/frame_32_delay-0.04s.gif", "zombie_frames/frame_33_delay-0.04s.gif", "zombie_frames/frame_34_delay-0.04s.gif",
  "zombie_frames/frame_35_delay-0.04s.gif", "zombie_frames/frame_36_delay-0.04s.gif", "zombie_frames/frame_37_delay-0.04s.gif", "zombie_frames/frame_38_delay-0.04s.gif", "zombie_frames/frame_39_delay-0.04s.gif", "zombie_frames/frame_40_delay-0.04s.gif",
  "zombie_frames/frame_40_delay-0.04s.gif", "zombie_frames/frame_41_delay-0.04s.gif");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
