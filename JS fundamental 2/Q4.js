const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Laptop bag", price: 20000 },
  { name: "watch", price: 20000 },
  { name: "Mobile Charger", price: 1500 },
];
// First way
const findPrice = (productArray) => {
  if (productArray.length === 0) {
    console.log("No Products found.");
    return;
  }
  let maxProduct = productArray[0];
  let minProduct = productArray[0];

  for (let i = 1; i < productArray.length; i++) {
    if (productArray[i].price > maxProduct.price) {
      maxProduct = productArray[i];
    }
    if (productArray[i].price < minProduct.price) {
      minProduct = productArray[i];
    }
  }
  console.log(
    `Product with maximun Price is ${maxProduct.name} and the price is ${maxProduct.price}.`
  );
  console.log(
    `Product with maximun Price is ${minProduct.name} and the price is ${minProduct.price}.`
  );
};

findPrice(products);

// second way
function findMinMaxPrices(products) {
  if (products.length === 0) {
    console.log("No Products Found");
  }

  return products.reduce(
    (result, product) => {
      if (product.price < result.minPrice) {
        result.minPrice = product.price;
        result.minPriceItem = product.name;
      }
      if (product.price > result.maxPrice) {
        result.maxPrice = product.price;
        result.maxPrice = product.name;
      }
      return result;
    },
    {
      minPrice: products[0].price,
      maxPrice: products[0].price,
      minPriceItem: products[0].name,
      maxPriceItem: products[0].name,
    }
  );
}
let infoOfMinMax = findMinMaxPrices(products);

console.log(
  `Product with the minimum price is ${infoOfMinMax.minPriceItem} Price: ${infoOfMinMax.minPrice}`
);
console.log(
  `Product with the maximum price is ${infoOfMinMax.maxPriceItem} Price: ${infoOfMinMax.maxPrice}`
);
