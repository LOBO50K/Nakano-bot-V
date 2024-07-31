
// Importamos las librerías necesarias
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Función para descargar música
async function descargarMusica(nombreCancion) {
  // Configuración para la petición a la API
  const apiEndpoint = 'https://api.ejemplo.com/buscar';
  const apiKey = 'TU_API_KEY_AQUÍ';
  const params = {
    q: nombreCancion,
    apiKey: apiKey
  };

  try {
    // Realizamos la petición a la API
    const respuesta = await axios.get(apiEndpoint, { params });
    const datosCancion = respuesta.data;

    // Comprobamos si se encontró la canción
    if (datosCancion && datosCancion.urlDescarga) {
      // Descargamos la canción
      const respuestaDescarga = await axios.get(datosCancion.urlDescarga, { responseType: 'stream' });
      const rutaDescarga = path.join(__dirname, `${nombreCancion}.mp3`);

      // Guardamos el archivo
      const writer = fs.createWriteStream(rutaDescarga);
      respuestaDescarga.data.pipe(writer);

      // Esperamos a que termine la descarga
      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      console.log(`La canción ${nombreCancion} se ha descargado correctamente.`);
    } else {
      console.log(`No se encontró la canción ${nombreCancion}.`);
    }
  } catch (error) {
    console.error(`Error al descargar la canción: ${error.message}`);
  }
}

// Ejemplo de uso
descargarMusica('Nombre de la canción');