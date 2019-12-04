function setup() {
  //createCanvas(width, height);
  createCanvas(500,500);
}

function draw() {
  //background (red, green, blue);
  //each parameter (0-225);
  background(220,100,50);
  //ellipse(xposition, y position, width, height);
  fill(230, 265, 233)
  strokeWeight(4);
  stroke(200, 187, 243);
  ellipse(mouseX, 250, 50, 50);

  strokeWeight(2);
  fill(123, 159, 174)
  rect(200, 250, 60, 60)

  textSize(44);
  fill(255, 255, 255);
  text("hello", 250, 100);
}
