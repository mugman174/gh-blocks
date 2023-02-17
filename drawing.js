function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0);
}

function draw() {
  fill(mouseX, mouseY, 15, 20);
  ellipse(mouseX, mouseY, abs(pmouseX - mouseX) * 2, abs(pmouseX - mouseX) * 2);
}
