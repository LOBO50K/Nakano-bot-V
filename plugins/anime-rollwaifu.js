// const Discord = require('discord.js');

module.exports = {
  name: 'rollwaifu',
  description: 'Roll a random waifu!',
  execute(message, args) {
    const waifus = [
      'Asuna (Sword Art Online)',
      'Rias Gremory (High School DxD)',
      'Hestia (Is It Wrong to Try to Pick Up Girls in a Dungeon?)',
      'Maka Albarn (Soul Eater)',
      'Yuno Gasai (Future Diary)',
      // Agrega más waifus a la lista!
    ];

    const randomWaifu = waifus[Math.floor(Math.random() * waifus.length)];
    message.channel.send(`You rolled: **${randomWaifu}**!`);
  },
};

// Este código utiliza la biblioteca discord.js para interactuar con el bot de Discord. El comando rollwaifu selecciona aleatoriamente una waifu de la lista y la envía al canal de texto.

// **¿Quieres agregar más waifus a la lista?** 🤔