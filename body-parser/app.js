// npm install body-parser
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Hey');
});


app.post('/',urlencodedParser, (req,res) => {
    console.log('Data on Post : '+ req.body.name);
    res.status(200).send({"Name" : req.body.name});
});

app.listen(3000, () => {
    console.log('Server up and running');
});