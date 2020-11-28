'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < week.length; i++)
{
  var now = new Date();
  if (i === 5 || i === 6) {
    if (now.getDay() === (i+1)) { 
      document.body.innerHTML += week[i].bold().italics();
      document.body.innerHTML += '<br>'; 
    }
    else {
      document.body.innerHTML += week[i].italics(); 
      document.body.innerHTML += '<br>';
    }
  }
  else {
    if (now.getDay() === (i+1)) { 
      document.body.innerHTML += week[i].bold(); 
      document.body.innerHTML += '<br>';
    }
    else { 
      document.body.innerHTML += week[i];
      document.body.innerHTML += '<br>'; 
    }
  }
}