// npm install express
const express = require('express');
const app = express();

app.use(express.static('./views'));

app.get('/', (req,res) => {
//    res.send('Plain Test');
//    res.render('views/file/path');
//    res.render('views/file/path', {data:can , be:send, like:this});
//    res.sendStatus(200)
//    res.status(200).json();
//    res.status(200).send( {'a': 'b'}  );
//    res.sendFile('Plain Test');
//    res.download() 	    // Prompt a file to be downloaded.
//    res.end() 	        // End the response process.
//    res.json() 	        // Send a JSON response.
//    res.jsonp() 	        // Send a JSON response with JSONP support.
//    res.redirect() 	    // Redirect a request.
//    res.render() 	        // Render a view template.
//    res.send() 	        // Send a response of various types.
//    res.sendFile() 	    // Send a file as an octet stream.
//    res.sendStatus() 	    // Set the response status code and send its string representation as the response body.
});


app.get('/:id', (req,res) => {
        res.send('Your passed ID : ' + req.params.id);
    });

app.listen(3000, () => {
    console.log('Server Up and Running');
});