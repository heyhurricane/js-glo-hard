'use strict';

class Todo {
  constructor(form, input, todoList, todoCompleted) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    // this.todoData = new Map();
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
  }

  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  }
  
  render() {
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.todoData.forEach(this.createElem, this);
    this.addToStorage();
  }
  createElem(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.attributes.id = todo.key;
    li.insertAdjacentHTML('beforeend', `
    <span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>
    `);
    if (todo.completed) {
      this.todoCompleted.append(li);
    }
    else {
       this.todoList.append(li);
    }
  }

  addTodo(e) {
    e.preventDefault();
    if (this.input.value.trim()) {
      const newTodo = {
        value: this.input.value,
        completed: false,
        key: this.generateKey()
      };
      this.todoData.set(newTodo.key, newTodo);
      this.render();
    }
    else {
      alert('Введите дело!');
    }
    this.input.value='';
  }

  generateKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  deleteItem(target) {
    target = target.closest('.todo-item');
    this.todoData.forEach((item) => {
     if (item.key === target.attributes.id) {
       this.todoData.delete(item.key);
     }
    });
    this.render();
  }
  completedItem(target) {
    target = target.closest('.todo-item');
    this.todoData.forEach((item) => {
     if (item.key === target.attributes.id) {
      item.completed = !(item.completed);
     }
    });
    this.render();
  }

  hendler(event) {
    let target = event.target;
    if (target.matches('.todo-remove')) {
      this.deleteItem(target);
    }
    if (target.matches('.todo-complete')) {
      this.completedItem(target);
    }

  }
  init() {
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.todoList.addEventListener('click', (event) => {
      this.hendler(event);
    });
    this.todoCompleted.addEventListener('click', (event) => {
      this.hendler(event);
    });
    this.render();
  }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');
todo.init();


