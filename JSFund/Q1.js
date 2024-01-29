let outerFunction = () => {
  let item = 45;
  return setTimeout(() => {
    console.log(item);
  }, 3000);
};

let x = outerFunction();
