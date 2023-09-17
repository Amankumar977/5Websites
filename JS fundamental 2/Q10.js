const sentences =
  "Please Please submit your assignment on time it is very important";

function wordCounter(sentences) {
  const word = sentences.toLowerCase().split(" ");
  const wordOccurence = {};

  word.map((word) => {
    if (wordOccurence[word]) {
      wordOccurence[word]++;
    } else {
      wordOccurence[word] = 1;
    }
  });
  return wordOccurence;
}

const result = wordCounter(sentences);

console.log(result);
