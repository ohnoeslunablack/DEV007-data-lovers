import data from './data/pokemon/pokemon.js';


const pokemonData = data.pokemon;

function mostrarPokemon(pokemonList) {
  const container = document.getElementById('contenido');
  container.innerHTML = '';

  pokemonList.forEach((pokemon) => {
    const pokemonCardDiv = document.createElement('div');
    pokemonCardDiv.classList.add('pokemonCard'); // Agregar la clase pokemonCard

    // Crea la estructura HTML de la tarjeta de información
    pokemonCardDiv.innerHTML = `
    <div class="card">
        <div class="card-header">
            <img src="${pokemon.img}" alt="">
        </div>
        <div class="card-body">
            <div class="type">
                <span class="pokemonType">Tipo: ${pokemon.type}</span>
                <span class="pokemonNum">Num: ${pokemon.num}</span>
            </div>
            <h3 class="pokemonName">
                ${pokemon.name}
            </h3>
            <p class="pokemonGeneration">
                Generación: ${pokemon.generation.num} (${pokemon.generation.name})
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

//funcion que llama a los pokemones por medio del boton search, nombre

function buscarPokemon() {
  const searchInput = document.querySelector('.searchPokemon');
  const searchTerm = searchInput.value.toLowerCase();

  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  mostrarPokemon(filteredPokemon);
}

// Renderizar la data completa al cargar la página
function renderizarDataCompleta() {
  mostrarPokemon(pokemonData);
}

window.addEventListener('DOMContentLoaded', renderizarDataCompleta);

const searchButton = document.getElementById('button-search');
searchButton.addEventListener('click', buscarPokemon);


//array para llamar tipo de pokemon, imprime en consola

const filterData = (data, condition) => {
  let result = data.pokemon.filter(item => item.type.includes(condition.toLowerCase()));
  console.log(result)
  return result;
};

const seleccionarTipo = document.getElementById("tipo");
seleccionarTipo.addEventListener('change', () =>{
  let type = seleccionarTipo.options[seleccionarTipo.selectedIndex].value;
  console.log(type)
   if(type=="All"){
    mostrarPokemon(pokemonList)
    }else{
      mostrarPokemon(filterData(data, type));
    }

});

//array para llamar generacion de pokemon, imprime en consola

const filterGeneration = (data, condition) => {
  let result = data.pokemon.filter(item => item.generation.includes(condition.toLowerCase()));
  console.log(result)
  return result;
};
const seleccionarGeneracion= document.getElementById("generacion");
seleccionarGeneracion.addEventListener('change', () =>{
  let generation = seleccionarGeneracion.options[seleccionarGeneracion.selectedIndex].value;
  console.log(generation)
   if(generation=="All"){
    mostrarPokemon(pokemonList)
    }else{
      mostrarPokemon(filterGeneration(data, generation));
    }

});