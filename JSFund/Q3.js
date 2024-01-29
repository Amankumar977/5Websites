function specificChar(String) {
  let regex = /A/g;
  return String.match(regex);
}
console.log(specificChar("amananAAAAAAA"));
