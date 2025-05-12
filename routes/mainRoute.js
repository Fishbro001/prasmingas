const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');
const orderController = require('../controllers/orderController');
const orderRoute = require('../routes/orderRoute');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE);
const {transporter, message} = require('../middleware/mailer');
const baseUrl = process.env.BASE_URL;
let now = new Date();


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
        const trip = await crudController.getTripFilteredDate(req);
        // console.log('sup',trip);
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


// router.get('/edittrip', async (req, res) => {
//     //const baseUrl = process.env.BASE_URL;
//     const trips = await crudController.getAllTripsObj(req); // Implement this method in your controller
//     res.render('edittrip', { baseUrl, trips });
// });


// cost-(cost/100*discount)
router.post('/checkoutvold', async (req, res) => {
    // console.log('req body: ', req.body);
    //console.log('session url: ', session.url);
    if(req.body.advance){
        let final_amount = ((req.body.priceperuser-(req.body.priceperuser/100*req.body.discount))*100)*.2;
    
    
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: 'Avansas Kelionė' // name of trip?
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

    }
    else {
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
    }
});


router.post('/checkout', async (req, res) => {
    try {
        const { travelObj, travellersCount, travellersArr } = req.session;
        if(!travelObj || !travellersArr) {
            res.status(500).send('Error creating checkout session');
        }
        const trip_id = travelObj._id;
        const trip_name = travelObj.trip_name;
        const parent_id = travelObj.parent_tripid;
        const totalamount = travelObj.cost;
        const numberofUsers = travellersCount.amount;
        const priceperuser = travelObj.cost;
        const discount = travelObj.discount;


        // console.log('testbodyses.tripid:  ',trip_id);
        // console.log('testbodyses.parent_id:  ',parent_id);
        console.log('reqbodyadvance:  ', req.body.advance);
        // Determine if the payment is an advance payment
        const isAdvancePayment = req.body.advance;

        let final_amount;
        if (isAdvancePayment) {
            req.session.advance = true;
            // Calculate the final amount for advance payment (20% of the total amount)
            final_amount = ((priceperuser - (priceperuser / 100 * discount)) * 100) * 0.2;
        } else {
            req.session.advance = false;
            // Calculate the final amount for full payment
            final_amount = (priceperuser - (priceperuser / 100 * discount)) * 100;
            //req.session.final_amount;//
            //++++++++++++++++++++++++++++++++++++++++++++++!!!!!!!!!!+++++++++++++++++++++
        }//y

        // Create the Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: isAdvancePayment ? `Avansas Kelionei ${trip_name}` : `Kelionė ${trip_name}` // name of trip
                        },
                        unit_amount: final_amount
                    },
                    quantity: numberofUsers
                }
            ],
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/complete?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BASE_URL}/cancel`
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send('Error creating checkout session');
    }
});




router.get('/complete', async (req, res) => {
    try {
        // Retrieve session data and line items from Stripe
        const [session, lineItems] = await Promise.all([
            stripe.checkout.sessions.retrieve(req.query.session_id, { expand: ['payment_intent.payment_method'] }),
            stripe.checkout.sessions.listLineItems(req.query.session_id)
        ]);

        console.log(JSON.stringify({ session, lineItems }));

        // Check if session data is available
        if (!req.session.travelObj || !req.session.travellersArr) {
            return res.status(500).send('ERROR: Session data missing');
        }

        const { travelObj, travellersArr, advance } = req.session;

        // Prepare order data
        const orderData = {
            tripTypeId: travelObj.parent_tripid,
            tripId: travelObj._id,
            users: travellersArr.map(traveller => ({
                firstName: traveller.fname,
                lastName: traveller.lname,
                birthday: traveller.birthdate,
                socNumber: traveller.personcode,
                telNumber: traveller.tel,
                email: traveller.email,
                city: traveller.city,
                cityOfDeparture: traveller.departureCity,
                placeOnBus: traveller.seat,
                pricePaid: travelObj.cost,
                isAdvance: advance,
                extras: null
            })),
            userEmail: travellersArr[0].email,
            userPhoneNumber: travellersArr[0].tel,
            userAcc: null,
            extras: null,
            cityOfDeparture: travellersArr[0].departureCity
        };

        console.log('Order:');
        console.table(orderData);

        // Create the order
        const newOrder = await orderController.createOrderFromData(orderData);

        // Update trip details
        const taken = travelObj.seatstaken + travellersArr.length;
        let seats = travelObj.seatsoccupied[0];

        travellersArr.forEach(user => {
            seats = seats.concat(', ' + user.seat);
        });

        console.log('seats after:', seats);

        await crudController.updateTripSeats(travelObj._id, taken, seats);
        console.table(newOrder);

        // Send a success response
        res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Mokėjimas buvo sėkmingas</title>
        </head>
        <body>
            <h1>Your payment was successful</h1>
            <script>
                setTimeout(function() {
                    window.location.href = '/order-complete';
                }, 3000); // Redirect after 3 seconds
            </script>
        </body>
        </html>
    `);
    } catch (error) {
        console.error('Error processing order:', error);
        res.status(500).send('Error processing order');
    }
});



// router.get('/complete', async (req, res) => {


//     const result = Promise.all([
//         stripe.checkout.sessions.retrieve(req.query.session_id, { expand: ['payment_intent.payment_method'] }),
//         stripe.checkout.sessions.listLineItems(req.query.session_id)
//     ])

//     console.log(JSON.stringify(await result))

//     res.send(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Mokėjimas buvo sėkmingas</title>
//         </head>
//         <body>
//             <h1>Your payment was successful</h1>
//             <script>
//                 setTimeout(function() {
//                     window.location.href = '/order-complete';
//                 }, 3000); // Redirect after 3 seconds
//             </script>
//         </body>
//         </html>
//     `);
// })
// router.get('/order-complete', async (req, res) => {
//     if(!req.session.travelObj || !req.session.travelObj){
//         res.status(500).send('ERROR');
//     }

//     try {
//         const { travelObj, advance, travellersArr }= req.session;
//         const orderData = {
//             tripTypeId: travelObj.parent_tripid, // Assuming parent_tripid is the tripTypeId
//             tripId: travelObj._id, // Assuming _id is the tripId
//             users: travellersArr.map(traveller => ({
//                 firstName: traveller.fname,
//                 lastName: traveller.lname,
//                 birthday: traveller.birthdate,
//                 socNumber: traveller.personcode,
//                 telNumber: traveller.tel,
//                 email: traveller.email,
//                 city: traveller.city,
//                 cityOfDeparture: traveller.departureCity,
//                 placeOnBus: traveller.seat,
//                 pricePaid: travelObj.cost,
//                 isAdvance:  advance,
//                 extras: null // Add extras if applicable
//             })),
//             userEmail: travellersArr[0].email, // Assuming the first traveller's email
//             userPhoneNumber: travellersArr[0].tel, // Assuming the first traveller's phone number
//             userAcc: null, // TODO CHANGE THIS LATER
//             extras: null, // TODO CHANGE THIS LATER
//             cityOfDeparture: travellersArr[0].departureCity // TODO CHANGE THIS LATER
//         };

//         // Create the order using the controller function
//         console.log('Order: ');
//         console.table(orderData);
//         //let tempobj = {body: orderData};
//         const newOrder = await orderController.createOrderFromData(orderData);
//         const taken = travelObj.seatstaken + travellersArr.length;
//         let seats = travelObj.seatsoccupied[0];
//         console.log('seats before:', seats);

//         travellersArr.forEach( user => {
//            seats = seats.concat(', ' + user.seat);
//         });
        
//         console.log('seats after:', seats);
        
//         const updateSeats = crudController.updateTripSeats(travelObj._id, taken, seats);
//         console.table(newOrder);
//         // Send a success response with the created order
//         res.status(201).json(newOrder);
//     } catch (error) {
//         // Handle errors and send an error response
//         res.status(400).json({ error: error.message });
//     }
//     });



router.get('/cancel', (req, res) => {
    res.redirect('/')
});




router.get('/trip/:id', fetchTripMiddleware, (req, res) => {
    res.render('tripDetails', { 
        trip: req.trip, 
        baseUrl,
        now 
    });
});

// Route to buy a trip
router.get('/trip/:id/buy1', fetchTripMiddleware, (req, res) => {
    now = new Date();
    res.render('tripDetailsBuy1', { 
        trip: req.trip, 
        baseUrl, 
        now 
    });
});
router.get('/trip/:id/buy2', fetchTripMiddleware, (req, res) => {
    now = new Date();
    // console.log(req.session);
    if(req.session.travelObj){
    // Use req.trip to access the trip data
    res.render('tripDetailsBuy2', { 
        trip: req.trip,
        ses: req.session,
        baseUrl,
        now
     });
    }
    else { 
        res.status(400).send('ERROR: No session data found.');
    }
});
router.get('/trip/:id/buy3', fetchTripMiddleware, (req, res) => {
    now = new Date();
    if(req.session.travellersArr){
    // Use req.trip to access the trip data
    res.render('tripDetailsBuy3', { 
        trip: req.trip,
        ses: req.session,
        baseUrl,
        now
     });
    }
    else {
        res.status(400).send('ERROR: No session data found.');
    }
});

router.get('/trip/:id/buy4', fetchTripMiddleware, (req, res) => {
    now = new Date();
    console.log('SeSsIoN: ',  req.session);
    if(req.session.travellersArr){
    // Use req.trip to access the trip data
    res.render('tripDetailsBuy4', { 
            trip: req.trip, 
            ses: req.session, 
            baseUrl, 
            now
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
    now = new Date();
    try {
        const trips = await crudController.getAllTripsObjFilterDate(req);
        if (!trips) {
            return res.status(404).send('trip not found bruh');
        }
        res.render('index', { 
            trips, 
            baseUrl, 
            now
        });
    } catch (error) {
        console.error('Error fetching trip:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/category/:category', async (req, res) => {
    try {
        now = new Date();
        const trips = await crudController.getCategoryTrips(req);
        // console.log(trips);
        if (!trips) {
            return res.status(404).send('trip not found bruh');
        }
        res.render('category', { trips, baseUrl, now });
    } catch (error) {
        console.error('Error fetching trip:', error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router;