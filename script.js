const body = document.body;
const startMenu = document.querySelector('.menu');
const cardsField = document.querySelector('.cards');
const selectLevel = document.querySelectorAll('.level_btn');
const startButton = document.querySelector('.start-button');
const simple = document.getElementById('simple');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');

let cardWasClicked = false;
let cardCount;



const activeLavel = () => {
  selectLevel.forEach(item => {
    item.classList.remove('level_active');
  });
    event.target.classList.add('level_active');
};
  selectLevel.forEach(item => {
      item.addEventListener('click', activeLavel)
  });

const getLevel = () => {
  if (simple.classList.contains('level_active')) {
    cardsField.classList.add('three-card');
    return cardCount = 3;
  }
  else if (medium.classList.contains('level_active')) {
    cardsField.classList.add('six-card');
    return cardCount = 6;
  }
  else {
    cardsField.classList.add('ten-card');
    return cardCount = 10;
  }
}

const playGame = () => {
getLevel();
const createCards = number => {
let randomCard = Math.floor(Math.random() * number);
  for (let i = 0; i < number; i++) {
    const cardWrap = document.createElement('div');
    const cardBack = document.createElement('div');
    const winnerCard = document.createElement('div');
    const gameOverCard = document.createElement('div');
    if (i === randomCard) {
      cardWrap.className = 'card-wrap';
      cardWrap.classList.add('card-wrap__hover');      
      document.body.append(cardsField);
      cardsField.append(cardWrap);
      cardBack.className ='card__back';
      cardWrap.append(cardBack);
      winnerCard.className = 'card__winner';
      cardWrap.append(winnerCard); 
    } else {
      cardWrap.className = 'card-wrap';
      cardWrap.classList.add('card-wrap__hover');      
      document.body.append(cardsField);
      cardsField.append(cardWrap);
      cardBack.className ='card__back';
      cardWrap.append(cardBack);
      gameOverCard.className = 'card__game-over';
      cardWrap.append(gameOverCard);
    };
  };
};
 
  createCards(cardCount);
  
  document.querySelectorAll('.card-wrap').forEach(cardWrap => {
    cardWrap.addEventListener('click', () => {
      if (cardWasClicked) {
        cardsField.style.display = 'none';
        cardsField.classList.remove('three-card','six-card','ten-card');
        startMenu.style.display = '';
        cardWasClicked = false;

      } else {
        cardWrap.classList.add('card__click');
        cardWrap.classList.remove('card-wrap__hover');
        cardWasClicked = true;
      } 
    });
  });
};

const startGame = () => {
  cardsField.innerHTML  = '';
  cardsField.style.display = 'flex';
  startMenu.style.display = 'none';
  playGame();
}


startButton.addEventListener('click', startGame);