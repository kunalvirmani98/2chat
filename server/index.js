
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log(`a user connected`);

    socket.on('message', ({ sentBy, message }) => {
        console.log(`${sentBy} said ${message}`);
        // io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
});

http.listen(8080, () => console.log("Server is listening on port 8080"));