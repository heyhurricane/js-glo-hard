'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// let userNum;

function guessTheNumber() {
  const number = 43;
  let userNum = prompt('Угадай число от 1 до 100');
  console.log('userNum: ', userNum);
  if (userNum === null) {
    alert('Игра окончена');
  }
  else
  {
    if (!isNumber(userNum)) {
      alert('Введи число!');
      guessTheNumber();
    }
    else {
      if (userNum > number) {
        alert('Загаданное число меньше');
        guessTheNumber();
      }
      if (userNum < number) {
        alert('Загаданное число больше');
        guessTheNumber();
      }
      if (+userNum === number) {
        confirm('Поздравляю, Вы угадали!!!');
      }
    }
  } 
}

let res = guessTheNumber();