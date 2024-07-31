const { WAConnection } = require('@adiwajshing/baileys');

const conn = new WAConnection();

conn.on('qr', qr => {
  console.log(`Scan the QR code: ${qr}`);
});

conn.on('ready', () => {
  console.log('WhatsApp client is ready!');
});

conn.on('message', async message => {
  if (message.type === 'chat' && message.body === '!rollwaifu') {
    const waifus = [
      'Asuna (Sword Art Online)',
      'Rias Gremory (High School DxD)',
      'Hestia (Is It Wrong to Try to Pick Up Girls in a Dungeon?)',
      'Maka Albarn (Soul Eater)',
      'Yuno Gasai (Future Diary)',
      // Agrega más waifus a la lista!
    ];

    const randomWaifu = waifus[Math.floor(Math.random() * waifus.length)];
    await conn.sendMessage(message.from, `You rolled: **${randomWaifu}**!`);
  }
});

conn.connect();