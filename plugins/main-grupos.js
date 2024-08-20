let handler  = async (m, { conn, usedPrefix, command }) => {

let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;

function adivinarNumero() {

let numeroIngresado = prompt("Adivina el número (entre 1 y 100):");
  
numeroIngresado = parseInt(numeroIngresado);
  
intentos++;
  
if (numeroIngresado === numeroSecreto) {
alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
} else if (numeroIngresado < numeroSecreto) {
alert("El número es mayor. Intenta de nuevo.");
} else {
alert("El número es menor. Intenta de nuevo.");
}}

adivinarNumero();

}
handler.help = ['adivinarnum']
handler.tags = ['fun']
handler.command = ['adivinarnum', 'adivinar', 'numadivinar']
export default handler