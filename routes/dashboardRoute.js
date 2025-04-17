const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');
const { isLoggedIn, checkAdmin } = require('../middleware/auth');
const baseUrl = process.env.BASE_URL;

router.get('/', isLoggedIn, (req, res) => {
    try {
        res.render('dashboard', {baseUrl});
    }catch (error){
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }

});
router.get('/createtrip', checkAdmin, (req, res) => {
    try {
        res.render('createtrip', {baseUrl});
    } catch (error){
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }

});

router.get('/admin-dashboard', checkAdmin, (req, res) => {
    res.send('Welcome to the admin dashboard!');
});
router.get('/check-admin-status', (req, res) => {
    if (req.isAuthenticated() && req.user.user_admin) {
        res.json({ isAdmin: true });
    } else {
        res.json({ isAdmin: false });
    }
});


router.get('/edittrip', checkAdmin, async (req, res) => {
    //const baseUrl = process.env.BASE_URL;
    const trips = await crudController.getAllTripsObj(req); // Implement this method in your controller
    res.render('edittrip', { baseUrl, trips });
});


module.exports = router;