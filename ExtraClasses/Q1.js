let string = "Aman";
setTimeout(function () {
  let strArr = string.split("");
  let reveresedStr = strArr.reverse();
  let reveres = reveresedStr.join("");
  console.log(reveres);
}, 2000);
