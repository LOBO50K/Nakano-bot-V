/*
💥 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
✨️ Creado Para : 
• Ai Yaemori - MD
*/

var handler = async (m, { text,  usedPrefix, command }) => {

const waifus = [
  { name: 'Hestia', image: 'https://example.com/hestia.jpg' },
  { name: 'Rem', image: 'https://example.com/rem.jpg' },
  { name: 'Asuna', image: 'https://example.com/asuna.jpg' },
  // Add more waifus to the array
];

const claimedWaifus = {};

function rollWaifu() {
  const randomIndex = Math.floor(Math.random() * waifus.length);
  const rolledWaifu = waifus[randomIndex];
  return rolledWaifu;
}

function claimWaifu(waifuName, userId) {
  if (claimedWaifus[waifuName]) {
    return `Sorry, ${waifuName} is already claimed by ${claimedWaifus[waifuName]}`;
  } else {
    claimedWaifus[waifuName] = userId;
    return `Congratulations, you have claimed ${waifuName}!`;
  }
}

// Example usage:
const rolledWaifu = rollWaifu();
console.log(`You rolled: ${rolledWaifu.name}!`);

const userId = 'YL'; // Replace with the user's ID
const claimResult = claimWaifu(rolledWaifu.name, userId);
console.log(claimResult)}

handler.command = ['rw', 'rollwaifu']
handler.help = ['rw']
handler.tags = ['anime']
handler.premium = false
export default handler