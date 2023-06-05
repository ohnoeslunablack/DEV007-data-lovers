import { filterData, filterGeneration, filterOrdenamiento } from './data.js';
import data from './data/pokemon/pokemon.js';



const pokemonData = data.pokemon;
const pokemonList = data.pokemon;

function mostrarPokemon(pokemonList) {
  const container = document.getElementById('contenido');
  container.innerHTML = '';

  pokemonList.forEach((pokemon) => {
    const pokemonCardDiv = document.createElement('div');
    pokemonCardDiv.classList.add('pokemonCard'); // Agregar la clase pokemonCard
    
    // Crea la estructura HTML de la tarjeta de información (se queda aqui)
    pokemonCardDiv.innerHTML = `
    <div class="card">
        <div class="card-header">
            <img src="${pokemon.img}" alt="">
        </div>
        <div class="card-body">
        <h3 class="pokemonName">
                ${pokemon.name}
            </h3>
            <div class="type">
            <span class="pokemonType">Tipo: ${pokemon.type}</span>
                <span class="pokemonNum">Num: ${pokemon.num}</span>
            </div>
            <p class="pokemonGeneration">
                Generación: ${pokemon.generation}
            </p>
            <div class="stat">
                <div class="tak">
                    <b>HP : &emsp;&emsp;&nbsp;&nbsp;&nbsp;</b> ${pokemon.stats.hp}
                </div>
                <div class="tak">
                    <b>ATAQUE : &ensp;</b>${pokemon.stats.attack}
                </div>
                <div class="tak">
                    <b>DEFENSA : </b>${pokemon.stats.defense}
                </div>
                <div class="tak">
                    <b>RESISTENCIA : &nbsp;&emsp;</b>${pokemon.stats.stamina}
                </div>
            </div>
        </div>
    </div>
    `;

    container.appendChild(pokemonCardDiv);
  });
}


//funcion que llama a los pokemones por medio del boton search, nombre (se queda aqui)

function buscarPokemon() {
  const searchInput = document.querySelector('.searchPokemon');
  const searchTerm = searchInput.value.toLowerCase();

  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  mostrarPokemon(filteredPokemon);
}

// Renderizar la data completa al cargar la página (se queda aqui)

function renderizarDataCompleta() {
  mostrarPokemon(pokemonData);
}

window.addEventListener('DOMContentLoaded', renderizarDataCompleta);

const searchButton = document.getElementById('button-search');
searchButton.addEventListener('click', buscarPokemon);


//array para llamar tipo de pokemon, imprime en consola

const seleccionarTipo = document.getElementById("tipo");
seleccionarTipo.addEventListener('change', () => {
  const type = seleccionarTipo.options[seleccionarTipo.selectedIndex].value;
  if (type === "All") {
    mostrarPokemon(pokemonList)
  } else {
    mostrarPokemon(filterData(data, type));
  }

});

//array para llamar generacion de pokemon, imprime en consola


const seleccionarGeneracion = document.getElementById("generacion");
seleccionarGeneracion.addEventListener('change', () => {
  const generation = seleccionarGeneracion.options[seleccionarGeneracion.selectedIndex].value;
  if (generation === "All") {
    mostrarPokemon(pokemonList)
  } else {
    mostrarPokemon(filterGeneration(data, generation));
  }

});

//array para llamar el ordenamiento


const select = document.getElementById("ordenamiento");
select.addEventListener("change", () => {
  const seleccionarOrden = select.value;
  const newData = filterOrdenamiento(data, seleccionarOrden);
  mostrarPokemon(newData);
});
window.onload = function () {
  mostrarPokemon(pokemonList);
};

