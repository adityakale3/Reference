// npm install express
const express = require('express');
const app = express();

app.get('/', (req,res) => {
//    res.send('Plain Test');
//    res.render('views/file/path');
//    res.render('views/file/path', {data:can , be:send, like:this});
//    res.sendStatus(200)
//    res.status(200).json();
//    res.status(200).send( {'a': 'b'}  );
//    res.sendFile('Plain Test');
});


app.get('/:id', (req,res) => {
        res.send('Your passed ID : ' + req.params.id);
    });

app.listen(3000, () => {
    console.log('Server Up and Running');
});