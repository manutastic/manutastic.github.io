var tick = 0;
var frames = 90;
var theta = 0;

function setup() {
	createCanvas(300 , 300);
}

function draw() {
	background("#FAFAFA");
	drawCircle(width/2 -66, height/2 + 30);
	tick += .5;
}

function drawCircle(x, y) {
    noStroke();
	for(let i = 0; i < 300; i+= 5){
    let xpos = sin(radians(i)) * 70 + x + 63;
    let ypos = cos(radians(i)) * 70 + y - 30;
    let w = cos(radians(tick + i)) * 150;
    w = abs(w);
		let green = map(i,0,300,180,230);
		let blue = 0;
		//blue = map(i,200,0, 0, 255);
		//let str = map(i,0,300,200,250);
		//stroke(255, str, 0);
		fill(255,green,blue);
    ellipse(xpos, ypos, w, w);
  }
}