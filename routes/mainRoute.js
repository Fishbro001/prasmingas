const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

const fetchTripMiddleware = async (req, res, next) => {
    try {
        const trip = await crudController.getTrip(req);
        if (!trip) {
            return res.status(400).send('trip not found bruh');
        }
        req.trip = trip;
        next();
    } catch (err) {
        console.log('error ', err);
        res.status(500).send('Internal Server Error');
    }

};



router.get('/trip/:id', fetchTripMiddleware, (req, res) => {
    res.render('tripDetails', { trip: req.trip });
});

// Route to buy a trip
router.get('/trip/:id/buy1', fetchTripMiddleware, (req, res) => {
   // console.log(req.trip);
    // Use req.trip to access the trip data
    res.render('tripDetailsBuy1', { trip: req.trip });
});
router.get('/trip/:id/buy2', fetchTripMiddleware, (req, res) => {
    //console.log(req.trip);
    console.log(req.session);
    // Use req.trip to access the trip data
    res.render('tripDetailsBuy2', { trip: req.trip,
        ses: req.session
     });
});

router.post('/update-session', (req, res) => {
    const { tripobj, amount } = req.body;
    req.session.travelObj = tripobj;
    req.session.travellersCount = amount;
    res.json({ message: 'Session updated successfully', session: req.session });
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