const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE);
const {transporter, message} = require('../middleware/mailer');

router.get('/test-email', async (req, res, next) =>{
    try {
        // Send the email
        let info = await transporter.sendMail(message);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }

});

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


// cost-(cost/100*discount)
router.post('/checkout', async (req, res) => {
    console.log(req.body);
    let final_amount = (req.body.priceperuser-(req.body.priceperuser/100*req.body.discount))*100;
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Kelionė' // name of trip?
                    },
                    unit_amount: final_amount
                },
                quantity: req.body.numberofUsers
            },       
        ],
        mode: 'payment',
        success_url: `${process.env.BASE_URL}/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/cancel`
    })
   // console.log(session);
     res.json({url: session.url});
});

router.get('/complete', async (req, res) => {
    const result = Promise.all([
        stripe.checkout.sessions.retrieve(req.query.session_id, { expand: ['payment_intent.payment_method'] }),
        stripe.checkout.sessions.listLineItems(req.query.session_id)
    ])

    console.log(JSON.stringify(await result))

    res.send('Your payment was successful')
})

router.get('/cancel', (req, res) => {
    res.redirect('/')
});




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
    if(req.session.travelObj){
    // Use req.trip to access the trip data
    res.render('tripDetailsBuy2', { trip: req.trip,
        ses: req.session
     });
    }
    else { 
        res.status(400).send('ERROR: No session data found.');
    }
});
router.get('/trip/:id/buy3', fetchTripMiddleware, (req, res) => {
    //console.log(req.trip);
    //let x = JSON.parse(req.session.travelObj.tripobj);
    //console.log(x);
    if(req.session.travellersArr){
    // Use req.trip to access the trip data
    res.render('tripDetailsBuy3', { trip: req.trip,
        ses: req.session
     });
    }
    else {
        res.status(400).send('ERROR: No session data found.');
    }
});

router.get('/trip/:id/buy4', fetchTripMiddleware, (req, res) => {
    //console.log(req.trip);
    //let x = JSON.parse(req.session.travelObj.tripobj);
    //console.log(x);
    console.log(req.session);
    if(req.session.travellersArr){
    // Use req.trip to access the trip data
    res.render('tripDetailsBuy4', { trip: req.trip,
        ses: req.session
     });
    }
    else {
        res.status(400).send('ERROR: No session data found.');
    }
});

router.post('/update-session-tripobj', (req, res) => {
    const tripobj = req.body;
    req.session.travelObj = tripobj;
    res.json({ message: 'Session updated successfully', session: req.session });
  });
  router.post('/update-session-travellersCount', (req, res) => {
    const amount = req.body;
    req.session.travellersCount = amount;
    res.json({ message: 'Session updated successfully', session: req.session });
  });
  router.post('/update-session2', (req, res) => {
    const { travArr } = req.body;
    req.session.travellersArr = travArr;
    res.json({ message: 'Session updated successfully', session: req.session });
  });

router.get('/', async (req, res) => {
    const baseUrl = process.env.BASE_URL
    try {
        const trips = await crudController.getAllTripsObj(req);
        if (!trips) {
            return res.status(404).send('trip not found bruh');
        }
        res.render('index', { trips, baseUrl });
    } catch (error) {
        console.error('Error fetching trip:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/createtrip', async (req, res) => {
    const baseUrl = process.env.BASE_URL;
    res.render('createtrip', {baseUrl});
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