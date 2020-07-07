let options = document.querySelectorAll('.option'),
    playerImage = document.getElementsByClassName('left-start')[0],
    computerImage = document.getElementsByClassName('right-start')[0];


let choicesArray = ['rock', 'paper', 'scissors'];

let playerChoice;

let computerRandomPick,
    computerChoice;


let scoreBoard = document.getElementsByClassName('fa-circle'),
    internalScoreTracker = 'win',
    colorScoreTracker = 0,
    playerScore = [],
    computerScore = [];

// add the 'click' event listener to all of the "options" buttons and to change images when clicked
for (let i = 0; i < options.length; i++) {

  options[i].addEventListener('click', function() {

    showPlayerImage(choicesArray[i]);
    showComputerImage();

    setTimeout(function() {
      trackScore();
    }, 1000)

  });

}


// changes the hand image shown
function showPlayerImage(choice) {
  playerChoice = choice;

  playerImage.src = 'left-start.png';

  document.getElementsByClassName('left-start')[0].classList.add('player-hand-change');

  setTimeout (function() {
    playerImage.src = 'left-' + playerChoice + '.png';
    document.getElementsByClassName('left-start')[0].classList.remove('player-hand-change');
  }, 500);
}


// enables the computer to do two things: pick a hand randomly and then change the image shown on screen
function showComputerImage() {

  computerRandomPick = Math.floor(Math.random()*3);
  computerChoice = choicesArray[computerRandomPick];

  computerImage.src = 'right-start.png';

  document.getElementsByClassName('right-start')[0].classList.add('computer-hand-change');

  setTimeout (function() {
    computerImage.src = 'right-' + computerChoice + '.png';
    document.getElementsByClassName('right-start')[0].classList.remove('computer-hand-change');
  }, 500);
}


function trackScore() {

  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore.push(internalScoreTracker);
      addScoreForComputer();
    }
    if (computerChoice === 'scissors') {
      playerScore.push(internalScoreTracker);
      addScoreForPlayer();
    }
    return;
  }

  else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      playerScore.push(internalScoreTracker);
      addScoreForPlayer();
    }
    if (computerChoice === 'scissors') {
      computerScore.push(internalScoreTracker);
      addScoreForComputer();
    }
    return;
  }

  else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore.push(internalScoreTracker);
      addScoreForComputer();
    }
    if (computerChoice === 'paper') {
      playerScore.push(internalScoreTracker);
      addScoreForPlayer();
    }
    return;
  }

}


function addScoreForPlayer() {
  scoreBoard[colorScoreTracker].style.color = '#F50134';
  colorScoreTracker++;

  if (playerScore.length + computerScore.length === 3) {
    showResult();
  }
}

function addScoreForComputer() {
  scoreBoard[colorScoreTracker].style.color = '#000';
  colorScoreTracker++;

  if (playerScore.length + computerScore.length === 3) {
    showResult();
  }
}


function showResult() {

  if (playerScore.length > computerScore.length) {
    document.getElementsByClassName('result-text')[0].style.visibility = 'visible';
    document.getElementsByClassName('play-again')[0].style.visibility = 'visible';
    playAgain();
  }
  else if (playerScore.length < computerScore.length) {
    document.getElementsByClassName('result-text')[0].textContent = 'YOU LOST';
    document.getElementsByClassName('result-text')[0].style.visibility = 'visible';
    document.getElementsByClassName('play-again')[0].style.visibility = 'visible';
    playAgain();
  }

}


function playAgain() {

  document.getElementsByClassName('play-again')[0].addEventListener('click', function() {
    setTimeout(function() {
      location.reload();
    }, 300)
  })

}
