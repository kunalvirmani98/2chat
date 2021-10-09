
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log(`a user connected`);

    socket.on('message', (messageObj) => {
        //console.log(`${sentBy} said ${message}`);
        io.emit('message', messageObj);
    });
});

http.listen(8080, () => console.log("Server is listening on port 8080"));