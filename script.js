const btnCriaTarefa = document.getElementById('criar-tarefa');
const getLista = document.getElementById('lista-tarefas');

let selectedItem;
let count = 0;

function verificaCores() {
  const getListaItems = document.querySelectorAll('li');
  for (let index = 0; index < getListaItems.length; index += 1) {
    if (getListaItems[index].className === selectedItem) {
      getListaItems[index].style.backgroundColor = 'gray';
    } else {
      getListaItems[index].style.backgroundColor = 'white';
    }
  }
}

btnCriaTarefa.addEventListener('click', () => {
  const getInputText = document.getElementById('texto-tarefa').value;
  if (getInputText !== '') {
    const criaTarefa = document.createElement('li');
    criaTarefa.className = 'item' + count;
    count += 1;
    const textContent = document.createTextNode(getInputText);
    criaTarefa.appendChild(textContent);
    getLista.appendChild(criaTarefa).lastChild;
    criaTarefa.addEventListener('click', () => {
      selectedItem = criaTarefa.className;
      verificaCores();
    });
    criaTarefa.addEventListener('dblclick', () => {
      if (criaTarefa.className === 'completed') {
        criaTarefa.className = '';
      } else {
        criaTarefa.className = 'completed';
      }
    });
    document.getElementById('texto-tarefa').value = '';
  }
});

function apagaTodosItens() {
  while (getLista.lastChild) {
    getLista.removeChild(getLista.lastChild);
  }
}

const btnClearAll = document.getElementById('apaga-tudo');
btnClearAll.addEventListener('click', apagaTodosItens);

function apagaFinalizados() {
  for (let index = getLista.children.length - 1; index >= 0; index -= 1) {
    if (getLista.children[index].className === 'completed') {
      getLista.children[index].remove();
    }
  }
}

const btnApagaFinalizados = document.getElementById('remover-finalizados');
btnApagaFinalizados.addEventListener('click', apagaFinalizados);
