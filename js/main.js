'use strict';

let newElem;

function DomElement(selector, height, width, bg, fontSize, options) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = options;
}

DomElement.prototype.createElem = function() {
  let name = '';
  
  const str = this.selector;
    for (let i = 1; i < str.length; i++) {
      name += str[i];
    }
  if (str[0] === '.') {
    newElem = document.createElement('div');
    newElem.classList.add(name);
  }
  if (str[0] === '#') {
    newElem = document.createElement('p');
    newElem.setAttribute('id', name);
  }
  newElem.style.cssText = 'background-color: ' + this.bg + '; width: ' + this.width + 'px; height: ' + this.height + 'px; font-size: ' + this.fontSize + 'px;';
  newElem.style.position = this.position;
  newElem.style.top = 0;
  newElem.style.left = 0;
  newElem.textContent = 'Новый элемент создан';
  console.log('Элемент добавлен');
  document.body.append(newElem);
};

const elem = new DomElement('.block', 100, 100, '#eeeeee', 14, 'absolute');

document.addEventListener("DOMContentLoaded", function() {
  console.log('Страница загружена');
  });

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowUp') {
      newElem.style.top = parseInt(newElem.style.top) - 10 + 'px';
    }
    else if (event.code === 'ArrowDown') {
      newElem.style.top = parseInt(newElem.style.top) + 10 + 'px';
    }
    else if (event.code === 'ArrowLeft') {
      newElem.style.left = parseInt(newElem.style.left) - 10 + 'px';
    }
    else if (event.code === 'ArrowRight') {
      newElem.style.left = parseInt(newElem.style.left) + 10 + 'px';
    }

}); 



setTimeout(function(){
 elem.createElem();
});
 
