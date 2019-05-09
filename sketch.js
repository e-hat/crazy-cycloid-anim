function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255, 255, 255)
  textSize(40)
  textAlign(LEFT, TOP)
  fill(0, 0, 0)
}

let T = 500
let r = 50
let R = 100
let increment = .01
let rInit = 50
let tStepAmp = 4
let tStepAvg = 16

function draw() {
  let s = (rInit + R) / (r + R)
  scale(s)
  tStep = tStepAmp*Math.sin(r / rInit) + tStepAvg
  clear()
  background(0, 0, 0)
  //ellipse(width / 2, height / 2, R, R)
  let lastX1 = width / 2 + R,
      lastY1 = height / 2
  let lastX2 =  width / 2 + R,
      lastY2 =  height / 2
  push()
  translate(width / 2 / s, height / 2 / s)
  strokeWeight(1 / s)
  for (let t = 0; t < T; t += tStep) {
    let x1 = (r + R) * cos(t) - r* cos((R + r)/r * t),
        y1 = (r + R) * sin(t) - r * sin((R + r) / r * t)
    let x2 = (R - r) * cos(t) + r * cos((R-r)/r * t),
        y2 = (R - r) * sin(t) - r * sin((R - r) / r * t)
    
    stroke(255)
    if (t > 0) {
      line(lastX1, -lastY1, x1, -y1)
      line(lastX2, -lastY2, x2, -y2)
    }
    lastX1 = x1
    lastY1 = y1
    lastX2 = x2
    lastY2 = y2
  }
  r += increment
  pop()
  fill(255)
  textSize(30 / s)
  text(r / R, 20 / s, 10 / s)
}