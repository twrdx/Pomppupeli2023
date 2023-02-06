let tausta;
let donut;

function preload() {
  tausta = loadImage('game-bg.png');
	donut = loadImage('donut3.png');
}

function setup() {
  createCanvas(windowWidth, windowWidth / 3);
}

function draw() {
  image(tausta, 0, 0, 500, 500);
	image(tausta, 500, 0, 500, 500);
	image(tausta, 1000, 0, 500, 500);
}


