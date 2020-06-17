// https://code.tutsplus.com/tutorials/real-time-sports-application-using-nodejs--cms-30594
// npm install socket.io
const express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
 
io.on('connection', function(socket){
    console.log('Client connection received');
});
// socket.emit('event', 'For single self user');
// socket.broadcast.emit('event', 'All except self');
// io.emit('event', 'Emits to all including self');
// socket.id // unique ID of current socket;
// ROOM
// socket.join('roomName');
// socket.broadcast.to('roomName').emit('event', 'All except self');


app.get('/', (req,res) => {
    res.render('index');    
});


http.listen(4000, () => {
console.log('Server Up and Running');
})



