"use strict";

let num = 266219;

let array1 = num.toString().split("");
console.log('array1: ', array1);

const reducer = (accumulator, currentValue) => accumulator * currentValue;
let result = array1.reduce(reducer);

// var result = 1;

// for (let i=0; i<num.toString().length; i++) {
//   result *= num.toString()[i];
  
// }

console.log('result: ', result);

result = result ** 3;

// alert(result.toString().slice(0, 2));
console.log(result.toString().slice(0, 2));