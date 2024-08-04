export async function before(z) {
  if (!z.text || !global.prefix.test(z.text)) return;


// Creamos una función que simula un comando inválido
function comandoInvalido() {
  console.log("Error: Comando inválido");
  console.log("Por favor, inténtalo de nuevo");
}

// Llamamos a la función para simular el comando inválido
comandoInvalido();
```


// Creamos una función que simula un comando inválido con un error aleatorio
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

// Llamamos a la función para simular el comando inválido
comandoInvalido();

  }
}