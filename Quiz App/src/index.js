const inputs = document.querySelectorAll("form input");
const questionNumber = document.querySelector(".questionNum");
const scoreDisplay = document.querySelector(".score");
let updateScore = (currScore) => {
  scoreDisplay.innerHTML = parseInt(currScore) + 1;
};
let showAnswer = (id, questionNumber, currInput) => {
  let answer = ["Sample", "C", "A", "B", "D", "B", "C", "A", "D", "B", "C"];
  let correctAnswer = answer[questionNumber];

  if (!currInput.disabled) {
    if (id.toUpperCase() === correctAnswer.toUpperCase()) {
      let pTag = document.createElement("p");
      pTag.textContent = `👏 Yeah correct Answer.`;

      // Append the pTag to the parent of the input
      currInput.parentNode.appendChild(pTag);

      // Optionally, you can also apply styles to the input
      currInput.style.outline = "1px solid green";
      updateScore(scoreDisplay.innerHTML);
    } else {
      let ptag = document.createElement("p");
      ptag.textContent = `👍 Well Tried! The correct answer is ${correctAnswer}.`;
      currInput.parentNode.appendChild(ptag);
      currInput.style.outline = "1px solid red";
    }
  }
  inputs.forEach((input) => (input.disabled = true));
};

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", function () {
    showAnswer(inputs[i].id, questionNumber.innerHTML, inputs[i]);
  });
}
