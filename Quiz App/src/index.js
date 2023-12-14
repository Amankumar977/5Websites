document.addEventListener("DOMContentLoaded", function () {
  const questionNumber = document.querySelector(".questionNum");
  const scoreDisplay = document.querySelector(".score");
  const mainQuestion = document.querySelector("#mainQuestion");
  const quizForm = document.querySelector(".quizForm");
  const nextBtn = document.querySelector(".btn");
  let currentQuestionIndex = 1;
  let currentScore = 0;

  let questions = [
    {
      MainQuestion: "What is 2+2 ?",
      options: ["A. 5", "B. 6", "C. 4", "D. 8"],
      correctAnswer: "C",
    },
    {
      MainQuestion: "What is 4*4 ?",
      options: ["A. 16", "B. 8", "C. 4", "D. 0"],
      correctAnswer: "A",
    },
    {
      MainQuestion: "what is 1+1 ?",
      options: ["A. 2", "B. 8", "C. 4", "D. 0"],
      correctAnswer: "A",
    },
    {
      MainQuestion: "what is Square of 7 ?",
      options: ["A. 48", "B. 49", "C. 50", "D. 60"],
      correctAnswer: "B",
    },
    {
      MainQuestion: "what is Cube Root 81 ?",
      options: ["A. 5", "B. 6", "C. 8", "D. 9"],
      correctAnswer: "D",
    },
    {
      MainQuestion: "what is HCF of 2 and 10 ?",
      options: ["A. 2", "B. 3", "C. 10", "D. 5"],
      correctAnswer: "A",
    },
    {
      MainQuestion: "what is LCM of 2 and 10 ?",
      options: ["A. 2", "B. 3", "C. 10", "D. 5"],
      correctAnswer: "C",
    },
    {
      MainQuestion: "what would be value of 2 ^ 3 ?",
      options: ["A. 8", "B. 12", "C. 16", "D. 24"],
      correctAnswer: "A",
    },
    {
      MainQuestion: "what would be log of 8 with base 2 ?",
      options: ["A. 3", "B. 5", "C. 9", "D. 10"],
      correctAnswer: "A",
    },
    {
      MainQuestion: "what would be binary Number of 5 ?",
      options: ["A. 101", "B. 102", "C. 103", "D. 104"],
      correctAnswer: "A",
    },
  ];

  displayQuestion();

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex - 1];
    questionNumber.innerHTML = currentQuestionIndex;
    mainQuestion.textContent = currentQuestion.MainQuestion;
    quizForm.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const InputId = String.fromCharCode(65 + index);
      const label = document.createElement("label");
      label.setAttribute("for", InputId);
      const input = document.createElement("input");
      input.type = "text";
      input.name = InputId;
      input.id = InputId;
      input.value = option;
      input.className = "w-full p-2 mb-4 border border-gray-500";
      label.appendChild(input);
      quizForm.appendChild(label);

      input.addEventListener("click", function () {
        checkAnswer(input.id, currentQuestionIndex, input);
      });
    });
  }

  const inputs = document.querySelectorAll("form input");

  let checkAnswer = (id, questionNumber, currInput) => {
    let correctAnswer = questions[questionNumber - 1].correctAnswer;

    if (!currInput.disabled) {
      if (id.toUpperCase() === correctAnswer.toUpperCase()) {
        let pTag = document.createElement("p");
        pTag.textContent = `👏 Yeah correct Answer.`;
        currInput.parentNode.appendChild(pTag);
        currInput.style.outline = "1px solid green";
        currentScore++;
        scoreDisplay.innerHTML = currentScore;
      } else {
        let ptag = document.createElement("p");
        ptag.textContent = `👍 Well Tried! The correct answer is ${correctAnswer}.`;
        currInput.parentNode.appendChild(ptag);
        currInput.style.outline = "1px solid red";
      }
    }

    inputs.forEach((input) => (input.disabled = true));
  };

  const mainSection = document.querySelector(".mainSection");
  const finalResult = document.querySelector(".finalResult");
  let showmeResult = false;

  nextBtn.addEventListener("click", function () {
    if (currentQuestionIndex == 10) {
      nextBtn.innerHTML = "Check Result";
      showmeResult = true;
      showResult(showmeResult);
    } else {
      currentQuestionIndex++;
      displayQuestion();
    }
  });

  function showResult(showmeResult) {
    if (showmeResult) {
      mainSection.style.display = "none";
      finalResult.style.display = "block";
    }
    const totalscore = document.querySelector(".totalscore");
    totalscore.innerHTML = currentScore;
    const retakeBtn = document.querySelector("#retakeBtn");
    retakeBtn.addEventListener("click", function () {
      currentQuestionIndex = 1;
      currentScore = 0;
      displayQuestion();
      mainSection.style.display = "block"; // Show the main section
      finalResult.style.display = "none"; // Hide the final result section
      nextBtn.innerHTML = "Next";
    });
  }
});
