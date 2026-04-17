const tasks = [];
const taskInput = document.getElementById('task-input');
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskValue = taskInput.value.trim();
  if (taskValue === '') {
    return;
  }
  tasks.push(taskValue);
  renderTasks();
  taskInput.value = '';
});

function renderTasks() {
  taskList.innerHTML = '';

  for (let i=0; i<tasks.length; i++) {
    const li = document.createElement('li');
    li.textContent = tasks[i];
    taskList.appendChild(li);
  }

  console.log(tasks);
}