// variable elements
var startBtnEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer-total");
var buttonsArea = document.querySelector("#buttons");
var gameLabelEl = document.querySelector("#game-label");
var questionsLabelEl = document.querySelector("#questions-label");
var questionsEl = document.querySelector("#questions");
var highScoreEl = document.querySelector("#high-score");
var highScoreBtnEl = document.querySelector("#high-score-bank");


// creates timer for game
var timer = 45
var timerSet
var questList = 0
var AnsweredQuest = 0
var answeredAll = false

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
        answer: "function()",
        isTrue: true,
    }, {
        answer: "var function",
        isTrue: false,
    }, {
        answer: "function",
        isTrue: false,
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
        answer: "Dominate Original Main",
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
    }, {
        answer: "all of the above",
        isTrue: true,
    }]
}]

function displayQuestion() {
    var questionToDisplay = questions[questList];
    gameLabelEl.textContent = questionToDisplay.questionNum;
    questionsLabelEl.textContent = questionToDisplay.question;
    for (var i = 0; i < questionToDisplay.choices.length; i++) {
        var choiceBtn = document.createElement('button');
        if (questionToDisplay.choices[i].isTrue) {
            choiceBtn.classList.add('thisOne')
        } else {
            choiceBtn.classList.add('notThis')
        }
        choiceBtn.classList.add('buttons')
        choiceBtn.classList.add('start-label')
        choiceBtn.textContent = questionToDisplay.choices[i].answer
        buttonsArea.appendChild(choiceBtn);
}
questList++
}

function startGame() {
    // if we've already completed the game and there are more than 1 children in the questionsAreaDiv
    if (questionsEl.childElementCount > 1){
        // we remove the form
        questionsEl.removeChild(formHighScore)
    }
    // otherwise we remove the start button which we know is there.
    while (buttonsArea.firstChild){
        buttonsArea.removeChild(buttonsArea.firstChild)
    }
    while (highScoreEl.firstChild){
        highScoreEl.removeChild(highScoreEl.firstChild)
    }
    timer = 45
    questList = 0
    startTimer();
    displayQuestion();
    return
}