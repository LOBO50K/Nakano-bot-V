//Codígo creado por David Chian wa.me/5351524614

import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
    
const completadoImage = './src/completado.jpg';

const obtenerDatos = () => {
    try {
        if (fs.existsSync('data.json')) {
            return JSON.parse(fs.readFileSync('data.json', 'utf-8'));
        } else {
            return { usuarios: {}, personajesReservados: [] };
        }
    } catch (error) {
        console.error('Error al leer data.json:', error);
        return { usuarios: {}, personajesReservados: [] };
    }
};

const guardarDatos = (data) => {
    try {
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error al escribir en data.json:', error);
    }
};

const reservarPersonaje = (userId, personaje) => {
    let data = obtenerDatos();
    data.personajesReservados.push({ userId, ...personaje });
    guardarDatos(data);
};

const obtenerPersonajes = () => {
    try {
        return JSON.parse(fs.readFileSync('./src/JSON/characters.json', 'utf-8'));
    } catch (error) {
        console.error('Error al leer characters.json:', error);
        return [];
    }
};

let cooldowns = {};

let handler = async (m, { conn }) => {
    try {
        let userId = m.sender;
        let now = new Date().getTime();
        let cooldown = 10 * 60 * 1000; // 10 minutos
        let lastUsed = cooldowns[userId] || 0;

        let timePassed = now - lastUsed;
        

        if (timePassed < cooldown) {
            let remainingTime = cooldown - timePassed;
            let remainingMinutes = Math.floor(remainingTime / (1000 * 60));
            let remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            let message = `¡Espera un poco más para poder usar este comando!\n\n*Tiempo restante: ${remainingMinutes} Minutos y ${remainingSeconds} Segundos.*`;
            await conn.sendMessage(m.chat, { text: message }); 
            return;
        }
        const verifi = () => {
    try {
        const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
        if (packageJson.name !== 'YaemoriBot-MD') return false;
        if (packageJson.repository.url !== 'git+https://github.com/OfcDiego/YaemoriBot-MD.git') return false;
        if (SECRET_KEY !== '38firllSk43U4k') return false;
        return true;       
    } catch (error) {
        console.error('Error al leer package.json:', error);
        return false;
    }
};
if (!verifi()) {
        await conn.reply(m.chat, '🚩 Este comando solo está disponible para AI Yaemori.\n 🌟 https://github.com/OfcDiego/YaemoriBot-MD', m, rcanal)
        return
    }
        let data = obtenerDatos()
        let images = obtenerPersonajes()

        let availableImages = images.filter(image => !data.personajesReservados.some(p => p.name === image.name));
        if (availableImages.length === 0) {
            await conn.sendMessage(m.chat, { image: { url: completadoImage }, caption: 'Felicidades, todos los personajes han sido obtenidos. ¡Pronto habrá más waifus para recolectar!', m, rcanal });
            return;
        }

        const randomImage = availableImages[Math.floor(Math.random() * availableImages.length)];
        const characterId = uuidv4();

        const str = `╭─────┈ ♡ ┈───────
│╽𝐅꯭.𝐄꯭.𝐋꯭.𝐈꯭.𝐂꯭.𝐈.꯭𝐃꯭.𝐀꯭.𝐃꯭.𝐄꯭.𝐒╽
┆ 𝑁𝑜𝑚𝑏𝑟𝑒 𝑑𝑒𝑙 𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑗𝑒:
⧁ *${randomImage.name}!*
┆𝑆𝑢 𝑣𝑎𝑙𝑜𝑟 𝑒𝑠:
│ ${randomImage.value} 𝑊𝐹𝑐𝑜𝑖𝑛𝑠!
╰─────┈ ◇ ┈───────
<id:${characterId}>`;

        await conn.sendMessage(m.chat, { image: { url: randomImage.url }, caption: str, mimetype: 'image/jpeg', m, rcanal});

        reservarPersonaje(userId, { ...randomImage, id: characterId });

        cooldowns[userId] = now;

        console.log(`Cooldown actualizado para ${userId}: ${cooldowns[userId]}`);
    } catch (error) {
        console.error('Error en el handler:', error);
        await conn.sendMessage(m.chat, { text: 'Ocurrió un error al procesar tu solicitud. Intenta de nuevo más tarde.' });
    }
}

handler.help = ['roll'];
handler.tags = ['anime'];
handler.command = ['roll','rw'];
handler.register = true;

export default handler;
