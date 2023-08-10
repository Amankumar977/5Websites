const sentence =
  "please please submit your assignment on time, your assigmnets are important";

function wordCounter(sentence) {
  Array.from(sentence).map((word) => {
    if (word === word + 1) {
      return word;
    }
  });
}

const result = wordCounter(sentence);
console.log(result);
