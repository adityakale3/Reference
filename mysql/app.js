// npm install mysql
var mysql= require('mysql');


var con=mysql.createConnection({
    host: "localhost",
  user: "root",
  password: "",
  database: "employee"

});

con.connect(function(err){
if(err) throw err;
console.log('database connected successfully');
});

// Read

router.get('/',function(req, res, next) {
    var getQuery="select * from `users`";
    con.query(getQuery,function(err,result){   
       if(err) throw err;
       res.render('index', { title: 'Employee Records', records:result,success:'' });    
    });
   });
   
// Create
   router.post('/', function(req, res, next) {
    var name= req.body.uname;
    var email= req.body.email;
    var etype= req.body.emptype;
    var hourlyrate= req.body.hrlyrate;
   var totalHour= req.body.ttlhr;
   var total= parseInt(req.body.hrlyrate) * parseInt(req.body.ttlhr);
 
   var insertQuery='insert into `users` (`name`,`email`,`etype`,`hourlyrate`,`totalhour`,`total`) VALUES (?,?,?,?,?,?)';
  var query=mysql.format(insertQuery,[name,email,etype,hourlyrate,totalHour,total]);
  con.query(query,function(err,response){
      if(err) throw err;
     // console.log(response.insertId);
     var getQuery="select * from `users`";
 con.query(getQuery,function(err,result){
    if(err) throw err;
     res.render('index', { title: 'Employee Records', records:result,success:'Record Inserted Successfully' });
  });
});
});   



