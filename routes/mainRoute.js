const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');
const orderController = require('../controllers/orderController');
const orderRoute = require('../routes/orderRoute');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE);
const baseUrl = process.env.BASE_URL;
const generateDocument = require('../middleware/docx.js');
const { sendTripTicketEmail } = require('../middleware/ticketService.js');

let now = new Date();

router.get('/testthings', async (req, res, next) => {
    try {
        const outputPath = await generateDocument();
        res.send(`Document generated at: ${outputPath}`);
    } catch (error) {
        console.error('Error generating document:', error);
        res.status(500).send('Error generating document');
    }
});


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
                pricePaid: travelObj.cost - (travelObj.cost / 100 * travelObj.discount),
                isAdvance: advance,
                extras: null
            })),
            userEmail: travellersArr[0].email,
            userPhoneNumber: travellersArr[0].tel,
            userAcc: null,
            extras: null,
            cityOfDeparture: travellersArr[0].departureCity
        };

        // console.log('Order:');
        // console.table(orderData);

        // Create the order
        const newOrder = await orderController.createOrderFromData(orderData);
        //         const testdata = {
        //     date: '2025-03-04',
        //     orderNumber: '123456',
        //     mainNumber: '37061436986',
        //     mainEmail: 'asd@gmail.com',
        //     mainAddress:'Kaunas, kauno g. 5',
        //     tripName: 'Tripas vienas',
        //     tripDate: '2025-01-01',
        //     tripDuration: '3 dienos',
        //     numberofCust: '3 žmonės',
        //     totalPrice: '360',
        //     users: [
        //         {   name:'pijus', 
        //             birthdate:'1997-07-05',
        //             phoneNumber:'37061436986',
        //             pickupPlace:'Vienozinskis',
        //             occupiedSeat:'B2',
        //             price:'80'
        //         },
        //         {   name:'pijus2', 
        //             birthdate:'1997-07-05',
        //             phoneNumber:'37061436986',
        //             pickupPlace:'Vienozinskis',
        //             occupiedSeat:'B3',
        //             price:'360'
        //         },
        //         {   name:'pijus3', 
        //             birthdate:'1997-07-05',
        //             phoneNumber:'37061436986',
        //             pickupPlace:'Vienozinskis',
        //             occupiedSeat:'B4',
        //             price:'200'
        //         },
        //         {   name:'pijus4', 
        //             birthdate:'1997-07-05',
        //             phoneNumber:'37061436986',
        //             pickupPlace:'Vienozinskis',
        //             occupiedSeat:'C1',
        //             price:'150'
        //         },
                
        //     ]
        // }

            const documentData = {
                date: new Date().toLocaleDateString('lt-LT'),
                orderNumber: newOrder._id.toString(), // Use the unique order ID
                mainNumber: travellersArr[0].tel,
                mainEmail: travellersArr[0].email,
                mainAddress: travellersArr[0].city,
                tripName: travelObj.trip_name,
                tripDate: new Date(travelObj.date).toLocaleDateString('lt-LT'),
                tripDuration: 'N/A', // You can get this from travelObj if available
                numberofCust: travellersArr.length,
                totalPrice: (orderData.users[0].pricePaid * travellersArr.length).toFixed(2),
                users: travellersArr.map(t => ({
                    name: `${t.fname} ${t.lname}`,
                    birthdate: new Date(t.birthdate).toLocaleDateString('lt-LT'),
                    phoneNumber: t.tel,
                    pickupPlace: t.departureCity,
                    occupiedSeat: t.seat,
                    price: orderData.users[0].pricePaid.toFixed(2)
                }))
        };
        const outputPath = await generateDocument(documentData, newOrder._id.toString());

        await orderController.updateOrderDocument(newOrder, outputPath)
        

        await sendTripTicketEmail(
            travellersArr[0].email,       // Customer's email
            travellersArr[0].fname,       // Customer's first name
            travelObj.trip_name,          // Name of the trip
            travelObj.date,               // Date of the trip
            outputPath                    // Path to the generated document
        );


        // Update trip details
        const taken = Number(travelObj.seatstaken) + travellersArr.length;
        // let seats = travelObj.seatsoccupied[0];

        // travellersArr.forEach(user => {
        //     seats = seats.concat(', ' + user.seat);
        // });

        let seats = travelObj.seatsoccupied[0] || '';
        const newSeats = travellersArr.map(user => user.seat).join(',');
        
        // Also a good idea to ensure seats isn't an array with an empty string
        if (seats && newSeats) {
            seats += ',' + newSeats;
        } else {
            seats = newSeats;
        }

        await crudController.updateTripSeats(travelObj._id, taken, seats);
        // console.table(newOrder);

        // Send a success response
            res.send(`
                        <!DOCTYPE html>
                        <html>
                        <head><title>Mokėjimas sėkmingas</title></head>
                        <body>
                            <h1>Apmokėjimas gautas!</h1>
                            <p>Jūsų kelionės patvirtinimas ir sutartis išsiųsta Jums el. paštu. Netrukus būsite nukreipti į pagrindinį puslapį.</p>
                            <script>
                                setTimeout(() => { window.location.href = '/'; }, 5000);
                            </script>
                        </body>
                        </html>
            `);
    } catch (error) {
        console.error('Error processing order:', error);
        res.status(500).send('Error processing order');
    }
});
router.get('')


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