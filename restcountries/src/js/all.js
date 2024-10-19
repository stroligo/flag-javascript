/* ========= countriesList ========= */
let currentPage = 1;
let limit = 300;

async function getAllCountriesList() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    console.log('Carregando API');
    loadContent(data, currentPage, limit);
    loadController(data);

    return data;
  } catch (error) {
    console.error('Erro ao carregar o arquivo JSON:', error);
  }
}

function loadContent(data, currentPage, limit) {
  const countriesList = document.getElementById('countriesList');
  countriesList.innerHTML = '';

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  for (let i = startIndex; i < endIndex && i < data.length; i++) {
    const li = document.createElement('li');
    countriesList.appendChild(li);

    const link = document.createElement('a');
    link.href = `details.html?ID=${data[i].cca3}`;
    link.textContent = data[i].name.common;
    li.appendChild(link);
  }
}

function loadController(data) {
  const previousBtn = document.getElementById('previousBtn');
  const nextBtn = document.getElementById('nextBtn');

  const calculatePages = () => Math.ceil(data.length / limit);

  const updateButtons = () => {
    const totalPages = calculatePages();
    previousBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  };

  const updatePage = () => {
    loadContent(data, currentPage, limit);
    updateButtons();
    updatePageInfo();
  };

  const irAnterior = () => {
    if (currentPage > 1) {
      currentPage--;
      updatePage();
    }
  };

  const irPorixmo = () => {
    if (currentPage < calculatePages()) {
      currentPage++;
      updatePage();
    }
  };

  previousBtn.addEventListener('click', irAnterior);
  nextBtn.addEventListener('click', irPorixmo);

  const totalPagesSpan = document.getElementById('totalPages');
  const currentPageSpan = document.getElementById('page');

  const updatePageInfo = () => {
    const totalPages = calculatePages();
    totalPagesSpan.textContent = totalPages;
    currentPageSpan.textContent = currentPage;
  };

  updatePageInfo();
  updateButtons();
}

getAllCountriesList();
