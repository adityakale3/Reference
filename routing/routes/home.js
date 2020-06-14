const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    console.log('Will serve localhost:3000/home');
});

router.get('/room', (req,res) => {
    console.log('Will serve localhost:3000/home/room');
});


// Important
module.exports = router;