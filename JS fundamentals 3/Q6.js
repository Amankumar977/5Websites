const revsered = (string) => {
  const strArr = string.split("");
  const reveresStrArr = strArr.reverse();
  const revseredStringArr = reveresStrArr.join("");
  return revseredStringArr;
};

let string = "My Name is aman";
let reversedString = revsered(string);
console.log(reversedString);
