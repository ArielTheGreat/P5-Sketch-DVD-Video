let x,y;
let xMov,yMov;
let img;
let r,g,b;

function preload()
{
  img = loadImage('dvd_logo.png');
}
function setup() {
  createCanvas(800, 600);
  x = random(width-140);
  y = random(height-70);
  changeColor();
  xMov = 5;
  yMov = 5;
}
function changeColor()
{
  r = random(256);
  g = random(256);
  b = random(256);
}
function draw() {
  background(0);
  //rect(x,y,80,80);
  tint(r,g,b);
  image(img,x,y);
  x += xMov;
  y += yMov;
  if(x + img.width >= width || x <= 0)
    {
       xMov = -xMov;
      changeColor();
    }
  if(y + img.height >= height || y <= 0)
     {
       yMov = -yMov;
       changeColor();
     }
}