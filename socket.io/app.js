// https://code.tutsplus.com/tutorials/real-time-sports-application-using-nodejs--cms-30594
// npm install socket.io
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
 
app.get('/', (req,res) => {
// Check Connection
    io.on('connection', function(socket){
        console.log('Client connection received');
    });

// Send Recieve Socket
    io.on('connection', function(socket){
        console.log('Client connection received');
         
        socket.emit('sendToClient', { hello: 'world' });
         
        socket.on('receivedFromClient', function (data) {
            console.log(data);
        });
    });



});


