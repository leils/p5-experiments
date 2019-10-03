var count = 0;
var turn = false;

function drawCircle(x, y, size) {
  ellipse(x, y, size, size);

  if (size > 10) {
    var s = size / 3;
    drawCircle(x + s, y, s);
    drawCircle(x, y + s, s);
    drawCircle(x - s, y, s);
    drawCircle(x, y - s, s);

    drawCircle(x + random(-50, 50), y + random(-50, 50), random(10));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  frameRate(10);
}

function draw() {
  background(0, 0, 0, 25);

  if (turn) {
    count++;
  }
  noFill();
  stroke(255);
  translate(width / 2, height / 2);
  rotate((count * 20) / PI);

  drawCircle(0, 0, 300);
}

function mousePressed() {
  turn = !turn;
}
