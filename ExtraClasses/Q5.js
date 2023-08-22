function validateURL(url) {
  const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-.]+[.][a-zA-z]+$/;
  if (regex.test(url)) {
    console.log("It is valid URL");
  } else {
    console.log("It is not a valid URL");
  }
}
validateURL("http://www.example.com"); // Valid URL
validateURL("https://123-special.com"); // Valid URL
validateURL("http://invalid.url"); // Not valid URL
validateURL("ftp://www.example.com"); // Not valid URL
