let letters = ["A", "B", "C", "D", "E", "F","G", "H","I", "J", "K", "L", "M","N", "O", "P", "Q", "R","S","T", "U", "V","W","X","Y","X"];
let r;
let g;
let b;

function setup() {
	createCanvas(windowWidth, windowHeight);
	w = 100;
	h = 100;
	frameRate(12)
	positionX = 1;
	positionY = 1;
}

function draw() {
	//ellipse(positionX,positionY,w, h);
	// fill(r,g,b);
    fill(random(0, 255))
	textSize(round(random(30,600)));
	text(letters[round(random(0,25))], w, h);
	positionX = round(random(0,width));
	positionY = round(random(0,height));
	w = round(random(0,width));
	h = round(random(0,height));
	r = round(random(0,255));
	g = round(random(0,255));
	b = round(random(0,255));
	// fill(r,g,b,r);
	// noStroke();

	

	
	if (frameCount % 100 === 0 || mouseIsPressed === true){
		// background(r,g,b);
        background(255)
		frameCount = 1;
	}
	
	
}