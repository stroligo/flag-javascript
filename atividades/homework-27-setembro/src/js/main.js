// Carregamento nas variaveis:
const form = document.querySelector('#form');
const inputForm = document.querySelector('#form input');
const btnForm = document.querySelector('#form button');
const colorBox = document.querySelector('#colorBox');
const lista = document.querySelector('#listItens');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addList(inputForm.value);
});

// Criar item na lista
function addList(cor) {
  const item = document.createElement('li');
  item.style.backgroundColor = cor;

  //Adiciona o Span e o Delete
  item.appendChild(addItemColor(cor));
  item.appendChild(addDeleteBtn(item));
  // Adiciona a Item dentro da Lista
  lista.appendChild(item);
  console.log('Item adiconado a lista: ' + cor);
}

// Span Color
function addItemColor(item) {
  const itemSpan = document.createElement('span');
  itemSpan.textContent = item;
  itemSpan.classList = 'colorName';

  // Cria o click de mudar a cor
  itemSpan.addEventListener('click', () => {
    colorBox.style.backgroundColor = item;
    console.log('Cor modificada para: ' + item);
  });
  return itemSpan;
}

// Botão delete
function addDeleteBtn(item) {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList = 'fechar';

  // Cria o click de remover o item
  deleteBtn.addEventListener('click', () => {
    console.log('Removida a cor');
    item.remove();
  });
  return deleteBtn;
}
