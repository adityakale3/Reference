// npm install express-validator

const { body, validationResult,check } = require('express-validator');
const { urlencoded } = require('body-parser');


app.post('/',urlencodedParser [
    check('username', 'UserName Should be email ID').isEmail().withMessage('must be at least 5 chars long'),
    check(req.body.password).isLength({min : 5}).withMessage('must be at least 5 chars long')
    .matches(/\d/).withMessage('must contain a number')
    ],
    (req,res) => {
        const errors = validationResult(req);
        console.log(errors.mapped());
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        // if No errors, do code
    });

// SAMPLE ERROR
    // {
    //     "errors": [{
    //       "location": "body",
    //       "msg": "Invalid value",
    //       "param": "username"
    //     }]
    //   }

    // .isEmpty()
    // .trim()


    