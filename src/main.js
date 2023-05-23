import data from './data/pokemon/pokemon.js';

const pokemonData = data.pokemon;

function mostrarPokemon(pokemonList) {
  const container = document.getElementById('contenido');
  container.innerHTML = '';

  pokemonList.forEach((pokemon) => {
    const pokemonCardDiv = document.createElement('div');
    pokemonCardDiv.classList.add('pokemonCard'); // Agregar la clase pokemonCard

    // Crear la estructura HTML de la tarjeta de información
    pokemonCardDiv.innerHTML = `
      <p class="pokemonName">${pokemon.name}</p>
      <p class="pokemonNum">${pokemon.num}</p>
      <p class="pokemonGeneration">Generación: ${pokemon.generation.num} (${pokemon.generation.name})</p>
      <img src="${pokemon.img}">
      <p class="pokemonType">Tipo: ${pokemon.type}</p>
    `;

    container.appendChild(pokemonCardDiv);
  });
}


function buscarPokemon() {
  const searchInput = document.querySelector('.searchPokemon');
  const searchTerm = searchInput.value.toLowerCase();

  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  mostrarPokemon(filteredPokemon);
}

const searchButton = document.getElementById('button-search');
searchButton.addEventListener('click', buscarPokemon);