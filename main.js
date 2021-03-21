document.getElementById('playnow').value = playNowButton;
var ansDescription = document.getElementById('ansesultDiv');
var quizStart = document.getElementById("quesDiv");
var answerDiv = document.getElementById("answerDiv");
var countdown = document.getElementById("countdown");
var nextQueButton = document.getElementById("nextQueButton");

var question = document.getElementById("question");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var CorrectAnsDiv = document.getElementById("CorrectAnsDiv");
var ansesultDiv = document.getElementById("answerResultDiv");
var answerDetailDiv = document.getElementById("answerDetailDiv");


//quiz options button
var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");
var btnD = document.getElementById("btnD");


function vidPlay() {
    document.getElementById('btnDiv').style.display = 'none';
    document.getElementById('videoDiv').style.display = 'block'
    document.getElementById('wrongAnswerFb').style.display = 'none'
}

video = document.getElementById('myVideo');
video.onended = function() {
    document.getElementById('btnDiv').style.display = 'none';
    document.getElementById('videoDiv').style.display = 'none';
    document.getElementById('quesBody').style.display = 'block';
    document.getElementById('quesDiv').style.display = 'block';
    //I done this //

    document.getElementById('answerResultDiv').style.display = 'block';
    // console.log(ansesultDiv);
    // console.log("checking if fb is correct answer");
    // video1 = document.getElementById('myVideo2');
    // document.getElementById('btnDiv').style.display = 'none'
    // document.getElementById('videoDiv').style.display = 'none'
    // document.getElementById('quesBody').style.display = 'none'
    // document.getElementById('quesDiv').style.display = 'none'
    // document.getElementById('wrongAnswerFb').style.display = 'block'
    // console.log(wrongAnswer)
    //document.getElementById('CorrectAnsDiv').innerHTML = wrongAnswer;
}

var correctAnswer; 
var i = 0;
var ansDescription;

var timeout, interval
var threshold = 11000;
var secondsleft = threshold;

function startChecking() {
	secondsleft -= 1000;
	countdown.innerHTML = Math.abs((secondsleft / 1000));
	if (secondsleft == 0) {
    //hide answer div when time is up
		wrongAnswerFb.style.right = "100vw";

    //if last question show the intro div and hide the quiz div
    if(i == quizzes.length - 1){
      quizStart.style.display = "none";
      btnDiv.style.display = "block";
    }else{
      //move to next question
      i = i + 1;
      Quizz(i);
    }
	}
}

//function to start the countdown timer 
function startschedule() {
	clearInterval(interval);
	secondsleft = threshold;
	countdown.innerHTML = Math.abs((secondsleft / 1000));
	interval = setInterval(function() {
		startChecking();
	}, 1000)
}

//function to reset the timer
function resetTimer() {
	startschedule();
}

//function when next question button click
nextQueButton.onclick = function() {
  //hide the answer div
  answerDiv.style.right = "100vw";

  //if last question show the intro div and hide the quiz div
  if(i == quizzes.length - 1){
    quizStart.style.display = "none";
    btnDiv.style.display = "block";
  }else{
    //move to next question
    i = i + 1;
    Quizz(i);
  }
  
};


function Quizz(i) {
    var eachQues = quizzes[i];  
    question.innerText = eachQues.question;
    choiceA.innerText = eachQues.choiceA;
    choiceB.innerText = eachQues.choiceB;
    choiceC.innerText = eachQues.choiceC;
    choiceD.innerText = eachQues.choiceD;
    CorrectAnsDiv.innerText  = eachQues.correct;
    ansDescription = eachQues.didYouKnow;
    // console.log(ansDescription);
}

if(i == 0){
  Quizz(0);

  function checkFb(event, CorrectAnsDiv) {
  console.log(ansDescription);
    ans = CorrectAnsDiv.innerText;
    
    if (event.currentTarget !== event.target) {
        return; 
      }

      if(event.target.value == ans){
          event.target.style.backgroundColor = 'green';
          ansesultDiv.innerText = rightAnswer;

          setTimeout(function() {
            event.target.style.backgroundColor = '#33334b';
          }, 1000);

      } 
      else {
          event.target.style.backgroundColor = 'red';
          ansesultDiv.innerText = wrongAnswer;

          setTimeout(function() {
              event.target.style.backgroundColor = '#33334b'
          }, 1000);
      }

      if(ans == btnA.value){
        btnA.style.backgroundColor = 'green';
        setTimeout(function() {
            btnA.style.backgroundColor = '#33334b';
        }, 1000);
      }
      if(ans == btnB.value){
        btnB.style.backgroundColor = 'green';
        setTimeout(function() {
            btnB.style.backgroundColor = '#33334b';
        }, 1000);
      }
      if(ans == btnC.value){
        btnC.style.backgroundColor = 'green';
        setTimeout(function() {
            btnC.style.backgroundColor = '#33334b';
        }, 1000);
      }
      if(ans == btnD.value){
        btnD.style.backgroundColor = 'green';
        setTimeout(function() {
            btnD.style.backgroundColor = '#33334b';
        }, 1000);
      }

      ansesultDiv.style.right = "0px";
      answerDetailDiv.innerText = ansDescription;

      if(i == quizzes.length - 1){
        nextQueButton.innerText = playAgainButton;
      } else{
        //display next question button text
        nextQueButton.innerText = skipButtonText;
      }

      //calling startschedule() function to start timer of 10 seconds when answer screen appears
      startschedule();
      console.log(ans);
    }
  
  }
  
   
  
