const squareBox = document.getElementById('squareBox');
const buttonDown = document.getElementById('buttonDown');
const buttonUp = document.getElementById('buttonUp');

let counter = 0;

function updateBox(value) {
  counter += value;
  if (counter > 10) counter = 0;
  if (counter < 0) counter = 10;
  squareBox.innerHTML = counter;
}

buttonDown.addEventListener('click', function () {
  updateBox(-1);
});

buttonUp.addEventListener('click', function () {
  updateBox(1);
});

// Criar um contador que sobe ou desce em incrementos de 1
// 1 - O contador deve ser ciclico, quando chega ao 10 se o utilizador carregar no UP volta para 0
//     se estiver em 0 e carregar DOWN vai para o 10

// 2 - Fazer outro contador em que so vai de 0 a 10 na mesma, mas para quando chega ao 10 ou ao 0 a descer
//    Bonus Points: desactivar os botoes quando nao podem ser utilizados
