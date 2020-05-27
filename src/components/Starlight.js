import React from "react";
import Sketch from "react-p5";

class Starlight extends React.Component {
  t = 0;

  setup = (p5, canvasParentRef) => {
    const height = document.getElementById("home-container").offsetHeight / 1.5;
    const width = document.getElementById("home-container").offsetWidth;
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  draw = (p5) => {
    p5.background(30, 50, 60);
    const height = document.getElementById("home-container").offsetHeight / 1.5;
    const width = document.getElementById("home-container").offsetWidth;
    p5.translate(width / 2, height / 2);
    const r1 = width / 7;
    const r2 = r1 / 3;

    p5.fill(255, 75);
    p5.noStroke();
    let mx = 0.2;
    if (
      p5.mouseX > 0 &&
      p5.mouseX < width &&
      p5.mouseY > 0 &&
      p5.mouseY < height
    ) {
      mx = p5.map(p5.mouseX, 0, width, p5.PI / 18, p5.PI);
    }
    // const my = p5.map(p5.mouseY, 0, width, 0.005, 0.2);
    const my = 0.005;
    this.t += my;
    for (let i = 0 + this.t; i < 2 * p5.PI + this.t; i += p5.PI / 18) {
      const x = r1 * p5.cos(i);
      const y = r1 * p5.sin(i);
      p5.ellipse(x + r2, x - r2, 10, 10);
      p5.ellipse(y - r2, y + r2, 10, 10);
      p5.triangle(x + r2, x - r2, y - r2, y + r2, 0, 0);
      p5.rotate(mx - (mx % (p5.PI / 36)));
    }
  };

  // mouseClicked = (p5) => {
  //   p5.noiseSeed(p5.random(1000));
  //   p5.background(56, 68, 76);
  //   this.t = 0;
  //   p5.draw();
  // };

  // windowResized = (p5) => {
  //   const height = document.getElementById("home-container").offsetHeight;
  //   const width = document.getElementById("home-container").offsetWidth;
  //   p5.resizeCanvas(width, height);
  //   p5.noiseSeed(p5.random());
  //   p5.background(56, 68, 76);
  //   this.t = 0;
  //   p5.draw();
  // };

  render() {
    return (
      <Sketch
        setup={this.setup}
        draw={this.draw}
        // mouseClicked={this.mouseClicked}
        // windowResized={this.windowResized}
      />
    );
  }
}

export default Starlight;

// function setup() {
// 	size = min(windowWidth, windowHeight, 500);
// 	createCanvas(size, size);
// 	r1 = size / 3.5;
// 	r2 = r1 / 3;
// 	t = 0;
// }

// function draw() {
// 	translate(size / 2, size / 2);
// 	background(30, 50, 60);
// 	fill(255, 75);
// 	noStroke();
// 	mx = map(mouseX, 0, size, PI / 18, PI); // Angle of rotation
// 	my = map(mouseY, 0, size, 0.005, 0.2); // Time increment
// 	t += my;
// 	for (var i = 0 + t; i < 2 * PI + t; i += PI / 18) {
// 		x = r1 * cos(i);
// 		y = r1 * sin(i);
// 		ellipse(x + r2, x - r2, 10, 10);
// 		ellipse(y - r2, y + r2, 10, 10);
// 		triangle(x + r2, x - r2, y - r2, y + r2, 0, 0);
// 		rotate(mx - mx % (PI / 36)); // Lock to angles multiple of 5 degrees
// 	}
// }
