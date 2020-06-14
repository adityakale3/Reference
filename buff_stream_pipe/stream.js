const fs = require('fs');

var a = 0;


var myReadStream = fs.createReadStream(__dirname + '/read.txt');
//var myReadStream = fs.createReadStream(__dirname + '/read.txt','utf-8');
myReadStream.on('data', (chunk) => {
    console.log('New Chunk Recieved : ',a++);
    console.log(chunk);
});