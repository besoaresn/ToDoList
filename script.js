// Carregar tarefas salvas quando a página for carregada
document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

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

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
    
    // Coletar todas as tarefas atuais
    for (let i = 0; i < taskList.children.length; i++) {
        const taskText = taskList.children[i].textContent.replace('Remover', '').trim();
        tasks.push(taskText);
    }
    
    // Salvar no localStorage
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
    
    alert('Tarefas salvas com sucesso!');
}

function loadTasks() {
    const savedTasks = localStorage.getItem('todoTasks');
    
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        const taskList = document.getElementById('taskList');
        
        // Limpar lista atual
        taskList.innerHTML = '';
        
        // Adicionar tarefas salvas
        tasks.forEach(function(taskText) {
            if (taskText.trim() !== '') {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${taskText}
                    <button onclick="removeTask(this)">Remover</button>
                `;
                taskList.appendChild(li);
            }
        });
    }
}
