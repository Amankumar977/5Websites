const delay = 3000;
let countDown = delay / 1000;

const countDownInterval = setInterval(() => {
  console.log(`Time remainiging : ${countDown} seconds`);
  countDown--;

  if (countDown < 0) {
    clearInterval(countDownInterval);
    generateRandomNumber();
  }
}, 1000);
let generateRandomNumber = () => {
  console.log(`The random number is ${Math.floor(Math.random() * 100)}`);
};
