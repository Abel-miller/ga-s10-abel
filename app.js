const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        mensaje: 'Modulo Agendamiento - Telemedicina',
        pod: os.hostname(),
        timestamp: new Date().toISOString()
    }));
});

server.listen(3000, () => console.log('Escuchando en puerto 3000'));