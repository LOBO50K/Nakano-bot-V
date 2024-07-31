/*
💥 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
✨️ Creado Para : 
• Ai Yaemori - MD
*/

//aun no funciona correctamente.


// Creamos un arreglo de Pokémon disponibles
let pokemonsDisponibles = [
  { nombre: "Pikachu", tipo: "Eléctrico" },
  { nombre: "Charizard", tipo: "Fuego/Volador" },
  { nombre: "Blastoise", tipo: "Agua" },
  { nombre: "Venusaur", tipo: "Planta/Veneno" },
  { nombre: "Dragonite", tipo: "Dragón/Volador" }
];

// Creamos un objeto para almacenar los Pokémon reclamados
let pokemonsReclamados = {};

// Función para reclamar un Pokémon aleatorio
function reclamarPokemon() {
  // Seleccionamos un Pokémon aleatorio del arreglo de Pokémon disponibles
  let pokemonAleatorio = pokemonsDisponibles[Math.floor(Math.random() * pokemonsDisponibles.length)];

  // Verificamos si el Pokémon ya ha sido reclamado
  if (pokemonsReclamados[pokemonAleatorio.nombre]) {
    m.reply(`El Pokémon ${pokemonAleatorio.nombre} ya ha sido reclamado.`);
  } else {
    // Agregamos el Pokémon a la lista de Pokémon reclamados
    pokemonsReclamados[pokemonAleatorio.nombre] = pokemonAleatorio.tipo;
    m.reply(`Has reclamado a ${pokemonAleatorio.nombre} de tipo ${pokemonAleatorio.tipo}.`);
  }
}

// Llamamos a la función para reclamar un Pokémon
reclamarPokemon();

// Función para mostrar los Pokémon reclamados
function mostrarPokemonsReclamados() {
  m.reply("Pokémon reclamados:");
  for (let pokemon in pokemonsReclamados) {
    m.reply(`${pokemon} - ${pokemonsReclamados[pokemon]}`);
  }
}

// Llamamos a la función para mostrar los Pokémon reclamados
mostrarPokemonsReclamados()}

handler.command = ['rollpokemon', 'rp']
handler.help = ['rp']
handler.tags = ['anime']
handler.premium = false
export default handler