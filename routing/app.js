const express = require('express');
const home = require('./routes/home.js');

const app = express();

app.use('/home', home);

app.listen(3000, () => {
    console.log('Server Up and Running');
})