const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  socket.on('submitted', function(msg){
  io.emit('submitted', msg);
});
socket.on('voted', function(msg){
io.emit('voted', msg);
});
  socket.on('vote1', function(msg){
  io.emit('vote1', msg);
});
socket.on('vote2', function(msg){
  io.emit('vote2', msg);
});
socket.on('vote3', function(msg){
  io.emit('vote3', msg);
});
socket.on('vote4', function(msg){
  io.emit('vote4', msg);
});
socket.on('vote5', function(msg){
  io.emit('vote5', msg);
});
socket.on('response1', function(msg){
  io.emit('response1', msg);
});
socket.on('response2', function(msg){
  io.emit('response2', msg);
});
socket.on('response3', function(msg){
  io.emit('response3', msg);
});
socket.on('response4', function(msg){
  io.emit('response4', msg);
});
socket.on('response5', function(msg){
  io.emit('response5', msg);
});
socket.on('topic', function(msg){
  io.emit('topic', msg);
});
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
