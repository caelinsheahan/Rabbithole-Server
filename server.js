const express = require('express')
const app = express()
const http = require("http")
const port = process.env.PORT

var io = require('socket.io')()
var Stopwatch = require('timer-stopwatch');
var timer = new Stopwatch(600000)
var cors = require('cors')

app.use(cors())
io.set('origins', '*:*')
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

io.listen(process.env.PORT);
console.log('listening on port2 ', port2);
