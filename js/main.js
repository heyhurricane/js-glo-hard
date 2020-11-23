'use strict';

let lang = prompt('Введите язык (ru/en):').toLowerCase();
console.log('lang: ', lang);

// if-else
console.log("IF-ELSE:")
if (lang === 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
}
else {
  if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
  }
}

// switch
console.log("SWITCH:")
switch (lang) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
}

let array1 = [
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];

// массивы
console.log('МНОГОМЕРНЫЕ МАССИВЫ:')

let numLanguage = (lang === 'ru') ? '0' : '1';

console.log('numLanguage: ', numLanguage);

for (let j = 0; j < array1[0].length; j++) {
    console.log(array1[numLanguage][j]);
}

let namePerson = 'Дина';

let result = (namePerson === 'Артем') ? 'директор' : 
            (namePerson === 'Максим') ? 'преподаватель' : 'студент';

console.log(result);

