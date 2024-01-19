function maximumSwap(num) {
  let numArr = num.toString().split('');
  let lastOccurrence = Array(10).fill(0);

  // Record the last occurrence index of each digit
  for (let i = 0; i < numArr.length; i++) {
      lastOccurrence[parseInt(numArr[i])] = i;
  }

  // Iterate through each digit and find the maximum possible swap
  for (let i = 0; i < numArr.length; i++) {
      for (let d = 9; d > parseInt(numArr[i]); d--) {
          if (lastOccurrence[d] > i) {
              // Swap and convert back to integer
              let temp = numArr[i];
              numArr[i] = numArr[lastOccurrence[d]];
              numArr[lastOccurrence[d]] = temp;
              return parseInt(numArr.join(''));
          }
      }
  }

  // If no swap is needed, return the original number
  return num;
}

// Example usage:
let result = maximumSwap(2736);
console.log(result);  // Output: 7236
