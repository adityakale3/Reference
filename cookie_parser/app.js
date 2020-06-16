// npm install cookie-parser

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', function(req, res){
    res.cookie('name', 'express').send('cookie set'); //Sets name = express
 });

 // res.cookie(name, 'value', {expire: 360000 + Date.now()}); 
 // Check Cookie at server console.log('Cookies: ', req.cookies);
 // Check cookie at browser : console.log(document.cookie);