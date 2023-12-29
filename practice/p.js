let arr = [1, 2, 3];
let finalArr = [];
let printPermutations = (arr, tempArr, finalArr) => {
  if (arr.length == 0) {
    finalArr.push([...tempArr]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let left = arr.slice(0, i);
    let right = arr.slice(i + 1);
    let rem = [...left, ...right];
    tempArr.push(num);
    printPermutations(rem, tempArr, finalArr);
    tempArr.pop();
  }
};
printPermutations(arr, [], finalArr);
console.log(finalArr);
