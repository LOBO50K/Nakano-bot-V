// const express = require('express')
const os = require('os')
const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')
const CFonts = require('cfonts')
const chalk = require('chalk')

const app = express()
const port = 3009
function displayHeader() {

CFonts.say('Yaemori\Bot-MD', {
font: 'simple',
align: 'center',
colors: ['green'],
background: 'transparent',
letterSpacing: '0'
})
CFonts.say('Developed By: OfcDiego', {
font: 'console',
align: 'center',
colors: ['white'],
background: 'transparent',
letterSpacing: '0'
})
console.log(chalk.white.bold(`
- 📱 Plataforma: ${os.platform()}
- 🏛️ Arquitectura: ${os.arch()}
- 💻 Memoria total: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
- 🚀 Memoria: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
`))
}

displayHeader()
console.clear()
app.get('/', (req, res) => {
res.setHeader('Content-Type', 'application/json')
const data = {
status: 'true',
message: `Ai Yaemori ahora esta corriendo`,
author: 'OfcDiego'
}

const result = {
response: data
}
res.send(JSON.stringify(result, null, 2))
})

app.listen(port, () => {
console.log(`El servidor se está ejecutando en el puerto ${port}`)
})

let isRunning = false

function start(file) {
if (isRunning) return
isRunning = true

const args = [path.join(__dirname, file), ...process.argv.slice(2)]
const p = spawn(process.argv[0], args, {
stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
})

p.on('message', (data) => {
console.log(`[ Ai Yaemori ]${data}`);
switch (data) {
case 'reset':
p.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break
}
})
p.on('exit', (code) => {
isRunning = false;
console.error(`❌ El sistema del bot se detuvo con código: ${code}`)

if (code === 0) return

fs.watchFile(args[0], () => {
fs.unwatchFile(args[0])
start('mini.js')
})
})

p.on('error', (err) => {
console.error('\x1b[31m%s\x1b[0m', `Error: ${err}`)
p.kill()
isRunning = false
start('mini.js')
})

const pluginsFolder = path.join(__dirname, 'plugins');
fs.readdir(pluginsFolder, (err, files) => {
if (err) {
console.error(`Error al leer la carpeta plugins: ${err}`)
return
}
displayHeader()
})

setInterval(() => {}, 1000)
}

start('mini.js')

process.on('unhandledRejection', () => {
console.error('\x1b[31m%s\x1b[0m', 'Unhandled promise rejection. Script will restart...')
start('mini.js')
})

process.on('exit', (code) => {
console.error(`Salió con código: ${code}`)
console.error('El index se reiniciará...')
start('mini.js')
})

/*import { join, dirname } from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import cfonts from 'cfonts';
import { createInterface } from 'readline';
import yargs from 'yargs';
import chalk from 'chalk';
console.log('\n✰ Iniciando Yaemori ✰');
const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const { name, description, author, version } = require(join(__dirname, './package.json'));
const { say } = cfonts;
const rl = createInterface(process.stdin, process.stdout);
say('Ai Yaemori', {
font: 'block',
align: 'center',
colors: ['white']
});
say(`Multi Device`, {
font: 'chrome',
align: 'center',
colors: ['red']
});
say(`Developed By • OfcDiego`, {
font: 'console',
align: 'center',
colors: ['yellow']
});
var isRunning = false;
function start(file) {
if (isRunning) return;
isRunning = true;
let args = [join(__dirname, file), ...process.argv.slice(2)];
say([process.argv[0], ...args].join(' '), {
font: 'console',
align: 'center',
colors: ['green']
});
setupMaster({
exec: args[0],
args: args.slice(1),
});
let p = fork();
p.on('message', data => {
switch (data) {
case 'reset':
p.process.kill();
isRunning = false;
start.apply(this, arguments);
break;
case 'uptime':
p.send(process.uptime());
break;
}
});
p.on('exit', (_, code) => {
isRunning = false;
console.error('🚩 Error:\n', code);
process.exit();
if (code === 0) return;
watchFile(args[0], () => {
unwatchFile(args[0]);
start(file);
});
});
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim());
});
}
process.on('warning', (warning) => {
if (warning.name === 'MaxListenersExceededWarning') {
console.warn('🚩 Se excedió el límite de Listeners en:');
console.warn(warning.stack);
}
});
start('mini.js');*/