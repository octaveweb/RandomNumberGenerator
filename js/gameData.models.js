let ranRto100 = parseInt(Math.random() * 100 + 1);
console.log(ranRto100);

const userInput = document.querySelector('#guessField');
const submitBtn = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const guesstLeft = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.b-con');

let p = document.createElement('button');
let previousGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validation(guess);
  });
}
function validation(guess) {
  /* Validation Set  */
  /* 
  to check if user put -1, if number or not,
  range is 1 to 100 if put 500 then what?? 
  */

  if (isNaN(guess)) {
    alert('Please enter a valid number!');
  } else if (guess < 1) {
    alert('More then 1!');
  } else if (guess > 100) {
    alert('Less the 100!');
  } else {
    previousGuess.push(guess);
    // console.log(previousGuess);
    
    if (numGuess === 11) {
      displayGuesh(guess);
      displayMassage(`Game Over. Randome number was ${ranRto100}`);
      endGame();
    } else {
      displayGuesh(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  /* Check Guess */
  /*
    massage print if the randome number is high or low 
    */
  if (ranRto100 === guess) {
    displayMassage(`You guess it right!`);
    endGame();
  } else if (guess < ranRto100) {
    displayMassage(`Number is Less!`);
  } else if (guess > ranRto100) {
    displayMassage(`Number is height!`);
  }
}
function displayGuesh(guess) {
  /* Display Massage */
  /*
    Interect with DOM
    - user imput value empty going to "Empty"
    - Guesses Remaining: (10 - attempts)
    */
  userInput.value = '';
  guessSlot.innerHTML += `<p>${guess}</p> `;
  numGuess++;
  guesstLeft.innerHTML = `${11 - numGuess}`;
}

function displayMassage(massage) {
  /* Display Massage */
  /*
    Interect with DOM
    - innerHTML add guess

    */
  lowOrHi.innerHTML = `<h2>${massage}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.classList.add('btn');
  p.id = 'newGame';
  p.innerText = `Start new Game`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const nweGameButton = document.getElementById('newGame');
  nweGameButton.addEventListener('click', (e) => {
    ranRto100 = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numGuess = 1;
    guessSlot.innerHeight = ' no data found ';
    guesstLeft.innerHTML = `${11- numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMassage("")
    playGame = true;
  });
}
