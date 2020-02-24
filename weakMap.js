// Using Weakmap to implement Privateg Properties

const _radius = new WeakMap();
const _move = new WeakMap();

class Cirle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log('move', this);
    });
  }

  draw() {
    _move.get(this)();
    console.log('draw');
  }
}

const a = new Cirle(1);
