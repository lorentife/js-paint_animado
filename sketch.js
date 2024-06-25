let cor;
let x;
let y;


function setup() {
  
  createCanvas(1000, 1000);
  background(color (100, 0, 0));
  cor = color(random(0,255), random(0,255), random(0,255));
  x = 200;
  y = 200;
}

function draw() {
  
  fill(cor);
  circle(x, y, 50);


if(mouseX < x) {
  x = x - 1;
}

if(mouseX > x) {
  x = x + 1;
}

if(mouseY < y) {
  y--;
}

if(mouseY > y) {
  y++;
}
  
  if(mouseIsPressed) {
    cor = color(random(0,255), random(0,255), random(0,255), random(0, 100));
  }
}