let userScore = 0;
let computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function convertToWord(letter){
	if (letter === 'r') return "Rock";
	if (letter === 'p') return "Paper";
	if (letter === 's') return "Scissor";
}

function getComputerChoice(){
  const choices = ['r','p','s'];
  const randomNum= (Math.floor(Math.random()*3)); //*3 so that range stays between 0,1,2
  return choices[randomNum];
}

function win(userChoice, computerChoice){
	userScore ++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const userChoice_div = document.getElementById(userChoice);
	const smallUser = "user".fontsize(3).sub();
	const smallComp = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUser} beats ${convertToWord(computerChoice)} ${smallComp} You Win!`;
	userChoice_div.classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 1000);
    // setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
}

// setTimeout(function(){ operation}, timer);

function lose(userChoice, computerChoice){
	computerScore ++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const userChoice_div = document.getElementById(userChoice);
	const smallUser = "user".fontsize(3).sub();
	const smallComp = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUser} loses to ${convertToWord(computerChoice)} ${smallComp} You Lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 1000);
}

function draw(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	const smallUser = "user".fontsize(3).sub();
	const smallComp = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUser} equals ${convertToWord(computerChoice)} ${smallComp} Its a Draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function(){userChoice_div.classList.remove('gray-glow')}, 1000);
}

function game(userChoice)
{
	const computerChoice = getComputerChoice();
	switch (userChoice+computerChoice){
     case "rs":                  //user wins cases
     case "pr":
     case "sp":
      win(userChoice, computerChoice);
      break;
     case "sr":              //user loses cases
     case "ps":
     case "rp":
      lose(userChoice, computerChoice);
      break;
     case "rr":
     case "pp":
     case "ss":
      draw(userChoice, computerChoice);
      break;

	}
}


function main(){
rock_div.addEventListener('click',function(){
	game('r');
});

paper_div.addEventListener('click',function(){
	game('p');
});

scissor_div.addEventListener('click',function(){
	game('s');
});
};

main();