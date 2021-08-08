var timeEl = document.querySelector("#time");
var startButtonEl = document.querySelector("#start");
var questionsEl = document.querySelector(".questions")
var quest1El = document.querySelector("#q1");
var quest2El = document.querySelector("#q2");
var quest3El = document.querySelector("#q3");
var quest4El = document.querySelector("#q4");
var quest5El = document.querySelector("#q5");
var quest6El = document.querySelector("#q6");
var quest7El = document.querySelector("#q7");
var endEl = document.querySelector("#endscreen");
var winlossEl = document.querySelector("#winlossdisplay");
var scoresEl = document.querySelector("#scoresec");
var highscorseEl = document.querySelector("#highscores");
var startSecEl = document.querySelector("#startsec");
var correctEl = document.querySelector("#correct");
var wrongEl = document.querySelector(".wrong")
// var correct2El = document.querySelector("#correct2");
// var correct3El = document.getElementById("#correct3");
// var correct4El = document.getElementById("#correct4");
// var correct5El = document.getElementById("#correct5");
// var correct6El = document.getElementById("#correct6");
// var correct7El = document.getElementById("#correct7");
var nextEl = document.querySelector("#next");
var timeLeft = 60;

startButtonEl.addEventListener("click", start)
//Hides content
function hideAll() {
quest1El.hidden = true;
quest2El.hidden = true;
quest3El.hidden = true;
quest4El.hidden = true;
quest5El.hidden = true;
quest6El.hidden = true;
quest7El.hidden = true;
scoresEl.hidden = true;
endEl.hidden = true;
highscorseEl.hidden = true;
}
hideAll();

//starts the quiz
function start(){
    startButtonEl.disabled = true;
    timer();
    questions()
    loghighscores();
}

//Starts and ends timer
function timer(){
    var timeInterval = setInterval(function(){
        if (timeLeft > 0) {
            timeEl.textContent = "Seconds Remaining: " + timeLeft;
            timeLeft--;
            startSecEl.hidden = true;
        } else {
            timeEl.textContent = "Time's Up!";
            clearInterval(timeInterval);
            hideAll();
            endEl.hidden = false;          
        }
    }, 1000)
    quest1El.hidden = false;
};

//wrong answer function
function wrong(){
    var wrongAnswer = document.createElement("p");
    wrongAnswer.textContent = "Wrong!";
    questionsEl.appendChild(wrongAnswer);
    timeLeft = timeLeft - 10;
    wrongEl.disabled = true;
    nextEl.disabled = false;
}
wrongEl.addEventListener("click", wrong);

//correct answer function
function correct(){
    var corAnswer = document.createElement("p");
    corAnswer.textContent = "Correct!";
    questionsEl.appendChild(corAnswer);
    correctEl.disabled = true;
    nextEl.disabled = false;
}
correctEl.addEventListener("click", correct);

// //next answer functon
// function next() {
//     if(nextEl.disabled === false && quest1El.hidden === false){
//         quest2El.hidden = false;
//         quest1El.hidden = true;
//     } else if(nextEl.disabled === false && quest2El.hidden === false){
//         quest3El.hidden = false;
//         quest2El.hidden = true;
//     }else if(nextEl.disabled === false && quest3El.hidden === false){
//         quest4El.hidden = false;
//         quest3El.hidden = true;
//     } else if(nextEl.disabled === false && quest4El.hidden === false){
//         quest5El.hidden = false;
//         quest4El.hidden = true;
//     }else if(nextEl.disabled === false && quest5El.hidden === false){
//         quest6El.hidden = false;
//         quest5El.hidden = true;
//     }else if(nextEl.disabled === false && quest6El.hidden === false){
//         quest7El.hidden = false;
//         quest6El.hidden = true;
//     }else if(nextEl.disabled === false && quest7El.hidden === false){
//         endEl.hidden = false;
//         quest7El.hidden = true;
//     }  
//     wrong();
//     correct();
// }
// nextEl.addEventListener("click", next)