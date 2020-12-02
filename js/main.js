'use strict';

let books = document.querySelectorAll('.book');

books[5].after(books[2]);
books[0].before(books[1]);
books[4].after(books[3]);

document.body.style.backgroundImage = 'url(../image/you-dont-know-js.jpg)';

let title = books[4].querySelector('h2');
title.textContent = 'Книга 3. this и Прототипы Объектов';

let commercial = document.querySelector('.adv');
commercial.remove();

let chapters = books[0].querySelectorAll('li');

chapters[9].after(chapters[2]);
chapters[3].after(chapters[6]);
chapters[6].after(chapters[8]);

let chapters2 = books[5].querySelectorAll('li');

chapters2[1].after(chapters2[9]);
chapters2[4].after(chapters2[2]);
chapters2[7].after(chapters2[5]);

const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';

let chapters3 = books[2].querySelectorAll('li');
chapters3[8].after(newChapter);
