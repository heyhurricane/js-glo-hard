'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function game() {
  let num = Math.floor(Math.random() * 100) + 1;

  function guessTheNumber() {
    let userNum = prompt('Угадай число от 1 до 100');
    // console.log('userNum: ', userNum);
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
        if (userNum > num) {
          alert('Загаданное число меньше');
          guessTheNumber();
        }
        if (userNum < num) {
          alert('Загаданное число больше');
          guessTheNumber();
        }
        if (+userNum === num) {
          confirm('Поздравляю, Вы угадали!!!');
        }
      }
    } 
  }
 return guessTheNumber();
}

game();