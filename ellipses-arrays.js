var x = [];
var y = [];
var d = [];
var color = [];


function setup() {
  createCanvas(300, 300);
  colorMode(HSB)
  for (var i = 0; i < 50; i++){   
    x[i] = random(120, 180);
    y[i] = random(120, 180);
    d[i] = random(10, 200);
    color[i] = color(random(255), random(255), random(255));
  }
}

function draw() {
  background(0);
  noStroke();
  
  // draw ellipses
  for (var i = 0; i < 50; i++) {
    fill(color[i]);
    ellipse(x[i], y[i], d[i]);

    if (random() < 50) {
      d[i] = random(30, 100);
    }
  }
}
