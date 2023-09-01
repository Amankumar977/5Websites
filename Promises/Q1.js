function doubleArr(arr, funDub) {
  return funDub(arr)();
}

let arr = [1, 2, 3, 4, 5];
function funDub(arr) {
  return function () {
    for (let elem of arr) {
      console.log(elem * 2);
    }
  };
}
doubleArr(arr, funDub);
