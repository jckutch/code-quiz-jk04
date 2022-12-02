// variable elements
var startGameEl = document.querySelector("#startGame");
var startBtnEl = document.querySelector("#startGameBtn");
var timeCounterEl = document.querySelector("#totalTime");
var questionEl = document.querySelector("#question");
var questSiteEl = document.querySelector("#questContainer");
var buttonSiteEl = document.querySelector("#buttonsDiv")
var highScoreEl = document.querySelector("#highScore");
var highScoreStoreEl = doument.querySelector("#highScoreStore");

startBtnEl.addEventListener('mouseup', startGame);

// creates timer for game
var timer = 45

var timerSet
var questList = 0
var answerAll = false
var answeredQuest = 0 

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

function showQuest() {
    var displayQuest = questions[questList];
    h1El.textContent = displayQuest.title;
   questSiteEl.textContent = displayQuest.question;
for (var i = 0; i < displayQuest.choices.length; i++) {
    var choiceBtn = document.createElement('button');
    if (displayQuest.choices[i].isTrue) {
        choiceBtn.classList.add('thisOne')
    } else {
        choiceBtn.classList.add('notThis')
    }
    choiceBtn.classList.add('buttons')
    choiceBtn.classList.add('whiteText')
    choiceBtn.textContent = displayQuest.choices[i].answer
    buttonSiteEl.appendChild(choiceBtn);
}
questList++
}

function startGame() {
    // if we've already completed the game and there are more than 1 children in the questionsAreaDiv
    if (questionAreaDiv.childElementCount > 1){
        // we remove the form
        questionAreaDiv.removeChild(formHighScore)
    }
    // otherwise we remove the start button which we know is there.
    while (buttonsArea.firstChild){
        buttonsArea.removeChild(buttonsArea.firstChild)
    }
    while (highScoreArea.firstChild){
        highScoreArea.removeChild(highScoreArea.firstChild)
    }
    timer = 45
    questionList = 0
    startTimer();
    showQuest();
    return
}