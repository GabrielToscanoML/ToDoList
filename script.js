const btnCriaTarefa = document.getElementById('criar-tarefa');
const getLista = document.getElementById('lista-tarefas');

let selectedItem;
let count = 0;

function verificaCores() {
  let getListaItems = document.querySelectorAll('li');
  for(let index = 0; index < getListaItems.length; index++) {
    if(getListaItems[index].className === selectedItem){
      getListaItems[index].style.backgroundColor = 'gray';
    } else {
      getListaItems[index].style.backgroundColor = 'white';
    }
  }
}

btnCriaTarefa.addEventListener('click', () => {
  let getInputText = document.getElementById('texto-tarefa').value;

  if(getInputText !== '') {
    let criaTarefa = document.createElement('li');
    criaTarefa.className = 'item' + count;
    count++;

    let textContent = document.createTextNode(getInputText);

    criaTarefa.appendChild(textContent);
    getLista.appendChild(criaTarefa).lastChild;
    
    criaTarefa.addEventListener('click', () => {
      selectedItem = criaTarefa.className;
      verificaCores();
    });

    document.getElementById('texto-tarefa').value = '';
  }
});
