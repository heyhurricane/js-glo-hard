'use strict';

const bee = document.querySelector('.bee'),
btnGo = document.querySelector('.go'),
btnReset = document.querySelector('.reset');
let count = 0, count2 = 0,
flyInterval;

function beeFlight() {
  flyInterval = requestAnimationFrame(beeFlight);
  count++;
  if (count < 400) {
    bee.style.left = 2*count + 'px';
  }
  else {
    if (count < 700) {
      count2++;
      bee.style.top = count2 + 'px';
    }
    else { cancelAnimationFrame(flyInterval);}
  }
  
}

let animate = false;

btnGo.addEventListener('click', () => {
  if (!animate) {
    flyInterval = requestAnimationFrame(beeFlight);
    animate = true;
    btnGo.textContent = 'Остановить';
  }
  else {
    animate = false;
    btnGo.textContent = 'Запустить';
    cancelAnimationFrame(flyInterval);
  }
});

btnReset.addEventListener('click', () => {
  count = 0; 
  count2 = 0;
  bee.style.left = count + 'px';
  bee.style.top = count2 + 'px';
  cancelAnimationFrame(flyInterval);
  animate = false;
  btnGo.textContent = 'Запустить';
});

