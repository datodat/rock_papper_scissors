const rulesDiv = document.getElementById('rules-div');
const rulesOpen = document.getElementById('rules-open');
const rulesClose = document.getElementById('rules-close');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const board = document.getElementById('board');
const result = document.getElementById('result');
const plaayer = document.getElementById('player');
const computer = document.getElementById('computer');

const resultP = document.getElementById('result-p');
const playAgain = document.getElementById('play-again');
const scoreTable = document.getElementById('score');

const playerDiv = document.getElementById('player-div');
const computerDiv = document.getElementById('computer-div');

const options = ['rock', 'paper', 'scissors'];
let playersChosen = null;
let computersChosen = null;

let score = 0;

let rulesOpened = false;

// Rock Event Listener
rock.addEventListener('click', () => {
  board.style.display = 'none';
  result.style.display = 'flex'

  playersChosen = 'rock';
  player.src = './images/icon-rock.svg';
  playerDiv.classList.add('rock');

  const number = Math.floor(Math.random() * 3);
  const computersChosen = options[number];
  computer.src = `./images/icon-${computersChosen}.svg`;
  computerDiv.classList.add(computersChosen);

  gameLogic(playersChosen, computersChosen);
});
// Paper Event Listener
paper.addEventListener('click', () => {
  board.style.display = 'none';
  result.style.display = 'flex'

  playersChosen = 'paper';
  player.src = './images/icon-paper.svg';
  playerDiv.classList.add('paper');

  const number = Math.floor(Math.random() * 3);
  const computersChosen = options[number];
  computer.src = `./images/icon-${computersChosen}.svg`;
  computerDiv.classList.add(computersChosen);

  gameLogic(playersChosen, computersChosen);
});
// Scissors Event Listener
scissors.addEventListener('click', () => {
  board.style.display = 'none';
  result.style.display = 'flex'

  playersChosen = 'scissors';
  player.src = './images/icon-scissors.svg';
  playerDiv.classList.add('scissors');

  const number = Math.floor(Math.random() * 3);
  const computersChosen = options[number];
  computer.src = `./images/icon-${computersChosen}.svg`;
  computerDiv.classList.add(computersChosen);

  gameLogic(playersChosen, computersChosen);
});

// Play Again Btn
playAgain.addEventListener('click', () => {
  resultP.innerText = '';
  result.style.display = 'none';
  board.style.display = 'flex';
  playerDiv.className = 'player-div';
  computerDiv.className = 'computer-div';
  computer.src = '';
  player.src = '';
})

// Game Logic
function gameLogic(player, computer) {
  if(player === 'rock'){
    if(computer === 'rock'){
      gameResult('draw');
    }else if(computer === 'paper'){
      gameResult('computer');
    }else{
      gameResult('player');
    }
  }else if(player === 'paper'){
    if(computer === 'rock'){
      gameResult('player');
    }else if(computer === 'paper'){
      gameResult('draw');
    }else{
      gameResult('computer');
    }
  }else{
    if(computer === 'rock'){
      gameResult('computer');
    }else if(computer === 'paper'){
      gameResult('player');
    }else{
      gameResult('draw');
    }
  }
}

// Result
function gameResult(res) {
  if(res === 'player'){
    resultP.innerText = 'You Win!';
    score++;
    scoreTable.innerText = score;
  }else if(res === 'computer'){
    resultP.innerText = 'You Lose!';
    score--;
    scoreTable.innerText = score;
  }else{
    resultP.innerText = 'Draw!';
    scoreTable.innerText = score;
  }
}

// Rules
rulesOpen.addEventListener('click', () => {
  if(rulesOpened){
    rulesDiv.style.display = 'none';
    rulesOpened = false;
    rulesOpen.innerText = 'open'
  }else{
    rulesDiv.style.display = 'block';
    rulesOpened = true;
    rulesOpen.innerText = 'close'
  }
});

rulesClose.addEventListener('click', () => {
  if(rulesOpened){
    rulesDiv.style.display = 'none';
    rulesOpened = false;
    rulesOpen.innerText = 'open'
  }else{
    return;
  }
});