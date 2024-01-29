function isregexMatched(String, pattern) {
  return pattern.test(String);
}
console.log(isregexMatched("amascn", /aman/));
