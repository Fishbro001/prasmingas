const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/userModel');
const baseUrl = process.env.BASE_URL;

router.post('/register', async (req, res) => {
    console.log(req.body);
    const { user_name, user_password, user_email } = req.body;
    try {
        const user = new User({ user_name, user_password, user_email });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
});
router.get('/register', async (req, res)=> {
    try {
        res.render('register', {baseUrl});
    
    } catch (error){
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }

})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/register',
    failureFlash: false
}));

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});
module.exports = router;