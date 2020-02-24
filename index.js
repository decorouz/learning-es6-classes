// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.move = function() {
//       console.log('Moved');
//     };
//   }
//   // Instance method
//   draw() {
//     console.log('Draw');
//   }

//   //Static method
//   static parse(str) {
//     const radius = JSON.parse(str).radius;
//     return new Circle(radius);
//   }
// }

// const circle = Circle.parse('{"radius": 1}');
// console.log(circle);

// Implementing Privte Properties Using Symbols

// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//   constructor(radius) {
//     this[_radius] = radius;
//   }

//   [_draw]() {}
// }
// const c = new Circle(1);

// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);

// Using Getter and Setter Methods

const _radius = new WeakMap();

class Cirle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('Invalid radius.');
    _radius.set(this, value);
  }
}

const c = new Cirle(1);
