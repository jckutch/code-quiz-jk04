// variable elements
var startGameEl = document.querySelector("#startGame");
var startBtnEl = document.querySelector("#startGameBtn");
var timeCounterEl = document.querySelector("#totalTime");
var questionEl = document.querySelector("#question");
var questionSiteEl = document.querySelector("#questionsContainer");
var highScoreEl = document.querySelector("#highScore");
var highScoreStoreEl = doument.querySelector("#highScoreStore");

// creates timer for game
var timer = 45
var timerSet

function startTimer() {
    timerSet = setInterval(function() {
        if (timer > 0) {
        timer--
        } else {
            clearInterval(timerSet)
            endGame();
        }
        totalCounter.textContent = timer;
    }, 450);
}

// game questions
var questions = [{
    questionNum: "Question 1", 
    question: "What syntax would call a function?",
    choices: [{
        answer: "call function",
        isTrue: false,
    }, {
        answer: "function",
        isTrue: false,
    }, {
        answer: "var function",
        isTrue: false,
    }, {
        answer: "function()",
        isTrue: true,
    }]
}, {
    questionNum: "Question 2",
    question: "When did javascript first appear?",
    choices: [{
        answer: "1987",
        isTrue: false,
    }, {
        answer: "1999",
        isTrue: false,
    }, {
        answer: "1995",
        isTrue: true,
    }, {
        answer: "2001",
        isTrue: false,
    }]
}, {
    questionNum: "Question 3",
    question: "What does DOM stand for?",
    choices: [{
        answer: "Document Object Model",
        isTrue: true,
    }, {
        answer: "Delinear Orientation Method",
        isTrue: false,
    }, {
        answer: "Direct Object Modifier",
        isTrue: false,
    }, {
        answer: "Dominate Origin Main",
        isTrue: false,
    }]
}, {
    questionNum: "Question 4",
    question: "Arrays in Javascript can be used to store __________.",
    choices: [{
        answer: "booleans",
        isTrue: false,
    }, {
        answer: "numbers",
        isTrue: false,
    }, {
        answer: "strings",
        isTrue: false,
    },
    {
        answer: "all of the above",
        isTrue: true,
    }]
}]
