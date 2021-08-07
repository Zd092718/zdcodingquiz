var timeEl = document.querySelector("#time");
var startSecEl = document.querySelector("#startsec");
var quest1El = document.querySelector("#q1");
var quest2El = document.querySelector("#q2");
var quest3El = document.querySelector("#q3");
var quest4El = document.querySelector("#q4");
var quest5El = document.querySelector("#q5");
var quest6El = document.querySelector("#q6");
var quest7El = document.querySelector("#q7");
var endEl = document.querySelector("#endscreen");
var winlossEl = document.querySelector("#winlossdisplay");
var scoresEl = document.querySelector("#scorsec");
var highscorseEl = document.querySelector("#highscores");


function start(){
    timer();
    runQuestion();
    loghighscores();
    

}

