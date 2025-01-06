const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/auth');

router.get('/', isLoggedIn, (req, res) => {
    try {
        res.render('dashboard');
    }catch (error){
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }

});

module.exports = router;