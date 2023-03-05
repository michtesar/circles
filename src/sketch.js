let circles = []

function randomColor() {
  return [random(255), random(255), random(255)]
}

function setup() {
  createCanvas(400, 400)
  for (let i = 0; i < 50; i++) {
    const step = random(80, 120)
    const color = [25, 200, 200, 255 / i]
    circles.push(new Circle(color, step))
  }
}

function draw() {
  background(28)
  translate(width / 2, height / 2)
  circles.forEach(circle => {
    circle.draw()
  })
}
