let str = "abc";
let printPermutations = (str, t) => {
  if (str == "") {
    console.log(t);
    return;
  }
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let left = str.substring(0, i);
    let right = str.substring(i + 1);
    let rem = left + right;
    printPermutations(rem, t + ch);
  }
};
printPermutations(str, "");
