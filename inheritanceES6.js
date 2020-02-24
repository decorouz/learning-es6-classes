class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log('move');
  }
}

class Square extends Shape {
  constructor(color, width) {
    super(color);
    this.width = width;
  }
  //Overriding Method
  move() {
    super.move();
    console.log('Square Move');
  }
  draw() {
    console.log('draw');
  }
  area() {
    const result = this.width * this.width;
    console.log('area', result);
  }
}

const square = new Square('red', 4);
