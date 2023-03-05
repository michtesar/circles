class Circle {
  constructor(color, radius, phase = 0.0) {
    this.color = color
    this.radius = radius
    this.phase = phase
    this.phaseStep = random(0.5, 1) / 30
    this.noiseMax = 3
  }

  draw() {
    stroke(this.color)
    noFill()
    beginShape()
    for (let a = 0; a <= TWO_PI; a += 0.01) {
      let xOffset = map(cos(a + this.phase), -1, 1, 0, this.noiseMax)
      let yOffset = map(sin(a), -1, 1, 0, this.noiseMax)
      let r = map(noise(xOffset, yOffset), 0, 1, 100, this.radius)
      let x = r * cos(a)
      let y = r * sin(a)
      vertex(x, y)
    }

    endShape(CLOSE)
    this.phase += this.phaseStep
  }
}
