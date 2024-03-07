let bubbleSortRecursive = (arr, end) => {
  if (end <= 0) {
    return;
  }

  // Perform a single pass through the array
  for (let i = 0; i < end; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }

  // Recursive call with one less element in the end
  bubbleSortRecursive(arr, end - 1);
};

let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

let arr = [2, 0, -89, 46];
bubbleSortRecursive(arr, arr.length - 1);
console.log(arr);
