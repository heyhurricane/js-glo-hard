'use strict';

const todoControl = document.querySelector('.todo-control'),
headerInput = document.querySelector('.header-input'),
todoList = document.querySelector('.todo-list'), 
todoCompleted = document.querySelector('.todo-completed '); 

let todoData = JSON.parse(localStorage.getItem("todoData"));

  // получение дел из локалсторедж
//   {
//     value: 'Сварить кофе',
//     completed: false
//   },
//   {
//     value: 'Помыть посуду',
//     completed: true
//   }
// ];
//  

const render = function() {
  todoList.textContent = '';
  todoCompleted.textContent = '';
  if (todoData === null) {
    todoData = [];
  }
  if (todoData !== '') {
    todoData.forEach(function(item){
      const li = document.createElement('li');
      li.classList.add('todo-item');
      li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
      '<div class="todo-buttons">' + '<button class="todo-remove"></button>' + 
      '<button class="todo-complete"></button>' + '</div>';
      if (item.completed) {
        todoCompleted.append(li);
      }
      else {
        todoList.append(li);
      }

      const todoComplete = li.querySelector('.todo-complete'); 
      const todoRemove = li.querySelector('.todo-remove'); 
      todoComplete.addEventListener('click', function(){
        item.completed = !item.completed;
        render();
      });
      todoRemove.addEventListener('click', function(){
        let num = todoData.indexOf(item);
        console.log('num: ', num);
        todoData.splice(num, 1);
        render();
      });
    });
  }
  localStorage.setItem('todoData', JSON.stringify(todoData));
};

todoControl.addEventListener('submit', function(event){
  event.preventDefault();
  const newTodo = {
    value: headerInput.value,
    completed: false
  };
  if (newTodo.value !== '') {
    todoData.push(newTodo);
  }
  else {
    alert('Пустое значение!');
  }
  render();
  headerInput.value = '';
});

 render();