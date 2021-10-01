// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    HSB, background, color, colorMode, createCanvas, ellipse, height,
 *    mouseX, mouseY, noStroke, random, rect, round, sqrt, text, width, 
 *    line, keyIsPressed, textSize, DOWN_ARROW, keyCode, hide
 */

let backgroundColor, spherePosition, rectPosition, mDist

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  // This variable contains an object
  spherePosition = {
    "x": 100,
    "y": 100,
  }
  rectPosition = {
    "x": 130,
    "y": 140,
  }
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20);
  rect(rectPosition.x, rectPosition.y, 20, 20);
  // line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y)

  let distance1 = computeDistance(spherePosition, rectPosition);
  text(`The circle and rectangle are ${round(distance1)} units apart.`, 20, 20);

  let mousePosition = {
    "x": mouseX,
    "y": mouseY,
  }
  let distance2 = computeDistance(spherePosition, mousePosition);
  let distanceDescription = computeCategoryOfDistance(spherePosition, mousePosition);
  text(`The circle and your mouse are ${round(distance2)} units apart; you're ${distanceDescription}.`, 20, 40);
  keyPressed();
}

// This code runs every time the mouse is clicked
function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}

function computeDistance(point1, point2) {
  let deltaX=point1.x-point2.x;
  let deltaY=point1.y-point2.y;
  let distance=sqrt((deltaX**2)+(deltaY**2));
  
  return distance; // returns a number
}

function computeCategoryOfDistance(point1, point2){
  //Compute the distance between the two points
  let distance=computeDistance(point1, point2);
  mDist=distance;
  
  //Depending how large the distance is:
  //-update the background color
  //-return the category of distance, ex. "cold", "warmer", " red hot"
  if(distance>200){
    //cold
    backgroundColor=color(240, 10, 100); //blue
    return 'cold';
  } else if(distance>50){
    //warmer
    backgroundColor=color(120, 10, 100); //green
    return 'warmer';
  } else{
    //red hot
    backgroundColor=color(0, 10, 100); //red
    return 'red hot';
  }
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    if(mDist>95){
       textSize(5);
      text("MARCO", 60, 125);
      textSize(14);
    }
    else if(mDist>75){
      textSize(15);
      text("MARCO", 60, 125);
      textSize(14);
    }
    else if(mDist>55){
      textSize(25);
      text("MARCO", 60, 125);
      textSize(14)
    }
    else if(mDist>25){
      textSize(35);
      text("MARCO", 60, 125);
      textSize(14);
    }
    else if(mDist>5){
      textSize(45);
      text("YOU FOUND ME!", 60, 125);
      textSize(14);
    }
  }
}