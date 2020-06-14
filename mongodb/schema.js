const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DBName',  {useNewUrlParser:true,useUnifiedTopology: true});
var conn = mongoose.connection;

var userSchema = new mongoose.Schema({
    name: String,
    email : String,
    etype : String,
    hourlyrate : Number,
    totalHrs : Number
});

var userModel = mongoose.model('Users',userSchema, 'Users');

module.exports = userModel;

// Testing
// DB CON
conn.on('connection', () => {
    console.log('DB Connected');
});
// DB CON
conn.on('disconnection', () => {
    console.log('DB Dis-connected');
});
// DB CON
conn.on('error', console.error.bind(console,'connection error:'));
// DB CON
conn.once('open', () => {
    employee.save((err,res)=> {
        if(err) throw error;
        console.log(res);
        conn.close();
    })
});