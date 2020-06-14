const express = require('express');
const bodyParser = require ("body-parser"); 

// npm install express-validator
const { check, validationResult } = require('express-validator');
const { matchedData , sanitizedBody } = require('express-validator/filter');



app.post('/login',urlencodedParser, [
    // username must be an email
    check('username','Username Should be Email').isEmail(),
    // password must be at least 5 chars long
    check('password','Password must be min 5 Character long').isLength({ min: 5 })
  ], (req,res) => {
    
    const errors = validationResult(req);
    console.log(errors.mapped());
    console.log('Data recived', req.body.username);
    if (!errors.isEmpty()) {
        res.render('login',{title:"Login", message: `Error during Login`, error:errors.mapped()});         
      }else{
        const user = matchedData(req); 
        res.render('welcome',{title:"Welcome " + req.body.username, message: `Welcome ${req.body.username}, your password is ${req.body.password}`,user:user});
      }

});


app.listen(3000, () => {
    console.log("Server up and running");
});