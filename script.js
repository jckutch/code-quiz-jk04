// variable elements
var startBtnEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer-total");
var buttonsEl = document.querySelector("#buttons");
var gameLabelEl = document.querySelector("#game-label");
var questionsLabelEl = document.querySelector("#questions-label");
var questionsEl = document.querySelector("#questions");
var highScoreEl = document.querySelector("#high-score");
var highScoreBtnEl = document.querySelector("#high-score-bank");


// variables for game timer
var timer = 45
var timerSet
var questList = 0
var AnsweredQuest = 0
var answeredAll = false

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

// High Score Vairiables
var highScore = []
var pushThisHighScore
var score
var scoreStringified
var scoreParsed
var initials

var formHighScore = document.createElement('form')
var inputHighScore = document.createElement('input')
inputHighScore.setAttribute("type", "text")
inputHighScore.setAttribute("id", "initials")
var enterHighScore = document.createElement('input')
enterHighScore.setAttribute("type", "submit")
enterHighScore.setAttribute("value", "Submit Your Initials")
enterHighScore.setAttribute('class','buttons')
enterHighScore.classList.add('start-label')
enterHighScore.setAttribute("id","submitBtn")
formHighScore.appendChild(inputHighScore)
formHighScore.appendChild(enterHighScore)

function startGame() {
    if (questionsEl.childElementCount > 1){
        questionsEl.removeChild(formHighScore)
    }
    while (buttonsEl.firstChild){
        buttonsEl.removeChild(buttonsEl.firstChild)
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

startBtnEl.addEventListener('mouseup', startGame);

function startTimer() {
    timerSet = setInterval(function () {
        if (timer > 0) {
            timer--
        } else {
            clearInterval(timerSet)
            endGame();
        }
        timerEl.textContent = timer;
    }, 1000);
}

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
        buttonsEl.appendChild(choiceBtn);
    }
    questList++
}

buttonsEl.addEventListener('mouseup', function (event) {
    if (event.target.matches(".thisOne")) {
        if (questList < questions.length) {
            while (buttonsEl.firstChild) {
                buttonsEl.removeChild(buttonsEl.firstChild);
            }
            displayQuestion();
        } else {
            endGame();
        }
    } else if (event.target.matches(".notThis")) {
        timer = timer - 5
        event.target.classList.add("incorrect")
    }
})

function endGame() {
    clearInterval(timerSet);
    timerEl.textContent = timer
    gameLabelEl.textContent = "Your score is : " + timer
    if (timer <= 0) {
        timerEl.textContent = 0
        questionsLabelEl.textContent = "Sorry, you lose :("
    } else {
        questionsLabelEl.textContent = "Congratulations!"
        questionsEl.appendChild(formHighScore)
    }
    console.log("That's all folks")
    while (buttonsEl.firstChild) {
        buttonsEl.removeChild(buttonsEl.firstChild);
    }
    buttonsEl.appendChild(startBtnEl)
}

function displayHighScore(){
    highScoreEl.removeChild(highScoreBtnEl)
    highScoreEl.appendChild(startBtnEl)
    while (buttonsEl.firstChild) {
        buttonsEl.removeChild(buttonsEl.firstChild);
    }
    gameLabelEl.textContent = "High Scores"
    questionsLabelEl.textContent = "View scores below"
    for (i = 0; i < highScore.length; i++){
        var scoresEl = document.createElement('h2')
        scoresEl.textContent = highScore[i];
        buttonsEl.appendChild(scoresEl)
    }
}

enterHighScore.addEventListener('click', function(event){
    event.preventDefault();
    console.log("It's defaulting");
    initials = inputHighScore.value.trim();
    score = initials.toUpperCase() + ": " + timer;
    highScore.push(score);
    scoreStringified = JSON.stringify(highScore);
    console.log(scoreStringified);
    questionsEl.removeChild(formHighScore);
    localStorage.setItem("highScore",scoreStringified)
    highScoreEl.appendChild(highScoreBtnEl)
})

highScoreBtnEl.addEventListener('click', function (event) {
    event.preventDefault();
    displayHighScore();
    
})

function init(){
    scoreParsed = JSON.parse(localStorage.getItem('highScore'));
    if (scoreParsed !== null){
        highScore = scoreParsed
    }
    console.log(JSON.stringify(scoreParsed))
}
init();