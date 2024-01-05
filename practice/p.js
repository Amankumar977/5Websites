let passw = (length, incChar, incNum) => {
  let password = "";
  let str = "ABCDEFGHIJKLMNOPQRSTYUVWXYZabcdefghijklmnopqrstyuvwxyz";
  if (incNum) {
    str += "0123456789";
  }
  if (incChar) {
    str += "!@#$%&*()~`_-^";
  }
  for (let i = 0; i < length; i++) {
    let lengthOfStr = str.length;
    let value = Math.floor(Math.random() * lengthOfStr);
    console.log(value);
    password += str[value];
  }
  return password;
};
passw(8, false, false);
