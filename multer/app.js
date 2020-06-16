// npm install multer
const multer = require('multer');



// MULTER CODE
var storage = multer.diskStorage({
    destination : "./public/uploads",
    filename : (req,file,cb) => {
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({
    storage:storage
}).single('file');


// Include Middleware
app.post('/addUser', urlencodedParser,upload,checkLogin, (req,res) => {
    var addUser = new userModel({
        profile : req.file.filename        
    });   
});