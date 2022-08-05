const btnCriaTarefa = document.getElementById('criar-tarefa');
const getLista = document.getElementById('lista-tarefas');

btnCriaTarefa.addEventListener('click', () => {
  let getInputText = document.getElementById('texto-tarefa').value;
  let criaTarefa = document.createElement('li');
  let textContent = document.createTextNode(getInputText);
  criaTarefa.appendChild(textContent);
  getLista.appendChild(criaTarefa).lastChild;
  document.getElementById('texto-tarefa').value = '';
});
