let tSlider;
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255, 255, 255)
  textSize(40)
  textAlign(LEFT, TOP)
  fill(0, 0, 0)
  tSlider = createSlider(1, 15, 6, 0.1);
  tSlider.position(width - 200, 5);
}

let T = 300
// initial radius of smaller circle
let r = 50
// initial radius of larger circle
let R = 100
// speed of the animation
let increment = .01
let rInit = 50


function draw() {
  // scaling, otherwise the animation grows off screen
  // the amount of detail, changing this value makes a totally new animation!
  let tStep = tSlider.value();
  let s = (rInit + R) / (r + R)
  scale(s)
  clear()
  background(0)
  
  let lastX1 = width / 2 + R,
      lastY1 = height / 2
  let lastX2 =  width / 2 + R,
      lastY2 =  height / 2
  
  push()
  translate(width / 2 / s, height / 2 / s)
  strokeWeight(1 / s)
  for (let t = 0; t < T; t += tStep) {
    // x and y of epicycloid
    let x1 = (r + R) * cos(t) - r* cos((R + r)/r * t),
        y1 = (r + R) * sin(t) - r * sin((R + r) / r * t)
    
    // x and y of hypocycloid
    let x2 = (R - r) * cos(t) + r * cos((R-r)/r * t),
        y2 = (R - r) * sin(t) - r * sin((R - r) / r * t)
    
    stroke(255)
    if (t > 0) {
      // drawing lines between points on graph
      line(lastX1, -lastY1, x1, -y1)
      line(lastX2, -lastY2, x2, -y2)
    }
    lastX1 = x1
    lastY1 = y1
    lastX2 = x2
    lastY2 = y2
  }
  // stepping the animation forward
  r += increment
  pop()
  fill(255)
  textSize(30 / s)
  text(r / R, 20 / s, 10 / s)
  
}