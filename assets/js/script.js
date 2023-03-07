
// define questions and answers here
const questions = [
    {
      question: "What is the longest river in Ireland?",
      choices: ["River Shannon", "River Lee", "River Liffey", "River Bandon"],
      answer: 0
    },
    {
      question: "Which Continent is Mexico in?",
      choices: ["Asia", "Europe", "South America", "North America"],
      answer: 3
    },
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Madrid", "Berlin"],
      answer: 0
    },
    {
        question: "What is the most populous country in the world?",
        choices: ["India", "United States", "China", "Brazil"],
        answer: 2
      },
      {
        question: "The Canadian Flag has which icon it on?",
        choices: ["Shamrock", "Maple Leaf", "Rose", "Orchid"],
        answer: 1
      },
      {
        question: "Mate (maté) is the National Drink of which South American Country?",
        choices: ["Brazil", "Argentina", "Uruguay", "Colombia"],
        answer: 1
      },
      {
        question: "In which Country are Cows seen as sacred?",
        choices: ["Turkey", "Nigeria", "Peru", "India"],
        answer: 3
      },
      {
        question: "What currency did Italy use before the Euro?",
        choices: ["Lira", "Real", "Dollar", "Sterling"],
        answer: 0
      },
      {
        question: "What is the smallest Country in the world by landmass?",
        choices: ["Malta", "Iceland", "Vatican", "Cuba"],
        answer: 2
      },
      {
        question: "What is the most Northern Capital City?",
        choices: ["Tallinn", "Oslo", "Helsinki", "Reykjavik"],
        answer: 3
      }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  const introArea = document.getElementById('intro');
  const startButton = document.getElementById('start-button');
  const questionContainerElement = document.getElementById('quizArea');
  const goAgain = document.getElementById('goAgain');

   // start button

  startButton.addEventListener('click', startQuiz);

  /** 
  * This function starts the quiz by hiding the intro area and revealing
  * the question container
  */
  function startQuiz(){
    console.log('Hello from the  function startQuiz');
    introArea.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    
   }

  /** 
  *  This function gets the current question and displays it
  */
  function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    for (let i = 0; i < question.choices.length; i++) {
      document.getElementById("choice" + i).textContent = question.choices[i];
    }
  }
  
  
  /** 
  *  This function check the answer and update the score
  */
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
  
  
  /** 
  * This function display's the final score and ends the quiz
  */
  function endQuiz() {

    let comment = 'Aww!';
    if (score > 4){
      comment = 'Not bad!';
    }
    if (score > 8){
      comment = 'Well done!';
    }
  
    document.getElementById("question").textContent = "Quiz complete!";
    document.getElementById("choices").style.display = "none";
    document.getElementById("scoreComment").innerText = `${comment} You score ${score} out of ${questions.length}`; 
    goAgain.classList.remove('hide');
  }
  
  /** 
  * This function relaods the page 
  */
  function startOver(){  
    window.location.reload();
  }


  // Start the quiz!
  displayQuestion();