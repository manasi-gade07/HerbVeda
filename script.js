//Seacrch
document.addEventListener("DOMContentLoaded", function() {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  searchForm.addEventListener("submit", function(event) {
      event.preventDefault();  
      const query = searchInput.value.toLowerCase(); 
      cards.forEach(card => {
          const cardId = card.id.toLowerCase(); 
          if (cardId.includes(query)) {
              card.style.display = "block"; 
          } else {
              card.style.display = "none"; 
          }
      });
  });
});




// Quiz

let currentQuestionIndex = 0; 
const allQuestions = [
  {
    question: "What is Aloe Vera commonly used for?",
    options: ["Skin care", "Food coloring", "Cooking spice", "Decoration"],
    correctAnswer: 0 
  },
  {
    question: "What is Tulsi known for?",
    options: ["Medicinal properties", "Decoration", "Food ingredient", "None of the above"],
    correctAnswer: 0
  },
  {
    question: "What is Neem primarily used for?",
    options: ["Skin care", "Cooking", "Cleaning", "Decoration"],
    correctAnswer: 0
  },
  {
    question: "What benefit does Turmeric provide?",
    options: ["Anti-inflammatory", "Antioxidant", "Both", "None"],
    correctAnswer: 2
  },
  {
    question: "Which plant is known as 'the queen of herbs'?",
    options: ["Tulsi", "Aloe Vera", "Mint", "Lavender"],
    correctAnswer: 0
  },
  {
    question: "What is the primary use of Mint?",
    options: ["Medicinal properties", "Culinary use", "Decoration", "Both culinary and medicinal"],
    correctAnswer: 3
  },
  {
    question: "What part of the plant is typically used for Ginger?",
    options: ["Root", "Leaf", "Flower", "Seed"],
    correctAnswer: 0
  },
  {
    question: "Which plant is often used as a natural remedy for indigestion?",
    options: ["Ginger", "Mint", "Basil", "Lavender"],
    correctAnswer: 0
  },
  {
    question: "What is the scientific name of Aloe Vera?",
    options: ["Aloe barbadensis", "Aloe vera", "Aloe arborescens", "Aloe maculata"],
    correctAnswer: 1
  },
  {
    question: "What is the primary benefit of using Chamomile?",
    options: ["Relaxation", "Cough relief", "Pain relief", "Skin irritation"],
    correctAnswer: 0
  }
];

let userAnswers = [];  
let score = 0;

function getRandomQuestions() {
  let shuffledQuestions = [...allQuestions]; 
  shuffledQuestions = shuffledQuestions.sort(() => Math.random() - 0.5); 
  return shuffledQuestions.slice(0, 5); 
}

const questions = getRandomQuestions(); 

function showQuestion() {
  const question = questions[currentQuestionIndex];
  const questionContainer = document.getElementById('quiz-question-container');

  questionContainer.innerHTML = `
    <div class="question-card">
      <p><strong>Question ${currentQuestionIndex + 1}:</strong> ${question.question}</p>
      ${question.options.map((option, index) => `
        <input type="radio" name="q${currentQuestionIndex}" value="${index}" id="q${currentQuestionIndex}${index}">
        <label for="q${currentQuestionIndex}${index}">${option}</label><br>
      `).join('')}
    </div>
  `;

  // Show/hide buttons based on the question index
  if (currentQuestionIndex === questions.length - 1) {
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('submitButton').style.display = 'inline-block';
  } else {
    document.getElementById('nextButton').style.display = 'inline-block';
    document.getElementById('submitButton').style.display = 'none';
  }
}

// Handle "Next Question" button click
function nextQuestion() {
  const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);

  if (selectedAnswer) {
    userAnswers[currentQuestionIndex] = parseInt(selectedAnswer.value);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    submitQuiz();
  }
}

function submitQuiz() {
  const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);

  if (selectedAnswer) {
    userAnswers[currentQuestionIndex] = parseInt(selectedAnswer.value);
  }

  score = userAnswers.reduce((total, answer, index) => {
    return total + (answer === questions[index].correctAnswer ? 1 : 0);
  }, 0);

  document.getElementById('quiz-question-container').style.display = 'none';
  document.getElementById('nextButton').style.display = 'none';

  document.getElementById('score-result').textContent = `Your Score: ${score} out of 5`;
  document.getElementById('quiz-result').style.display = 'block';
  document.getElementById('submitButton').style.display = 'none';  // Hide the submit button after completion
}

function restartQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  score = 0;

  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-card').style.display = 'block';
  document.getElementById('quiz-question-container').style.display = 'block';
  document.getElementById('nextButton').style.display = 'inline-block';

  showQuestion();  
}

document.querySelector('.btn-outline-success#quizBtn').addEventListener('click', function () {
  document.querySelector('.quiz-overlay').style.display = 'block';
  document.getElementById('quiz-card').style.display = 'block';
  document.getElementById('quiz-result').style.display = 'none'; // Hide result initially

  showQuestion();  
});

document.querySelector('.quiz-overlay').addEventListener('click', function () {
  document.querySelector('.quiz-overlay').style.display = 'none';
  document.getElementById('quiz-card').style.display = 'none';
});

document.getElementById('closeQuiz').addEventListener('click', function () {
  document.querySelector('.quiz-overlay').style.display = 'none';
  document.getElementById('quiz-card').style.display = 'none';
});
