'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}
 
DomElement.prototype.createElem = function() {
  let name = '';
  let newElem;
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
  newElem.textContent = 'Новый элемент создан';
  document.body.append(newElem);
};

let elem = new DomElement('.block', 100, 200, '#eeeeee', 14);
elem.createElem();