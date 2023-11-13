// Getting Password Length
let passwordLen = 8; // Set a default value
let passwordLength = document.querySelector(".passwordLength input");

passwordLength.addEventListener("change", () => {
  let lengthOfpass = passwordLength.value;

  if (lengthOfpass == "" || lengthOfpass == "0") {
    passwordLen = 8;
  } else {
    passwordLen = lengthOfpass;
  }
});

// Checking UpperCase ChecBox
let upperCheck = document.querySelector("#upperCheck");
let isUpperChecked = false;
upperCheck.addEventListener("click", () => {
  isUpperChecked = upperCheck.checked;
});
//Checking Lowercase CheckBox
let lowerCheck = document.querySelector("#lowerCheck");
let islowerChecked = false;
lowerCheck.addEventListener("click", () => {
  islowerChecked = lowerCheck.checked;
});
//Checking Number CheckBox
let numberCheck = document.querySelector("#numberCheck");
let isnumberChecked = false;
numberCheck.addEventListener("click", () => {
  isnumberChecked = numberCheck.checked;
});
// Checkingsymbol check
let symbolCheck = document.querySelector("#symbolCheck");
let issymbolCheckeded = false;
symbolCheck.addEventListener("click", () => {
  issymbolCheckeded = symbolCheck.checked;
});
// generating the password from generate Button
let generateButton = document.querySelector(".generateButton");
generateButton.addEventListener("click", (e) => {
  e.preventDefault();
  generatePassword(
    passwordLen,
    isUpperChecked,
    islowerChecked,
    isnumberChecked,
    issymbolCheckeded
  );
});
let generatePassword = (
  passwordLen,
  isUpperChecked,
  islowerChecked,
  isnumberChecked,
  issymbolCheckeded
) => {
  let UpperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "!@#$%&*:;{}[|]/";
  let passwordString = "";

  if (isUpperChecked) {
    passwordString += UpperCaseLetters;
  }

  if (islowerChecked) {
    passwordString += lowercaseLetters;
  }

  if (isnumberChecked) {
    passwordString += numbers;
  }

  if (issymbolCheckeded) {
    passwordString += symbols;
  }

  if (
    !isUpperChecked &&
    !islowerChecked &&
    !isnumberChecked &&
    !issymbolCheckeded
  ) {
    // If no options are selected, use the default set
    passwordString = UpperCaseLetters + lowercaseLetters + numbers + symbols;
  }

  let finalGeneratedPassword = "";
  for (let i = 0; i < passwordLen; i++) {
    let index = Math.floor(Math.random() * passwordString.length);
    finalGeneratedPassword += passwordString[index];
  }
  let generatePass = document.querySelector(".generatePass");
  generatePass.value = finalGeneratedPassword;
  let copyButton = document.querySelector(".copyButton");
  copyButton.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(finalGeneratedPassword);
  });
};
