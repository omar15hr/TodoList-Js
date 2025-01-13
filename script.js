const todos = [];
const projects = [];


function Todo(title, description, dueDate, priority, notes, checklist) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checklist = checklist;
}

const todo1 = new Todo(
  "Buy milk",
  "It's the best milk",
  "2022-01-01",
  "High",
  "I like milk",
  ["I like milk", "I like it so much"]
);

todos.push(todo1);
showTodos();


function showTodos() {
  const todoList = document.querySelector("#todo");
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const row = document.createElement("tr");

    const title = document.createElement("td");
    title.innerText = todo.title;
    row.appendChild(title);

    const description = document.createElement("td");
    description.innerText = todo.description;
    row.appendChild(description);

    const dueDate = document.createElement("td");
    dueDate.innerText = todo.dueDate;
    row.appendChild(dueDate);

    const priority = document.createElement("td");
    priority.innerText = todo.priority;
    row.appendChild(priority);

    const notes = document.createElement("td");
    notes.innerText = todo.notes;
    row.appendChild(notes);

    const checklist = document.createElement("td");
    checklist.innerText = todo.checklist;
    row.appendChild(checklist); 
    
    todoList.appendChild(row);
  }
}