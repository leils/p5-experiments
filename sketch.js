var count = 0;
var starterCircles = [];
var maxNest = 3;

class StarterCircleStruct {
  constructor(x, y) {
    this.x = x ||random(20, windowWidth - 20);
    this.y = y || random(20, windowHeight - 20);
    this.radius = random(200);
    this.color = scale(this.radius, 0, 200, 0, 255);
  }

  draw() {
    fill(this.color);
    drawCircle(this.x, this.y, this.radius, maxNest);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
  for(var i = 0; i < random(20); i++) {
    starterCircles.push(new StarterCircleStruct);
  }
}

function draw() {
  if (count >= maxNest) {
    count = 0;
  } else {
    count++;
  }
  background(51);

  fill(0, 0, 0, 0);
  color(255);

  // drawCircle(windowWidth / 2, windowHeight / 2, 200, 5);
  starterCircles.forEach(circ => {
    circ.draw();
  })
}

function drawCircle(x, y, radius, num) {
  if (count > num) {
    ellipse(x, y, radius, radius);
  }

  if (num > 0) {
    let newRadius = radius / 2;

    drawCircle(x, y + newRadius, newRadius, num - 1);
    drawCircle(x, y - newRadius, newRadius, num - 1);
    drawCircle(x + newRadius, y, newRadius, num - 1);
    drawCircle(x - newRadius, y, newRadius, num - 1);
  }
}

// util
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
