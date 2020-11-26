'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function game() {
  let num = 43;
  let count = 10;

  function guessTheNumber() {
    if (count === 0) {
      let userConfirm = confirm('Попытки закончились, хотите сыграть еще?');
      if (userConfirm === true) {
        // console.log('userConfirm: ', userConfirm);
        count = 10;
        num = Math.floor(Math.random() * 100) + 1;
        guessTheNumber();
      }
    }
    else {
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
            count--;
            alert('Загаданное число меньше, осталось попыток ' + count);
            guessTheNumber();
          }
          if (userNum < num) {
            count--;
            alert('Загаданное число больше, осталось попыток ' + count);
            guessTheNumber();
          }
          if (+userNum === num) {
            let userConfirm = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            // console.log('userConfirm: ', userConfirm);
            if (userConfirm === true) {
              count = 10;
              num = Math.floor(Math.random() * 100) + 1;
              guessTheNumber();
            }
          }
        }
      } 
    }
  }

  return guessTheNumber();
}


game();