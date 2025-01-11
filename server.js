const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Un client est connecté.');

    socket.on('message', (message) => {
        console.log('Message reçu :', message);

        // Diffuser le message à tous les clients sous forme de texte
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString()); // Conversion explicite en texte
            }
        });
    });

    socket.on('close', () => {
        console.log('Client déconnecté.');
    });
});

console.log('Serveur WebSocket démarré sur le port 8080.');
