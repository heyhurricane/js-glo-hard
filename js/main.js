'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < week.length; i++)
{
  const now = new Date();
  const options = { weekday: 'long'};
  const weekday = new Intl.DateTimeFormat('ru-RU', options).format(now);

  if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
    if (week[i].toLowerCase() === weekday) { 
      document.body.innerHTML += week[i].bold().italics();
      document.body.innerHTML += '<br>'; 
    }
    else {
      document.body.innerHTML += week[i].italics(); 
      document.body.innerHTML += '<br>';
    }
  }
  else {
    if (week[i].toLowerCase() === weekday) { 
      document.body.innerHTML += week[i].bold(); 
      document.body.innerHTML += '<br>';
    }
    else { 
      document.body.innerHTML += week[i];
      document.body.innerHTML += '<br>'; 
    }
  }
}