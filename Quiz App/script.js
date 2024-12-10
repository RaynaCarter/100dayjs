// create a quiz class 
class Quiz {
    // constructors initializes new objects of the 'Quiz' class
    constructor(questions) {
        // initializes the score to 0
        this.score = 0;
        // Assigns the array of questions passed as an argument to the questions property
        this.questions = questions;
        // u already know
        this.questionIndex = 0;
    }
    // returns the current question object from the questions array based on the questionIndex
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    // checks if answer is correct
    // and if so adds points to the score
    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// create a question class

class Question {
    constructor(text,choices,answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// display question
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show next question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show the options 
        let choices = quiz.getQuestionIndex().choices;

        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

// guess function
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

// show quiz progress

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// Show score
function showScores() {
    let quizEndHTML = 
    `
    <h1>Quiz Completed</h1>
     <h2 id="score"> You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
     <div class="quiz-repeat">
    <a href="index.html">TAKE Quiz Once More</a>
</div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

// make questions
let questions = [
    new Question(
        "How many kids does barak obama have?", ["0","1","2","3"], "2"
    ),
    new Question(
        "How many dogs does barak obama have?", ["0","1","2","3"], "1"
    ),
    new Question(
        "How many wives does barak obama have?", ["0","1","2","3"], "1"
    ),
    new Question(
        "How many parents does barak obama have?", ["0","1","2","3"], "2"
    ),
    new Question(
        "How many years did barak obama serve?", ["0","1","2","8"], "8"
    )
];

let quiz = new Quiz(questions);

// display question 
displayQuestion();

// Add a countdown
let time = 0.5;
let quizTimeInMins = time * 60 * 60;
quizTime =  quizTimeInMins / 60;

let counting = document.getElementById("count-down");

function startCountdown(){
    let quizTimer = setInterval(function() {
        if(time <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60)
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    },1000)
}
startCountdown();