document.getElementById("pb").value = playNowButton;
document.getElementsByTagName('source').src = introVideo;
function play_video() {
  document.getElementById("firstDiv").style.display = 'none';
  document.getElementById("videoDiv").style.display = 'block';
}
video = document.getElementById('firstVideo');
video.onended = function () {
  document.body.style.backgroundImage = "url('media/Background_questions.png')";
  document.body.classList.add("bg");

  document.getElementById("firstDiv").style.display = 'none';
  document.getElementById("videoDiv").style.display = 'none';
  document.getElementById("quiz").style.display = 'block';

};

document.getElementById("mybtn").innerHTML = skipButtonText;
let firstQuestion = quizzes[0].question;
const quest = document.querySelector("#question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

let questionCount = 0;
const loadQuestion = () => {
  if (questionCount === quizzes.length) {
    window.location.assign("index.html");
  }
  else {
    const questionList = quizzes[questionCount];
    quest.innerHTML = questionList.question;
    option1.innerHTML = questionList.choiceA;
    option2.innerHTML = questionList.choiceB;
    option3.innerHTML = questionList.choiceC;
    option4.innerHTML = questionList.choiceD;
  }
}
var totalSeconds;
loadQuestion();
function checkME(a, q) {
  totalSeconds = 10;
  let selectedoption = document.getElementById(a).innerHTML;
  if (selectedoption === quizzes[questionCount].correct) {
  document.getElementById(q).classList.add("correct");
    setTimeout(function () {
      document.getElementById("quiz").style.display = "none";
      document.getElementById("result_screen").style.display = "block";
      document.getElementById("timer-circle").innerHTML=10;
      totalSeconds=10;
      setInterval(setTime, 1000);
      document.getElementById(q).classList.remove("correct");
      document.getElementById("greet").innerHTML = rightAnswer;
      document.getElementById("rightanswer").style.fontSize = "40px";
      document.getElementById("rightanswer").innerHTML = quizzes[questionCount].didYouKnow;
      questionCount++;
    }, 250);
  }
  else {
    let wrong = quizzes[questionCount].correct;
    document.getElementById(wrong).classList.add("correct");
    document.getElementById(q).classList.add("incorrect");
    setTimeout(function () {
      document.getElementById("quiz").style.display = "none";
      document.getElementById("result_screen").style.display = "block";
      document.getElementById("timer-circle").innerHTML=10;
      totalSeconds=10;
      setInterval(setTime, 1000);
      document.getElementById(q).classList.remove("incorrect");
      document.getElementById(wrong).classList.remove("correct");
      document.getElementById("greet").innerHTML = wrongAnswer;
      document.getElementById("rightanswer").style.fontSize = "40px";
      document.getElementById("rightanswer").innerHTML = quizzes[questionCount].didYouKnow;
      questionCount++;
    }, 250);
  }

}

if (questionCount === 2) {
  document.getElementById("mybtn").innerHTML = playAgainButton;
  document.getElementById("sign").innerHTML = "&#8635";
  setInterval(setTime, 1000);
}
function next_question() {
  loadQuestion();
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result_screen").style.display = "none";
}
// ten second timer 
var timerlabel = document.getElementById("timer-circle");

function setTime() {
  --totalSeconds;
  timerlabel.innerHTML = pad(totalSeconds % 12);
  if (totalSeconds === 0) {
    next_question();
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
