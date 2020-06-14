const userModel = require('./schema');

// Create
app.post('/addUser', urlencodedParser, (req,res) => {
    var addUser = new userModel({
        name : req.body.name,
        email : req.body.email,
        level : req.body.level,
        kills : req.body.kills,
        matches : req.body.matches,
    });   
    addUser.save((err,res1) => {
        if(err) throw err;
        res.send('User Added Successfully');
    });
});


// Read
app.get('/', (req,res) => {
    var findUser = userModel.find({}, (err,data) => {
        if(err) throw err;
        res.render('index', {title : 'Players', datas : data});
    });
});

// Update
app.get('/edit/:id',checkLogin, (req,res) => {
    var userId = req.params.id;
    var edit = userModel.findById({_id:userId})
    edit.exec(function(err,data){
           if(err) throw err;
        res.render('edit', {title : 'Edit Player : '+ data.name, datas : data, success:''});
       }); 
});