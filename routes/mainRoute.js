const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

router.get('/trip/:id', async (req, res) => {
    try {
        const trip = await crudController.getTrip(req);
        if (!trip) {
            return res.status(404).send('trip not found bruh');
        }
        res.render('tripDetails', { trip });
    } catch (error) {
        console.error('Error fetching trip:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/', async (req, res) => {
    try {
        const trips = await crudController.getAllTripsObj(req);
        if (!trips) {
            return res.status(404).send('trip not found bruh');
        }
        res.render('index', { trips });
    } catch (error) {
        console.error('Error fetching trip:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/category/:category', async (req, res) => {
    try {
        const trips = await crudController.getCategoryTrips(req);
        console.log(trips);
        if (!trips) {
            return res.status(404).send('trip not found bruh');
        }
        res.render('category', { trips });
    } catch (error) {
        console.error('Error fetching trip:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;