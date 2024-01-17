let canPlaceFlowers = (flowerbed, n) => {
  let k = flowerbed.length;
  for (let i = 0; i < k && n > 0; i++) {
    if (flowerbed[i] == 0) {
      if (i == 0) {
        if (flowerbed[i + 1] == 0) {
          flowerbed[i] = 1;
          n--;
        }
      } else if (i == k - 1) {
        if (flowerbed[k - 2] == 0) {
          flowerbed[k - 1] = 1;
          n--;
        }
      } else if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }
  return n == 0;
};
let flowerbed = [1, 0, 1, 0, 1, 0, 1];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n));
