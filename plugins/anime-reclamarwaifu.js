var handler = async (m, { text,  usedPrefix, command }) => {

// Función para reclamar la waifu
function reclamarWaifu(waifuId, usuarioId) {
  // Configura la API de RollWaifu
  const apiRollWaifu = 'https://rollwaifu.com/api/waifus/';
  const token = 'TU_TOKEN_DE_BOT_DE_DISCORD';

  // Crea un objeto con los datos para reclamar la waifu
  const datos = {
    waifuId: waifuId,
    usuarioId: usuarioId,
  };

  // Envía la solicitud para reclamar la waifu
  fetch(`${apiRollWaifu}${waifuId}/claim`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(datos),
  })
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      // Verifica si la waifu se reclamó correctamente
      if (datos.success) {
        m.reply(`¡Waifu reclamada con éxito! ${usuarioId} ahora es dueño de ${datos.waifu.name}`);
      } else {
        m.reply(`Error al reclamar la waifu: ${datos.error}`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Ejemplo de uso
const waifuId = 'Ai Hoshino';
const usuarioId = 'ID_DEL_USUARIO';
reclamarWaifu(waifuId, usuarioId)}

handler.command = ['c', 'reclamar']
handler.help = ['c']
handler.tags = ['anime']
handler.premium = false
export default handler