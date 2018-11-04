const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);  //já e chamado por tras
var io = socketIO(server);

app.use(express.static(publicPath));

//websocket is a persistent connection
io.on('connection', (socket) => { //register event listener. represent user from socket not all ports
  console.log('Server--> New user connected');

  socket.on('disconnect', () => {
    console.log('Server--> User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});