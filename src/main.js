import data from './data/pokemon/pokemon.js';

console.log(data);

const pokemon = data.pokemon;

function mostrarPokemon (){
    const container = document.getElementById('contenido')

    pokemon.forEach(i =>{
        container.innerHTML += `<div class= datosPokemones>
                           <p>Name: ${i.name}</p>
                           <p>Num: ${i.num}</p>
                           <p>Generation: ${i.generation}</p>
                           <p>Type: ${i.type}</p>
                           </div>` 
    })
}

const botonLlamarPokemones = document.getElementById('button-search')