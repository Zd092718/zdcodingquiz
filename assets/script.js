var timeEl = document.querySelector("#time");
var startButtonEl = document.querySelector("#start");
var questionsEl = document.querySelectorAll(".questions")
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
var resetEl = document.querySelector('#reset')
var highscorseEl = document.querySelector("#highscores");
var startSecEl = document.querySelector("#startsec");
var correctEl = document.querySelectorAll("#correct");
var wrong1El = document.querySelectorAll(".wrong1");
var wrong2El = document.querySelectorAll(".wrong2");
var wrong3El = document.querySelectorAll(".wrong3");
var nextEl = document.querySelectorAll("#next");
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
}
var timeInterval;
//Starts and ends timer
function timer(){
    timeInterval = setInterval(function(){
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
    startSecEl.hidden = true;
    quest1El.hidden = false;
};

//wrong answer function
function wrong(index){
    var wrongAnswer = document.createElement("p");
    wrongAnswer.textContent = "Wrong!";
    questionsEl[index].appendChild(wrongAnswer);
    timeLeft = timeLeft - 10;
    correctEl[index].disabled = true;
    wrong1El[index].disabled = true;
    wrong2El[index].disabled = true;
    wrong3El[index].disabled = true;
    nextEl[index].disabled = false;
}

wrong1El.forEach(function(el, index){
    el.addEventListener("click", function(){
        wrong(index);
    })
});
wrong2El.forEach(function(el, index){
    el.addEventListener("click", function(){
        wrong(index);
    })
});
wrong3El.forEach(function(el, index){
    el.addEventListener("click",  function(){
        wrong(index);
    })
});
// wrong1El.addEventListener("click", wrong);
// wrong2El.addEventListener("click", wrong);
// wrong3El.addEventListener("click", wrong);

//correct answer function
function correct(index){
    var corAnswer = document.createElement("p");
    corAnswer.textContent = "Correct!";
    questionsEl[index].appendChild(corAnswer);
    correctEl[index].disabled = true;
    wrong1El[index].disabled = true;
    wrong2El[index].disabled = true;
    wrong3El[index].disabled = true;
    nextEl[index].disabled = false;
}

correctEl.forEach(function(el, index){
    el.addEventListener("click", function(){
        correct(index);
    });
})

//next answer functon
function next(index) {
    var notDisabled = nextEl[index].disabled === false 
    if(notDisabled && quest1El.hidden === false){
        quest2El.hidden = false;
        quest1El.hidden = true;
    } else if(notDisabled && quest2El.hidden === false){
        quest3El.hidden = false;
        quest2El.hidden = true;
    }else if(notDisabled && quest3El.hidden === false){
        quest4El.hidden = false;
        quest3El.hidden = true;
    } else if(notDisabled && quest4El.hidden === false){
        quest5El.hidden = false;
        quest4El.hidden = true;
    }else if(notDisabled && quest5El.hidden === false){
        quest6El.hidden = false;
        quest5El.hidden = true;
    }else if(notDisabled && quest6El.hidden === false){
        quest7El.hidden = false;
        quest6El.hidden = true;
    }else if(notDisabled && quest7El.hidden === false){
        endEl.hidden = false;
        quest7El.hidden = true;
        clearInterval(timeInterval);
    } 
}

nextEl.forEach(function(el, index){
    el.addEventListener("click", function(){
        next(index);
    })
})


//reset function
function resetGame(){
    window.location.reload();
}
resetEl.addEventListener("click", resetGame)