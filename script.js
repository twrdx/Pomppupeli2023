let tausta;
let donut;
let bouncer;

function preload() {
  bg = loadImage('game-bg.png');
	donut = loadImage('donut3.png');
	bouncer = loadImage('bouncer.png');
	
}

function setup() {
  createCanvas(windowWidth, windowWidth / 3);
}

function draw() {
  image(bg, 0, 0, 500, 500);
	image(bg, 500, 0, 500, 500);
	image(bg, 1000, 0, 500, 500);
}

function create_bouncer() {
	image(bouncer, mouseX, )
}
