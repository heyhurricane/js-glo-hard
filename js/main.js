'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const colorNum = document.querySelector('.color'),
button = document.querySelector('button'); 

const formatter = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

let users = JSON.parse(localStorage.getItem("users"));

const rand = function() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
  colorNum.textContent = color;
};


button.addEventListener('click', function(){
 rand();
});


rand();
 
