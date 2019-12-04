var diameter = 50

function setup() {
  // createCanvas(width, height);
  createCanvas(800, 800);
}

function draw() {
  // background (red, green, blue)
  // each parameter (0-225);
  background (156, 178, 214);

  if (mouseIsPressed) {
    diameter = 100;
  }
  else {
    diameter = 50;
  }

  //shape (xposition, yposition, width, height);
  fill(116, 166, 130);
  strokeWeight(2);
  stroke(200, 187, 243);
  ellipse(mouseX, mouseY, 50, 50);

  fill(51, 84, 61);
  strokeWeight(2);
  stroke(200, 187, 243);
  ellipse(400, 100, diameter, diameter);

  fill(92, 112, 98);
  strokeWeight(2);
  stroke(200, 187, 243);
  ellipse(150, 150, 150, 150);

  fill(144, 176, 154);
  strokeWeight(2);
  stroke(200, 187, 243);
  ellipse(300, 300, diameter, diameter);


  fill(230, 265, 233);
  strokeWeight(2);
  stroke(200, 187, 243);
  ellipse(300, 100, 100, 100);

  fill(29, 105, 38);
  strokeWeight(2);
  stroke(200, 187, 243);
  ellipse(50, 50, 100, 100);

  strokeWeight(6);
  fill(199, 187, 133);
  rect(350, 250, 400, 275)

  textSize(70);
  fill(209, 92, 33);
  text("COIN JAR", 375, 400)

  textSize(40);
  fill(158, 115, 154);
  text("PLACE LOOSE COINS IN COIN JAR", 100, 700)


}
