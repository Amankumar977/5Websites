class Inventory {
  productsArr = [];

  addProduct(product) {
    this.productsArr.push(product);
    this.inventoryName = product.inventoryName;
    console.log(`Added ${this.inventoryName} to the inventory`);
  }

  deleteProduct(productName) {
    let found = false;
    this.inventoryName = productName;
    for (let i = 0; i < this.productsArr.length; i++) {
      if (this.productsArr[i].inventoryName === productName) {
        this.productsArr.splice(i, 1);
        found = true;
        break;
      }
    }
    if (found) {
      console.log(`Deleted ${productName} from the inventory`);
    } else {
      console.log(`${productName} not ffound in the inventory`);
    }
  }
}
class Product {
  constructor(inventoryName, category, length, width) {
    this.inventoryName = inventoryName;
    this.category = category;
    this.length = length;
    this.width = width;
  }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", "Electronics", 899, 10);
const product2 = new Product("Book", "Books", 20, 50);
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.deleteProduct("Laptop");
