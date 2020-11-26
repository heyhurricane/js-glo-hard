'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


function guessTheNumber(num, count) {
  if (count === 0) {
    const userConfirm = confirm('Попытки закончились, хотите сыграть еще?');
    if (userConfirm === true) {
      count = 10;
      num = Math.floor(Math.random() * 100) + 1;
      guessTheNumber(num, count);
    }
  }
  else {
    let userNum = prompt('Угадай число от 1 до 100');
    console.log('userNum: ', userNum);
    if (userNum === null) {
      alert('Игра окончена');
    }
    else
    {
      if (!isNumber(userNum)) {
        alert('Введи число!');
        guessTheNumber(num, count);
      }
      else {
        if (userNum > num) {
          count--;
          alert('Загаданное число меньше, осталось попыток ' + count);
          guessTheNumber(num, count);
        }
        if (userNum < num) {
          count--;
          alert('Загаданное число больше, осталось попыток ' + count);
          guessTheNumber(num, count);
        }
        if (+userNum === num) {
          const userConfirm = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
          if (userConfirm === true) {
            count = 10;
            num = Math.floor(Math.random() * 100) + 1;
            guessTheNumber(num, count);
          }
        }
      }
    } 
  }
}

guessTheNumber(43, 10);