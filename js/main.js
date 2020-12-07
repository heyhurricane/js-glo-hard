'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const btnRegistr = document.querySelector('.registr'),
btnLogin = document.querySelector('.login'),
userList = document.querySelector('.list'), 
heading = document.querySelector('.heading'); 

const formatter = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

let users = JSON.parse(localStorage.getItem("users"));

const render = function() {
  userList.textContent = '';
  if (users === null) {
    users = [];
  }
  if (users !== '') {
    users.forEach(function(item){
      const li = document.createElement('li');
      li.classList.add('user');
      li.innerHTML = '<span class="user">' + item.name + ' ' + item.lastName + ' ' +
      item.dateRegistration + '</span>' +
      '<div class="user-buttons">' + '<button class="user-remove">Удалить</button>' + 
      '</div>';
      userList.append(li);
     
      const userRemove = li.querySelector('.user-remove'); 
      userRemove.addEventListener('click', function(){
        let num = users.indexOf(item);
        console.log('num: ', num);
        users.splice(num, 1);
        render();
      });
    });
  }
  localStorage.setItem('users', JSON.stringify(users));
};

btnRegistr.addEventListener('click', function(){
  let userName;
  let userLogin;
  let userPassword;
  let newName;
  do {
    userName = prompt('Введите Ваше Имя и Фамилию через пробел');
    newName = userName.toLowerCase().split(" ");
    for (let i = 0; i < newName.length; i++)
    {
      let word = newName[i];
      let newWord = word[0].toUpperCase();
      for (let j = 1; j < word.length; j++) {
        newWord += word[j];
      }
      newName[i] = newWord;
    }
  }
  while (isNumber(userName) || newName.length !== 2);

  do {
    userLogin = prompt('Введите Ваш Логин');
  }
  while (userLogin === '');

  do {
    userPassword = prompt('Введите Пароль');
  }
  while (userPassword === '');

  const newUser = {
    name: newName[0],
    lastName: newName[1],
    login: userLogin,
    password: userPassword,
    dateRegistration: formatter.format(new Date())
  };

  users.push(newUser);
  render();
});

btnLogin.addEventListener('click', function(){
  let userLogin;
  let userPassword;
  do {
    userLogin = prompt('Введите Ваш Логин');
  }
  while (userLogin === '');

  do {
    userPassword = prompt('Введите Пароль');
  }
  while (userPassword === '');
  let count = 0;
  users.forEach(function(item){
    if (item.login === userLogin && item.password === userPassword) {
      heading.textContent = 'Привет, ' + item.name + '!';
    }
    else {
      count++;
    }
  });
  if (count === users.length) { alert('Пользователь не найден!'); }
});


render();
 
