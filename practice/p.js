let arr = [7, 1, 3, 5, 2, 6, 4];
let n = arr.length - 1;
let partition = (arr, low, high) => {
  let pivot = arr[low];
  let i = low;
  for (j = low + 1; j <= high; j++) {
    if (arr[j] <= pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[low];
  arr[low] = arr[i];
  arr[i] = temp;
  return i;
};
let quickSort = (arr, l, h) => {
  if (l < h) {
    let mid = partition(arr, l, h);
    quickSort(arr, l, mid - 1);
    quickSort(arr, mid + 1, h);
  }
};
quickSort(arr, 0, n);
let printArr = (arr) => {
  for (let elem of arr) {
    console.log(elem);
  }
};
printArr(arr);
