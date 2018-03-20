const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    timer.start()
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', timer.ms);
    }, interval);
  });
});

io.on('connection', function(socket){
  socket.on('vote1', function(msg){
    io.emit('vote1', msg);
  });
  socket.on('vote2', function(msg){
    io.emit('vote2', msg);
  });
  socket.on('response1', function(msg){
    io.emit('response1', msg);
  });
  socket.on('response2', function(msg){
    io.emit('response2', msg);
  });
  socket.on('topic', function(msg){
    io.emit('topic', msg);
  });
});
