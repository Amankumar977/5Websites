class Shapes {
  poly(ref) {
    console.log(ref.area());
    console.log(ref.perimeter());
  }
}
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return `Area : ${Math.PI * this.radius * this.radius}`;
  }
  perimeter() {
    return `Permiter : ${2 * Math.PI * this.radius}`;
  }
}
class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  area() {
    return `Area : ${this.length * this.breadth}`;
  }
  perimeter() {
    return `Perimter : ${2 * (this.length + this.breadth)}`;
  }
}
class Traingle {
  constructor(base, height, side1, side2, side3) {
    this.base = base;
    this.height = height;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  area() {
    return `Area : ${0.5 * this.base * this.height}`;
  }
  perimeter() {
    return `Perimeter : ${this.side1 + this.side2 + this.side3}`;
  }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const traingle = new Traingle(8, 6, 5, 7, 10);
const shapes = new Shapes();
console.log(`Circle:`);
shapes.poly(circle);
console.log(`Rectangle :`);
shapes.poly(rectangle);
console.log(`Traingle :`);
shapes.poly(traingle);
