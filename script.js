function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  const taskList = document.getElementById('taskList');

  if (taskText === '') {
    alert('Digite uma tarefa!');
    return;
  }

  if (taskList.children.length >= 5) {
    alert('Você atingiu o limite máximo de 5 tarefas!');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button onclick="removeTask(this)">Remover</button>
  `;

  taskList.appendChild(li);
  input.value = '';
}

function removeTask(button) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(button.parentElement);
}