export async function before(z) {


// Creamos una función que simula un comando inválido
function comandoInvalido() {
  console.log("Error: Comando inválido");
  console.log("Por favor, inténtalo de nuevo");
}

function comandoInvalido() {
  const errores = [
    "Error: Comando inválido",
    "Error: No se encontró el comando",
    "Error: El comando no está disponible en este momento",
    "Error: El comando no es válido en este contexto"
  ];
  const errorAleatorio = errores[Math.floor(Math.random() * errores.length)];
  console.log(errorAleatorio);
}
}