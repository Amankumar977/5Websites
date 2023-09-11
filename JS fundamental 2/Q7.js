let generateOTP = () => {
  let digit = "0123456789";
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += digit[Math.floor(Math.random() * 10)];
  }
  return otp;
};

console.log(`Here is your OTP: ${generateOTP()}`);
