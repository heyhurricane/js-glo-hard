'use strict';

const arr = ['23510', '12656', '3456', '42365', '50012', '24635', '78965'];

let arraySearch = function(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === '2' || data[i][0] === '4') {
      console.log(data[i]);
    }
  }
};

arraySearch(arr);

let simpleInt = function() {
  for (let i = 2; i <= 100; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
      if ((i % j) === 0) { 
        count++;
      }
    }
    if (count === 0) {
      console.log(i + ' Делители этого числа: 1 и ' + i);
    }
  }
};

simpleInt();