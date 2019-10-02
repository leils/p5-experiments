var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 255, 100);
  slider.position((windowWidth / 2) - 100, windowHeight / 2);
  slider.style('width', '200px');
}

function draw() {
  var val = slider.value();
  background(val);
}
