router.get('/complete', async (req, res) => {
    try {
        // 1. Retrieve the Stripe session to confirm payment
        const stripeSession = await stripe.checkout.sessions.retrieve(req.query.session_id);

        // 2. Get the customer and trip data from your application's session
        if (!req.session.travelObj || !req.session.travellersArr) {
            return res.status(500).send('ERROR: Your session has expired. Please try again.');
        }
        const { travelObj, travellersArr, advance } = req.session;

        // 3. Create the order in your database
        const orderData = {
            tripTypeId: travelObj.parent_tripid,
            tripId: travelObj._id,
            users: travellersArr.map(t => ({
                firstName: t.fname,
                lastName: t.lname,
                birthday: t.birthdate,
                socNumber: t.personcode,
                telNumber: t.tel,
                email: t.email,
                city: t.city,
                cityOfDeparture: t.departureCity,
                placeOnBus: t.seat,
                pricePaid: travelObj.cost - (travelObj.cost / 100 * travelObj.discount),
                isAdvance: advance,
            })),
            userEmail: travellersArr[0].email,
            userPhoneNumber: travellersArr[0].tel,
            cityOfDeparture: travellersArr[0].departureCity,
            // Add any other fields you need
        };
        const newOrder = await orderController.createOrderFromData(orderData);
        console.log('Order created successfully with ID:', newOrder._id);

        // --- Document and Email Logic ---
        
        // 4. Prepare data specifically for the document template
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
        
        // 5. Generate the document with the live data
        const outputPath = await generateDocument(documentData, newOrder._id.toString());
        
        // 6. Update the order record with the path to the generated document
        await orderController.updateOrderDocument(newOrder, outputPath);
        
        // 7. Send the confirmation email with the document attached
        await sendTripTicketEmail(
            travellersArr[0].email,       // Customer's email
            travellersArr[0].fname,       // Customer's first name
            travelObj.trip_name,          // Name of the trip
            travelObj.date,               // Date of the trip
            outputPath                    // Path to the generated document
        );

        // 8. Update trip seat availability
        const taken = travelObj.seatstaken + travellersArr.length;
        let seats = travelObj.seatsoccupied[0] || '';
        const newSeats = travellersArr.map(user => user.seat).join(',');
        if (seats && newSeats) {
            seats += ',' + newSeats;
        } else {
            seats = newSeats;
        }
        await crudController.updateTripSeats(travelObj._id, taken, seats);

        // 9. Clean up session and show success page
        req.session.destroy(); // Clear the session after successful processing
        
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
        console.error('CRITICAL: Error processing completed order:', error);
        // Even if document/email fails, payment was successful. Show a modified success page.
        res.status(500).send('Jūsų mokėjimas buvo sėkmingas, tačiau įvyko klaida generuojant kelionės dokumentus. Susisiekite su mumis.');
    }
});

