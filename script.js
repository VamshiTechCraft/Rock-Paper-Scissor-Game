let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');
let msg = document.querySelector('#msg');
let choices = document.querySelectorAll('.choice');
let compScore = 0;
let userScore = 0;
const showWinner = (userWins ,userChoice,compChoice)=>{
  if(userWins){
    userScore++;
    userScorePara.innerHTML = userScore
    msg.innerHTML = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = 'green';
  }
  else{
    compScore++;
    compScorePara.innerHTML = compScore;
    msg.innerHTML = `You Loose! Your  ${userChoice} doesn't beats ${compChoice}`;
    msg.style.backgroundColor = 'red';
  }
}
function drawGame(){
 msg.innerHTML = 'Game was Draww! Play Again..';
 msg.style.backgroundColor = '#464646';
}
function gencompChoice() {
  let options = ['rock','paper','scissor'];
  let randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
}
function playGame(userChoice){
  let compChoice = gencompChoice();
  console.log(userChoice);
  console.log(compChoice);
  let userWins = true;
  if(userChoice === compChoice){
    drawGame();
  }
  else{
    if(userChoice == 'rock'){
      userWins = compChoice === 'paper' ? false:true;
    }
    else if(userChoice == 'paper'){
      userWins = compChoice === 'scissor' ? false:true;
    }
    else if(userChoice == 'scissor'){
      userWins = compChoice === 'rock' ? false:true;
    }
    showWinner(userWins,userChoice,compChoice);
  }
 
}
choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
    let userChoice = choice.getAttribute('id');
    playGame(userChoice);
  })
})