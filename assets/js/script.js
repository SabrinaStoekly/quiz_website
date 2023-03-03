
// define your questions and answers here
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Madrid", "Berlin"],
      answer: 0
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Mars", "Saturn", "Jupiter", "Venus"],
      answer: 2
    },
    {
      question: "What is the most populous country in the world?",
      choices: ["India", "United States", "China", "Brazil"],
      answer: 2
    },
    {
        question: "What is the most populous country in the world?",
        choices: ["India", "United States", "China", "Brazil"],
        answer: 2
      }
  ];
  
  let currentQuestion = 0;

  let score = 0;

  const introArea = document.getElementById('intro');

  const startButton = document.getElementById('start-button');

  const questionContainerElement = document.getElementById('quizArea');
 
  // start button

  startButton.addEventListener('click', startQuiz);

  function startQuiz(){
    console.log('Hello from the  function startQuiz');
    introArea.classList.add('hide');
    questionContainerElement.classList.remove('hide');
   }

  // display the current question and choices
  function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    for (let i = 0; i < question.choices.length; i++) {
      document.getElementById("choice" + i).textContent = question.choices[i];
    }
  }
  
  // check the answer and update the score
  function answer(choice) {
    const question = questions[currentQuestion];
    if (choice === question.answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }
  
  // display the final score and end the quiz
  function endQuiz() {

    let comment = 'Aww!';
    if (score > 4){
      comment = 'Not bad!';
    }
    if (score > 8){
      comment = 'Well done!'
    }
  
    document.getElementById("question").textContent = "Quiz complete!";
    document.getElementById("choices").style.display = "none";
    document.getElementById("scoreComment").innerText = `${comment} You score ${score} out of ${questions.length}`; 

  }
  
  // start the quiz
  displayQuestion();