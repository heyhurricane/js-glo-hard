'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function declensionOfNouns(num, words) {
  num = Math.abs(num) % 100; 
  let num2 = num % 10;
  if (num > 10 && num < 20) { 
    return words[2]; 
  }
  if (num2 > 1 && num2 < 5) { 
    return words[1]; 
  }
  if (num2 === 1) { 
    return words[0]; 
  }
  return words[2];
}

function addZero(number) {
  if (number.toString().length === 1) {
    let newNum = "0";
    newNum += number;
    number = newNum;
  }
  return number;
}

function mainFunc() {
  const now = new Date();
  let options = { 
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  };
  let weekday = new Intl.DateTimeFormat('ru', options).format(now);

  weekday = weekday.toLocaleString();

  let weekdayUpper = weekday[0].toUpperCase();
  for (let i = 1; i < weekday.length; i++) {
    weekdayUpper += weekday[i];
  }
  const hours = now.getHours();

  document.body.innerHTML = 'Сегодня ' + weekdayUpper + ' ' + now.getFullYear() + ' года, ';
  document.body.innerHTML += now.getHours() + ' ' + declensionOfNouns(now.getHours(), ['час', 'часа', 'часов']) + ' ';
  document.body.innerHTML += now.getMinutes() + ' ';
  document.body.innerHTML += declensionOfNouns(now.getMinutes(), ['минута', 'минуты', 'минут']) + ' ';
  document.body.innerHTML += now.getSeconds() + ' ';
  document.body.innerHTML += declensionOfNouns(now.getSeconds(), ['секунда', 'секунды', 'секунд']);
  document.body.innerHTML += '<br>';


  document.body.innerHTML += addZero(now.getDate()) + '.' + addZero(now.getUTCMonth()+1) +'.';
  document.body.innerHTML += now.getFullYear() + ' - ' + addZero(now.getHours()) + ':';
  document.body.innerHTML += addZero(now.getMinutes()) + ':' + addZero(now.getSeconds());
}

setInterval(mainFunc, 1000);