function manipulateString(string, logString) {
  return logString(string);
}
function logString(string) {
  let captialString = string.toUpperCase();
  console.log(`The manipulated string is: ${captialString}`);
}
manipulateString("Hello world!", logString);
