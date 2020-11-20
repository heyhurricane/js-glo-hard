let num = 266219;

var result = 1;

for (let i=0; i<num.toString().length; i++) {
  result *= num.toString()[i];
  
}

console.log('result: ', result);

result = result ** 3;

console.log(result.toString().slice(0, 2));