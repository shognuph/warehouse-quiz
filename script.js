const questions = [
  {
    question: "What is your preferred work environment?",
    options: ["Quiet and organized", "Fast-paced and dynamic", "Collaborative and team-oriented", "Independent and flexible"],
    answer: 0
  },
  {
    question: "How do you handle unexpected challenges?",
    options: ["Plan and strategize", "Adapt quickly", "Seek team input", "Take initiative"],
    answer: 1
  },
  {
    question: "What motivates you the most?",
    options: ["Achieving goals", "Overcoming obstacles", "Helping others", "Learning new skills"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelector(".options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
      if (index === q.answer) {
        score++;
        scoreEl.textContent = `Score: ${score}`;
      }
      nextBtn.disabled = false;
    });
    optionsEl.appendChild(button);
  });
  nextBtn.disabled = true;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
});

showQuestion();
