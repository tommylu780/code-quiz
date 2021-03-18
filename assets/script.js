// Variables for page elements
// Time and Score
var timeEl = document.querySelector("p.time");
var secondsLeft = 10;
var scoreEl = document.querySelector('#score');


// Sections
//~ Section intro
const introEl = document.querySelector('#intro');
// Question
var questionsEl = document.querySelector('#questions');
// where question is
var questionEl = document.querySelector('#question');
// Question user answered
var questionCount = 0;
// Answer right or wrong
const rwMessageEl = document.querySelector('#rw-message');

//Buttons
var btnStart = document.querySelector('#start');
//Answer buttons
var ansBtn = document.querySelectorAll('.ansBtn');
var ansBtn1 = document.querySelector('#answer1');
var ansBtn2 = document.querySelector('#answer2');
var ansBtn3 = document.querySelector('#answer3');
var ansBtn4 = document.querySelector('#answer4');

//~ Section Final
const finalEl = document.querySelector('#final');
// Enter Name
var playerName = document.querySelector('#initials');
//~ Section highscore
const highScore = document.querySelector('#highscore');
// Order list
var scoreListEl = document.querySelector('#score-list');
// Array score
var scoreList = [];


// Object for questions
const questions = [ // array of objects
    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];

// Functions
// Timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = 'Time: ' + secondsLeft + 's';

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}
// Start quiz with timer
function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}
// Set question, count and display next question
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ansBtn1.textContent = questions[id].answers[0];
        ansBtn2.textContent = questions[id].answers[1];
        ansBtn3.textContent = questions[id].answers[2];
        ansBtn4.textContent = questions[id].answers[3];
        
    }
}
// Check answer and move to next question
function checkAnswer(event) {
    event.preventDefault();
    // Show answer if correct or not
    rwMessageEl.style.display = "block";
    var p = document.createElement("p");
    rwMessageEl.appendChild(p);
    // Time out after 1s
    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    // Answer check
    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = 'Correct!';
        scoreEl.textContent++;
        secondsLeft += 10;
        console.log(scoreEl.textContent);
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        // secondsLeft = secondsLeft - 10;
        p.textContent = 'Wrong!';
    }
    //Increment so the questions index is increased
    if (questionCount < questions.length) {
        questionCount++;
    }
    // Button answer clicked next one come up
    setQuestion(questionCount);
}
// Add score
// function addScore(event) {
//     event.preventDefault();
//     finalEl.style.display = 'none';
//     highScore.style.display = 'block';

//     var in
// }

// Event listener
btnStart.addEventListener("click", startQuiz);
// Check answer loop
ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});