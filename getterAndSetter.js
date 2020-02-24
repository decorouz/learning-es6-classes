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
