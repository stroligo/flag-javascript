const img = document.getElementById('sliderimg');
const caption = document.getElementById('caption');
const btnprev = document.getElementById('prev');
const btnnext = document.getElementById('next');

let cachorros = [];
let counter = 0;

async function carregaData() {
  try {
    const response = await fetch('data/data.json');
    if (!response.ok) {
      throw new Error(`Erro ao carregar dados: ${response.statusText}`);
    }
    const data = await response.json();
    cachorros = data.cachorros;
    updateImg(0); // Inicializa a galeria
  } catch (error) {
    console.error('Erro ao carregar o arquivo JSON:', error);
  }
}

function updateImg(value) {
  counter += value;

  // Verifica se chegou ao fim ou início da galeria e faz o looping
  if (counter >= cachorros.length) {
    counter = 0; // Volta para o primeiro item
  } else if (counter < 0) {
    counter = cachorros.length - 1; // Vai para o último item
  }

  // Atualiza a imagem e a legenda com base no índice atual
  img.src = cachorros[counter].img;
  caption.innerHTML = cachorros[counter].name;
}

btnprev.addEventListener('click', function () {
  updateImg(-1);
});

btnnext.addEventListener('click', function () {
  updateImg(1);
});

// Carrega os dados JSON
carregaData();
