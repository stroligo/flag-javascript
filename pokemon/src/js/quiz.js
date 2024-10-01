/* ========= PÁGINA QUIZ ========= */
// Captura o ID do Pokémon da URL
const urlParams = new URLSearchParams(window.location.search);
// const pokemonId = urlParams.get('ID');
let currentPokemonId = 2; // ID do Pokémon inicial

/* Função que carrega os detalhes do Pokémon com base no ID */
async function getPokemonDetails(pokemonId) {
  try {
    // Faz a requisição à API para obter os detalhes do Pokémon
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    );
    if (!response.ok) {
      throw new Error(`Erro ao carregar dados: ${response.statusText}`);
    }
    return await response.json(); // Retorna os detalhes do Pokémon
  } catch (error) {
    console.error('Erro ao carregar os detalhes do Pokémon:', error);
    return null;
  }
}

// Função que seleciona Pokémons aleatórios
async function getRandomPokemons(correctId) {
  const allPokemonIds = [...Array(898).keys()].slice(1); // IDs de 1 a 897 (898 Pokémons)
  const randomIds = new Set();

  // Adiciona o ID correto
  randomIds.add(correctId);

  // Adiciona 4 IDs aleatórios
  while (randomIds.size < 5) {
    const randomId = Math.floor(Math.random() * 898) + 1; // Gerar ID aleatório de 1 a 898
    if (randomId !== correctId) {
      randomIds.add(randomId);
    }
  }

  // Retorna os detalhes dos Pokémons aleatórios
  return Promise.all([...randomIds].map((id) => getPokemonDetails(id)));
}

// Função que exibe os detalhes do Pokémon na página
async function loadPokemon(pokemonId) {
  const pokemonData = await getPokemonDetails(pokemonId);
  if (pokemonData) {
    const imgFrontDefault = pokemonData.sprites.front_default;
    const dreamWorldSprite =
      pokemonData.sprites.other.dream_world.front_default;

    function validaImg() {
      return dreamWorldSprite !== null ? dreamWorldSprite : imgFrontDefault;
    }

    // Atualiza o nome e a imagem do Pokémon
    document.getElementById('pokemonName').innerText =
      pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    document.getElementById(
      'pokemonSecret',
    ).innerHTML = `<img src="${validaImg()}" alt="${pokemonData.name}">`;

    // Obtém os 5 Pokémons aleatórios (incluindo o correto)
    const randomPokemons = await getRandomPokemons(pokemonId);
    updateAnswers(randomPokemons, pokemonData.name);
  } else {
    document.getElementById('pokemonName').innerText = 'Pokémon não encontrado';
    document.getElementById('pokemonSecret').innerHTML = '';
  }
}

// Função que atualiza a lista de respostas
function updateAnswers(pokemons, correctName) {
  const answersElement = document.getElementById('answers').querySelector('ul');
  answersElement.innerHTML = ''; // Limpa opções anteriores

  // Embaralha as opções
  const shuffledPokemons = pokemons.sort(() => Math.random() - 0.5);

  shuffledPokemons.forEach((pokemon) => {
    const li = document.createElement('li');
    li.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    // Adiciona evento de clique
    li.onclick = () => handleAnswerClick(li, correctName);

    answersElement.appendChild(li);
  });
}

// Função que trata o clique na resposta
function handleAnswerClick(selectedLi, correctName) {
  const allLis = document.querySelectorAll('#answers ul li');

  // Remove a classe 'escondido' do elemento pokemonSecret
  document.getElementById('pokemonSecret').classList.remove('escondido');

  allLis.forEach((li) => {
    if (li.innerText === correctName) {
      li.style.backgroundColor = 'green'; // Cor correta
    } else {
      li.style.backgroundColor = 'red'; // Cor incorreta
    }
    li.style.pointerEvents = 'none'; // Desabilita cliques em opções após uma resposta ser dada
  });
}

// Funções para navegar entre Pokémons
document.getElementById('nextBtn').onclick = () => {
  currentPokemonId++;
  loadPokemon(currentPokemonId);
};

document.getElementById('previousBtn').onclick = () => {
  if (currentPokemonId > 1) {
    // Impede a navegação abaixo de 1
    currentPokemonId--;
    loadPokemon(currentPokemonId);
  }
};

// Carrega o Pokémon inicial ao abrir a página
loadPokemon(currentPokemonId);
