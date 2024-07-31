// const conn = new WAConnection();

const waifus = [
  { nombre: 'Asuna', reclamada: false },
  { nombre: 'Rias Gremory', reclamada: false },
  { nombre: 'Hestia', reclamada: false },
  { nombre: 'Maka Albarn', reclamada: false },
  { nombre: 'Yuno Gasai', reclamada: false },
  // Agrega más waifus a la lista!
];

handler.command = ['c']
//conn.reply('message', async message => {
  //if (message.type === 'chat' && message.body.startsWith('!c ')) {
    const waifuNombre = message.body.substring(3).trim();
    const waifu = waifus.find(waifu => waifu.nombre.toLowerCase() === waifuNombre.toLowerCase());

    if (waifu) {
      if (waifu.reclamada) {
        await conn.sendMessage(message.from, `Lo siento, ${waifu.nombre} ya ha sido reclamada.`);
      } else {
        waifu.reclamada = true;
        await conn.sendMessage(message.from, `¡Felicidades! Has reclamado a ${waifu.nombre}.`);
      }
    } else {
      await conn.sendMessage(message.from, `Lo siento, no conozco a ninguna waifu llamada ${waifuNombre}.`);
    }
  }
});

// conn.connect();

// Este código utiliza la biblioteca `baileys` para crear un cliente de WhatsApp y escuchar mensajes entrantes. Cuando se recibe un mensaje que comienza con `!c `, se busca la waifu con el nombre especificado en la lista. Si la waifu existe y no ha sido reclamada, se marca como reclamada y se envía un mensaje de confirmación. Si la waifu ya ha sido reclamada o no existe, se envía un mensaje de error.

// **¿Quieres agregar más waifus a la lista?**