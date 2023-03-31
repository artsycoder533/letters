let w;
let x;

// draw the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  w = 5;
  x = 5;
  direction = 2;
}

function draw() {
  background("#f2f2f2");

  
  //growing circle
  noStroke();
  fill(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
  circle(w, Math.floor(Math.random() * 50), w);
  fill(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
  circle(Math.floor(Math.random() * 50), w, w);
  fill(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
  circle(w, w, Math.floor(Math.random() * 50))
  
  w = w + 0.25;
  x = x + 1

  if(x> w - 300) {
    direction = direction * -1;
  }
}

//recalculates the browser
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



//   for (let i = 0; i < 10; i++) {
  //     fill("black");
  //     textSize(40);
  //     if (i % 2 === 0)
  //       text(
  //         "N",
  //         Math.floor(Math.random() * windowWidth),
  //         Math.floor(Math.random() * windowHeight)
  //       );
  //     else if (i % 3 === 0) {
  //       fill("purple");
  //       textSize(40);
  //       text(
  //         "A",
  //         Math.floor(Math.random() * windowWidth),
  //         Math.floor(Math.random() * windowHeight)
  //       );
  //     } else if (i % 5 === 0) {
  //       fill("red");
  //       textSize(40);
  //       text(
  //         "J",
  //         Math.floor(Math.random() * windowWidth),
  //         Math.floor(Math.random() * windowHeight)
  //       );
  //     }
  //   }
