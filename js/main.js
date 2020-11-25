'use strict';

function func(data) {
  if (typeof(data) !== 'string') {
    console.log('Это не строка!');
  }
  else {
    data = data.trim();
    if (data.length > 30) {
      let result='';
      for (let i=0; i<30; i++) {
        result += data[i];
      }
      result += '...';
      console.log(result);
    }
  }
}

func(' Карл у Клары украл рекламу, а Клара у Карла украла бюджет. ');