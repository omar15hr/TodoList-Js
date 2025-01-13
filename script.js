const projectInput = document.querySelector('.project-input');
const addButton = document.getElementById('add-button');
const todoInput = document.querySelector('.todo-input');
const addButtonTodo = document.getElementById('add-button-todo');
const projects = [];
const todos = [];

function Projects (title) {
  this.title = title;
}

function Todo( title ) {
  this.title = title;
}

function addProject() {
  const projectTitle = projectInput.value.trim();

  if( projectTitle === '' ) return;

  const project = new Projects(projectTitle);
  projects.push(project);

  const container = document.getElementById('container');
  const card = document.createElement('div');
  card.className = 'projects-card';
  card.innerHTML = `
    <h2>${project.title}</h2>
    <span class="todo-container"></span>
    <input type="text" placeholder="Add a new todo..." class="todo-input">
    <button id="add-button-todo">Add</button>
  `

  container.appendChild(card);
  projectInput.value = '';
}

addButton.addEventListener('click', addProject);
projectInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addProject();
  }
});

function addTodo() {
  const todoTitle = todoInput.value.trim();

  if (todoTitle === '') return;

  const todo = new Todo(todoTitle);
  todos.push(todo);

  const todoContainer = document.querySelector('.todo-container');
  const todoCard = document.createElement('div');
  todoCard.className = 'todo-card';
  todoCard.innerHTML = `
    <h3>${todo.title}</h3>
  `
  todoContainer.appendChild(todoCard);

  todoInput.value = '';

}

addButtonTodo.addEventListener('click', addTodo);
