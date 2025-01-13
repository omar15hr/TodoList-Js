const todoInput = document.querySelector('.project-input');
const addButton = document.getElementById('add-button');
const projects = [];

function Projects (title, todos) {
  this.title = title;
  this.todos = todos;
}

function Todo( title, description, dueDate, priority, notes, completed, project,
) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.completed = completed;
  this.project = project;
}

function addProject() {
  const projectTitle = todoInput.value.trim();

  if( projectTitle === '' ) return;

  const project = new Projects(projectTitle, []);
  projects.push(project);

  const container = document.getElementById('container');
  const card = document.createElement('div');
  card.className = 'projects-card';
  card.innerHTML = `
    <h2>${project.title}</h2>
    <input type="text" placeholder="Add a new todo..." class="todo-input">
  `

  container.appendChild(card);
  todoInput.value = '';
}

addButton.addEventListener('click', addProject);
todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addProject();
  }
})
