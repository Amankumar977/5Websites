var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxContArea = 0;
  while (left < right) {
    let widthOfCon = right - left;
    let heightOfCon = 0;
    if (height[left] < height[right]) {
      heightOfCon = height[left];
      left++;
    } else {
      heightOfCon = height[right];
      right--;
    }
    let currContArea = widthOfCon * heightOfCon;
    maxContArea = Math.max(currContArea, maxContArea);
  }
  return maxContArea;
};
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
