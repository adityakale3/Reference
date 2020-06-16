// npm install ejs
const express = require('express');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(express.static('./views'));
app.set('view engine','ejs');
app.set('views','./views');



app.get('/', (req,res) => {
    res.render('index',{title:"EJS Doc", message:"Paragraph of new EJS"});
});