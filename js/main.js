document.getElementById('playnow').value = playNowButton;
var ansDescription = document.getElementById('ansesultDiv');
var quizStart = document.getElementById("quesDiv");
var answerDiv = document.getElementById("answerDiv");
var countdown = document.getElementById("countdown");
// for next question
var nextQueButton = document.getElementById("nextQueButton");

var CorrectAnsDiv = document.getElementById("CorrectAnsDiv");
var ansesultDiv = document.getElementById("answerResultDiv");
var answerDetailDiv = document.getElementById("answerDetailDiv");

// first useit Quiz video
function vidPlay() {
    document.getElementById('btnDiv').style.display = 'none';
    document.getElementById('videoDiv').style.display = 'block'
}
video = document.getElementById('myVideo');
video.onended = function() {
    document.getElementById('btnDiv').style.display = 'none';
    document.getElementById('videoDiv').style.display = 'none';
    document.getElementById('quesBody').style.display = 'block';
    document.getElementById('quesDiv').style.display = 'block';    
    //I done this //
    document.getElementById('answerResultDiv').style.display = 'block';
    console.log("checking if fb is correct answer");
    document.getElementById('btnDiv').style.display = 'none'
    document.getElementById('videoDiv').style.display = 'none'
}
document.getElementById("nextQueButton").innerHTML = skipButtonText;

/// to display questions
const question = document.querySelector(".question");
const choiceA = document.querySelector("#choiceA");
const choiceB = document.querySelector("#choiceB");
const choiceC = document.querySelector("#choiceC");
const choiceD = document.querySelector("#choiceD");

let count = 0;
const loadQuestion = () => {
  if (count === quizzes.length) {
    document.getElementById('quesBody').style.display = 'none';
    document.getElementById('quesDiv').style.display = 'none'; 
    document.getElementById('indexDiv').style.display = 'block';
    document.getElementById('btnDiv').style.display = 'block';

  }
  else {
   const totalQuestions = quizzes[count];
   question.innerHTML = totalQuestions.question;
   choiceA.innerHTML = totalQuestions.choiceA;
   choiceB.innerHTML = totalQuestions.choiceB;
   choiceC.innerHTML = totalQuestions.choiceC;
   choiceD.innerHTML = totalQuestions.choiceD;
  }
}
var totalSeconds = 10;
loadQuestion();
function checkFb(a, q) {
  let selectedoption = document.getElementById(a);
  if (selectedoption === quizzes[count].correct) {
    document.getElementById(q).classList.add("correct");
    totalSeconds = 10;
    setTimeout(function () {
      document.getElementById("quesBody").style.display = "none";
      document.getElementById("wrongAnswerFb").style.display = "block";
      document.getElementById(q).classList.remove("correct");
      document.getElementById("text").innerHTML = rightAnswer;
      document.getElementById("correctanswer").style.fontSize = "30px";
      document.getElementById("correctanswer").innerHTML = quizzes[count].ansDescription;
    }, )
  }
  else {
    totalSeconds = 10;
    document.getElementById(q).classList.add("incorrect");
    setTimeout(function () {
      document.getElementById("quesBody").style.display = "none";
      document.getElementById("wrongAnswerFb").style.display = "block";
      document.getElementById(q).classList.remove("incorrect");
      document.getElementById("text").innerHTML = wrongAnswer;
      document.getElementById("correctanswer").style.fontSize = "30px";
      document.getElementById("correctanswer").innerHTML = quizzes[count].didYouKnow;
    }, )
  }
  if (count === 2) {
    document.getElementById("nextQueButton").innerHTML = playAgainButton;
    // document.getElementById('quesBody').style.display = 'none';
    // document.getElementById('quesDiv').style.display = 'none'; 
  }
  count++;
}
function next_quest() {
  loadQuestion();
  document.getElementById("quesBody").style.display = "block";
  document.getElementById("wrongAnswerFb").style.display = "none";
}
  
 // ten second timer 
var timerlabel = document.getElementById("countdown");
setInterval(setTime, 1000);
function setTime() {
  --totalSeconds;
  timerlabel.innerHTML = pad(totalSeconds % 12);
  if (totalSeconds === 0) {
    next_quest();
    totalSeconds = 10;
  }
}
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}  
  
