var  SpiceAdventureSeekerscore=0;//store A
var  ComfortCozyDinerscore=0;// store B
var  FreshCrispEnthusiastscore=0;// store C
var  SweetandDecadentscore=0;//store D

var questionCount=0;// Store the number of answers 

//Store HTML using the DOM
var result= document.getElementById("result");
var button= document.getElementById("displayResult")
var restart = document.getElementById("restart");

//Question 1
var q1a1=document.getElementById("q1a1");
var q1a2=document.getElementById("q1a2");
var q1a3=document.getElementById("q1a3");
var q1a4=document.getElementById("q1a4");

//Question 2
var q2a1=document.getElementById("q2a1");
var q2a2=document.getElementById("q2a2");
var q2a3=document.getElementById("q2a3");
var q2a4=document.getElementById("q2a4");

//Question 3
var q3a1=document.getElementById("q3a1");
var q3a2=document.getElementById("q3a2");
var q3a3=document.getElementById("q3a3");
var q3a4=document.getElementById("q3a4");

//Question 4
var q4a1=document.getElementById("q4a1");
var q4a2=document.getElementById("q4a2");
var q4a3=document.getElementById("q4a3");
var q4a4=document.getElementById("q4a4");

//Question 5
var q5a1=document.getElementById("q5a1");
var q5a2=document.getElementById("q5a2");
var q5a3=document.getElementById("q5a3");
var q5a4=document.getElementById("q5a4");


function handleAnswer(scoreFunction, questionNumber) {
  scoreFunction();
  disableQuestion(questionNumber);
}

//Listen for click on answer button and call function if clicked
button.addEventListener("click", updateresult);
restart.addEventListener("click", restartQuiz);
q1a1.addEventListener("click", function () { handleAnswer(ComfortCozyDiner, 1); });
q1a2.addEventListener("click", function () { handleAnswer(FreshCrispEnthusiast, 1); });
q1a3.addEventListener("click", function () { handleAnswer(SpiceAdventureSeeker, 1); });
q1a4.addEventListener("click", function () { handleAnswer(SweetandDecadent, 1); });

q2a1.addEventListener("click", function () { handleAnswer(SpiceAdventureSeeker, 2); });
q2a2.addEventListener("click", function () { handleAnswer(SweetandDecadent, 2); });
q2a3.addEventListener("click", function () { handleAnswer(FreshCrispEnthusiast, 2); });
q2a4.addEventListener("click", function () { handleAnswer(ComfortCozyDiner, 2); });

q3a1.addEventListener("click", function () { handleAnswer(SpiceAdventureSeeker, 3); });
q3a2.addEventListener("click", function () { handleAnswer(ComfortCozyDiner, 3); });
q3a3.addEventListener("click", function () { handleAnswer(FreshCrispEnthusiast, 3); });
q3a4.addEventListener("click", function () { handleAnswer(SweetandDecadent, 3); });

q4a1.addEventListener("click", function () { handleAnswer(SpiceAdventureSeeker, 4); });
q4a3.addEventListener("click", function () { handleAnswer(ComfortCozyDiner, 4); });
q4a2.addEventListener("click", function () { handleAnswer(FreshCrispEnthusiast, 4); });
q4a4.addEventListener("click", function () { handleAnswer(SweetandDecadent, 4); });

q5a1.addEventListener("click", function () { handleAnswer(SpiceAdventureSeeker, 5); });
q5a2.addEventListener("click", function () { handleAnswer(ComfortCozyDiner, 5); });
q5a3.addEventListener("click", function () { handleAnswer(FreshCrispEnthusiast, 5); });
q5a4.addEventListener("click", function () { handleAnswer(SweetandDecadent, 5); });

//Track score:
function SpiceAdventureSeeker(){
  SpiceAdventureSeekerscore +=1;
  questionCount +=1;
  
  console.log("questionCount=" + questionCount+ "SpiceAdventureSeekerscore=" +SpiceAdventureSeekerscore);
  if (questionCount==5){
  console.log("The quiz is done")
  updateresult(); 
}
             }

function ComfortCozyDiner(){
  ComfortCozyDinerscore +=1;
  questionCount +=1;
  console.log("questionCount=" + questionCount+ "ComfortCozyDinerscore=" +ComfortCozyDinerscore);
  if (questionCount==5){
  console.log("The quiz is done")
  updateresult();
}
             }

function FreshCrispEnthusiast(){
  FreshCrispEnthusiastscore +=1;
  questionCount +=1;
  console.log("questionCount=" + questionCount+ "FreshCrispEnthusiastscore=" +FreshCrispEnthusiastscore);
  if (questionCount==5){
  console.log("The quiz is done")
  updateresult();
}
             }

function SweetandDecadent(){
  SweetandDecadentscore +=1;
  questionCount +=1;
  console.log("questionCount=" + questionCount+ "SweetandDecadentscore=" +SweetandDecadentscore);
  if (questionCount==5){
  console.log("The quiz is done")
  updateresult();
 
}
}

function updateresult(){
  if (SpiceAdventureSeekerscore >= 3) {
    result.innerHTML = "You are a Spice Adventure Seeker!";
    result.innerHTML = "Recommend dish:Phall";
    result.innerHTML = "Extrmely spicy, tomato-based Indian curry";
    result.innerHTML = `<img src="assets/phall.jpg" alt="phall curry",class="quizimg">`;
    console.log("You are a Spice Adventure Seeker!");
  }
  else if (ComfortCozyDinerscore >= 3) {
    result.innerHTML = "You are a Comfort Cozy Diner!";
    result.innerHTML = "Recommend dish:Budae-jiigae";
    result.innerHTML ="Heartyfusion hot pot combine with hot dogs,spam,kimchi, instant ramen,korean chill paste and cheese and egg.";
    result.innerHTML = `<img src="assets/Budae-jiigae.jpg" alt="budae jiigae",class="quizimg">`;
    console.log("You are a Comfort Cozy Diner!");
  }
  else if (FreshCrispEnthusiastscore >= 3) {
    result.innerHTML = "You are a Fresh Crisp Enthusiast!";
    result.innerHTML = "Recommend dish:Bánh Xèo";
    result.innerHTML = "Crispy,savory Vietnamese crêpe, stuffedwith pork, prawns, mung beans and bean sprouts.";
    result.innerHTML = `<img src=assets/bánh xèo.jpg" alt="bánh xèo", class= "quizimg">`;
    console.log("You are a Fresh Crisp Enthusiast!");
  }
  else if (SweetandDecadentscore >= 3) {
    result.innerHTML = "You are a Sweet and Decadent!";
    result.innerHTML = "Recommend dish:Baklava";
    result.innerHTML= "A rich, sweet pastry made of multiple layers of paper-thin phyllo dough, chopped nuts, and sweet honey or sugar syrup";
    result.innerHTML = `<img src="assets/baklava.jpg" alt="baklava",class="quizimg">`;
    console.log("You are a Comfort Cozy Diner!");
    console.log("You are Sweet and Decadent!");
  }
  else {
    result.innerHTML = "No personality received a majority.";
    console.log("No personality received a majority.");
  }  
}

function restartQuiz(){
  SpiceAdventureSeekerscore = 0;
  ComfortCozyDinerscore = 0;
  FreshCrispEnthusiastscore = 0;
  SweetandDecadentscore = 0;
  questionCount = 0;
  result.innerHTML = "You are a...";
  console.log("Quiz restarted.");
  enableBtn();
}

function enableBtn() {
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;

  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;

  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;

  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;

  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q5a3").disabled = false;
  document.getElementById("q5a4").disabled = false;
}


function disableQuestion(questionNumber) {
  for (let i = 1; i <= 4; i++) {
document.getElementById(`q${questionNumber}a${i}`).disabled = true;
  }
}
