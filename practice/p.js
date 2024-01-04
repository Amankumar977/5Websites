let arr = [5, 4, 3, 2, 1];
let n = arr.length - 1;
let mergeProcedure = (arr, l, h, mid) => {
  let swap = 0;
  let n1 = mid - l + 1;
  let n2 = h - mid;
  let lsA = [];
  let rsA = [];
  for (let i = 0; i < n1; i++) {
    lsA[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    rsA[j] = arr[mid + 1 + j];
  }
  let i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    if (lsA[i] <= rsA[j]) {
      arr[k++] = lsA[i++];
    } else {
      arr[k++] = rsA[j++];
      swap += mid - l + 1;
    }
  }
  while (i < n1) {
    arr[k++] = lsA[i++];
  }
  while (j < n2) {
    arr[k++] = rsA[j++];
  }
  return swap;
};
let countInversion = (arr, i, j) => {
  let count = 0;
  if (i < j) {
    let mid = Math.floor(i + (j - i) / 2);
    count += countInversion(arr, i, mid);
    count += countInversion(arr, mid + 1, j);
    count += mergeProcedure(arr, i, j, mid);
  }
  return count;
};
console.log(countInversion(arr, 0, n));
