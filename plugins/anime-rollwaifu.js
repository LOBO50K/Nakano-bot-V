
const Twilio = require('twilio');

const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = new Twilio(accountSid, authToken);

const waifus = [
  'Asuna (Sword Art Online)',
  'Rias Gremory (High School DxD)',
  'Hestia (Is It Wrong to Try to Pick Up Girls in a Dungeon?)',
  'Maka Albarn (Soul Eater)',
  'Yuno Gasai (Future Diary)',
  // Agrega más waifus a la lista!
];

const rollWaifu = (from, to) => {
  const randomWaifu = waifus[Math.floor(Math.random() * waifus.length)];
  client.messages
   .create({
      body: `You rolled: **${randomWaifu}**!`,
      from: from,
      to: to,
    })
   .then((message) => console.log(`Sent message: ${message.sid}`))
   .done();
};

// Ejemplo de uso:
// rollWaifu('+1234567890', '+9876543210');