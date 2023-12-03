const gameCards = document.querySelector('.box:nth-child(1)')
const gameCardsElemts = Array.from(gameCards.children);
const user = document.querySelector('.box:nth-child(2) .user input')
const ai = document.querySelector('.box:nth-child(2) .ai input')
const winEl = document.querySelector('.box:nth-child(3) .wins input')
const lostEl = document.querySelector('.box:nth-child(3) .lost input')
const startBtn = document.querySelector('#start_game')

let flowtingCrsr = document.querySelector('.flowting_cursor');
let sumit = false;

function mouseFollower() {
  document.addEventListener('mousemove', (event) => {
    flowtingCrsr.style.left = event.clientX - 20 + `px`;
    flowtingCrsr.style.top = event.clientY - 20 + `px`;
  })
}

function startTheGame() {
  startBtn.addEventListener('click', handleStartBtnWork)
}

function handleStartBtnWork() {
  gameCardsElemts.forEach( (item) => {
    item.style.cursor = `pointer`;
    item.style.borderBottom = `.3rem solid white`;
    item.style.mixBlendMode = `normal`;
  } )
}

function getUserResponse() {
  gameCards.addEventListener('click', handleCardResponse)
}

function handleCardResponse(event) {
  if(!sumit) {
    let card = event.target.closest('.game_card');
    user.value = card.innerText;
    sumit = true;
    setTimeout(createAiValue, 2000)
  }
}

function createAiValue() {
  if(sumit) {
    let aiCardValue = Math.floor(Math.random() * 3) + 1;
  
    if(aiCardValue === 1) {
      ai.value = `🥊`; //Rock
    }
    else if(aiCardValue === 2) {
      ai.value = `🤚`; //Paper
    }
    else {
      ai.value = `✂️`; //Scissors
    }
    sumit = false;
  }
  winningCondition()
}

function winningCondition() {
let winCount = +winEl.value;
let lostCount = +lostEl.value;
  
  if ( (user.value === `🥊` && ai.value === `✂️`) || (user.value === `🤚` && ai.value === `🥊`) || (user.value === `✂️` && ai.value === `🤚`) ) {
    console.log('user win');
    winCount++;
  }
  else if ( (user.value === `🥊` && ai.value === `🥊`) || (user.value === `🤚` && ai.value === `🤚`) || (user.value === `✂️` && ai.value === `✂️`) )  {
    console.log(`draw`);
  }
  else {
    console.log(`AI WINS`);
    lostCount++;
  }
  String(winCount);
  winEl.value = winCount

  String(lostCount);
  lostEl.value = lostCount
}

mouseFollower()
startTheGame()
getUserResponse()