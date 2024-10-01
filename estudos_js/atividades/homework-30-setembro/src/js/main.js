/* Variaveis */
const form = document.querySelector('#form');
const addCircleBtn = document.querySelector('#addCircleBtn');
const changePositionBtn = document.querySelector('#changePositionBtn');
const changeColorBtn = document.querySelector('#changeColorBtn');
const changeSizeBtn = document.querySelector('#changeSizeBtn');
const changeEverthing = document.querySelector('#changeEverthing');
const numberSelect = document.querySelector('#numberSelect');
const circleBox = document.querySelector('#circleBox');
const colorClasses = [
  'red',
  'green',
  'blue',
  'yellow',
  'purple',
  'orange',
  'pink',
  'coral',
  'turquoise',
  'magenta',
  'lime',
  'cyan',
  'fuchsia',
  'salmon',
  'aqua',
  'violet',
];
const sizeClasses = ['small', 'medium', 'big'];

const circleBoxWidth = 400;
const circleBoxHeight = 400;

const maxSize = 60;
const maxX = circleBoxWidth - maxSize;
const maxY = circleBoxHeight - maxSize;

/* Funções Gerais  */
function randomItem(item) {
  return item[Math.floor(Math.random() * item.length)];
}

function randomPosition() {
  return Math.floor(Math.random() * 96); /* Max 95 */
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
});

addCircleBtn.addEventListener('click', function () {
  for (let i = 0; i < numberSelect.value; i++) {
    addCircle();
  }
});
changePositionBtn.addEventListener('click', function () {
  changeCirclePosition(circleBox);
});
changeColorBtn.addEventListener('click', function () {
  changeCircleColor(circleBox);
});
// Adicione o evento de clique do botão de mudança de tamanho aqui
changeSizeBtn.addEventListener('click', function () {
  changeCircleSize(circleBox);
});
changeEverthing.addEventListener('click', function () {
  changeCirclePosition(circleBox);
  setTimeout(function () {
    changeCircleColor(circleBox);
  }, 500);
  setTimeout(function () {
    changeCircleSize(circleBox);
  }, 1000);
});

/* Gera Random Classes */
function changeCirclePosition(circleBox) {
  const items = circleBox.children;

  for (const item of items) {
    item.style.transition = 'top 0.5s, left 0.5s';
    const size = item.offsetWidth;
    const x = Math.floor(Math.random() * (circleBoxWidth - size)) + 'px';
    const y = Math.floor(Math.random() * (circleBoxHeight - size)) + 'px';

    item.style.top = y;
    item.style.left = x;
  }
}
function changeCircleColor(circleBox) {
  const items = circleBox.children;
  for (const item of items) {
    item.style.transition = 'background-color 0.5s ease-in-out';
    item.classList.remove(...colorClasses);
    item.classList.add(randomItem(colorClasses));
  }
}
console.log(...colorClasses);
function changeCircleSize(circleBox) {
  const items = circleBox.children;
  const sizeClassesToRemove = ['small', 'medium', 'big'];

  for (const item of items) {
    item.style.transition = 'width 0.5s ease-in-out, height 0.5s ease-in-out';
    item.classList.remove(...sizeClassesToRemove);
    item.classList.add(randomItem(sizeClasses));
  }
}
function addCircle() {
  const item = document.createElement('div');
  item.classList.add('circle');
  item.classList.add(randomItem(colorClasses));
  item.classList.add(randomItem(sizeClasses));

  const size = item.offsetWidth;
  const x = Math.floor(Math.random() * (maxX - size + 1));
  const y = Math.floor(Math.random() * (maxY - size + 1));

  item.style.top = `${y}px`;
  item.style.left = `${x}px`;

  circleBox.appendChild(item);
  console.log('Item adiconado a circleBox');

  item.addEventListener('click', function () {
    item.remove();
    /*     changeCirclePosition(circleBox); */
    console.log('Item removido do circleBox');
  });
}
