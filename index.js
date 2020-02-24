class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {
      console.log('Moved');
    };
  }

  draw() {
    console.log('Draw');
  }
}

const c = new Circle(1);
