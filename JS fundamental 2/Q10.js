const sentence =
  "please please submit your assignment on time, your assigmnets are important";

function wordCounter(sentence) {
  const words = sentence.toLowerCase().split(" ");
  const wordOccurrences = {};

  words.forEach((word) => {
    if (word in wordOccurrences) {
      wordOccurrences[word]++;
    } else {
      wordOccurrences[word] = 1;
    }
  });
  return wordOccurrences;
}

const result = wordCounter(sentence);
console.log(result);
