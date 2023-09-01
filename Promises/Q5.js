let name1 = "Mithun";
let promise1 = new Promise(function (resolve, reject) {
  let error = false;
  if (!error) {
    resolve();
  } else {
    reject("SomeThing went wrong");
  }
});

promise1
  .then(() => {
    console.log(`Hello ${name1}!`);
  })
  .catch((err) => {
    console.log(err);
  });
