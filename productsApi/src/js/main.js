let limit = 10;
let type = 'price';
let order = 'asc';

async function getCategoryList(id) {
  const response = await fetch(`https://dummyjson.com/products/categories/`);
  const data = await response.json();
  console.log(data);

  loadSelect(data);

  /*  Load First category */
  const firstSlug = data[0].slug;
  getProductsList(firstSlug); // Carrega os produtos iniciais

  return data;
}

async function getProductsList(slug) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${slug}?sortBy=${type}&order=${order}`,
  );
  const data = await response.json();

  console.log(data);

  loadContent(data.products);
  return data;
}

function loadSelect(data) {
  const select = document.querySelector('#selectInput');
  // Adicionar um item ao select
  data.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.slug;
    option.text = item.name;
    select.appendChild(option);
  });
  /* Adiciona a mudança */
  select.addEventListener('change', (event) => {
    const slug = event.target.value;

    console.log(slug);
    getProductsList(slug);
  });
}
function loadContent(data) {
  const main = document.querySelector('#main');
  const productsList = document.querySelector('#productsList');

  productsList.innerHTML('Vaiii ');

  main.innerHTML = '';
  data.forEach((item) => {
    /* Create Card */
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${item.images[0]}" alt="bandeira do ${item.title}">
    <h2 class="title">${item.title}</h2>
    <p class="price">Price: $${item.price}</p>
    <p class="rating">Rating: ${item.rating}</p>
    <p class="description">Description: ${item.description}</p>
    <p class="category">Category: ${item.category}</p>
    `;
    main.appendChild(card);
  });
}

const BtnOrderDesc = document.querySelector('#orderDesc');
const BtnOrderAsc = document.querySelector('#orderAsc');
BtnOrderDesc.addEventListener('click', () => {
  order = 'desc';
  console.log(order);
  const slug = document.querySelector('#selectInput').value;
  getProductsList(slug);
});

BtnOrderAsc.addEventListener('click', () => {
  order = 'asc';
  console.log(order);
  const slug = document.querySelector('#selectInput').value;
  getProductsList(slug);
});

getCategoryList();
