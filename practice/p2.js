class Product {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log("My name is ", this.name);
  }
}
let x = new Product("aman");
x.hello();
