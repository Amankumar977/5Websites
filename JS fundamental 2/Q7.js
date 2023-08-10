let generateOTP = () => {
  let digit = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digit[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

console.log(`Here is your OTP: ${generateOTP()}`);
