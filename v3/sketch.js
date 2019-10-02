var lastx = 0;
var lasty = 0;

MAXDIST = 200;
MIN_RADIUS = 10;
MAX_RADIUS = 60;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  fill(200, 150, 0);


  let radius = getScaledRadius();
  ellipse(mouseX, mouseY, radius, radius);

  lastx = mouseX;
  lasty = mouseY;
}

function keyPressed() {
  if (keyCode === 32) {
    background(200); //clear the canvas?
  }
}

function getScaledRadius() {
  let dist = distFromLast();
  return scale(dist, 0, MAXDIST, MIN_RADIUS, MAX_RADIUS);
}

function distFromLast() {
  distX = Math.abs(mouseX - lastx);
  distY = Math.abs(mouseY - lasty);

  return Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
}

// util
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
