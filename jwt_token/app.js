// npm install jsonwebtoken
const jwt = require('jsonwebtoken');


var token = jwt.sign({ foo : 'bar' }, 'loginToken');