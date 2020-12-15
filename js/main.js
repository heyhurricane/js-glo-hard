'use strict';

const input = document.querySelector('input'),
text = document.querySelector('.text');

function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  };
}


function textOutput() {
    text.textContent = input.value;
  }

 // setTimeout(textOutput, 300);

input.addEventListener('keydown', debounce(textOutput, 300)); 