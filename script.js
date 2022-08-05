const btnCriaTarefa = document.getElementById('criar-tarefa');
btnCriaTarefa.addEventListener('click', () => {
  let getInputText = document.getElementById('texto-tarefa').value;
  const getLista = document.querySelector('.lista-tarefas');
  let criaTarefa = document.createElement('li').innerText = getInputText;
  document.getElementById('lista-tarefas').appendChild(criaTarefa);
  console.log(getLista);
});
