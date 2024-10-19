// Obtém a URL atual
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get('ID');
console.log(id); // Saída: "KGZ"

async function getContryDetails() {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
    const data = await response.json();
    console.log('Carregando API');
    loadContent(data);
  } catch (error) {
    console.error('Erro ao carregar o arquivo JSON:', error);
  }
}

function loadContent(data) {
  const card = document.querySelector('.card');

  card.innerHTML = `
    <img src="${data[0].flags.png}" alt="bandeira do ${data[0].name.common}">
    <h2>${data[0].name.common}</h2>
    <p>Capital: ${data[0].capital}</p>
    <p>População: ${data[0].population}</p>
    <p>Região: ${data[0].region}</p>
    <p>Sub-região: ${data[0].subregion}</p>
    <p>População: ${data[0].population}</p>
    <p>Area: ${data[0].area}</p>
    <p>Continente: ${data[0].continents}</p>

    `;
}

getContryDetails();
