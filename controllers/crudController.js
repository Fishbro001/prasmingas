const Crud = require('../models/crudModel');

// Create a new trip
exports.createTrip = async (req, res) => {
    try {
        const newTrip = new Crud(req.body);
        await newTrip.save();
        res.status(201).send(newTrip);
    } catch (error) {
        //console.error('Error creating trip:', error);
        res.status(500).send({ error: 'Internal Server Error', message: error.message });
    }
};


exports.searchTrips = async (category, name, startDate, endDate, minPrice, maxPrice) => {
    try {
        const query = {};

        if (category) {
            query.trip_category = new RegExp(category, 'i'); // Case-insensitive search
        }

        if (name) {
            query.trip_name = new RegExp(name, 'i'); // Case-insensitive search
        }

        if (startDate && endDate) {
            query['trips.date'] = {
                $gte: startDate,
                $lte: endDate
            };
        }

        if (minPrice && maxPrice) {
            query['trips.cost'] = {
                $gte: minPrice,
                $lte: maxPrice
            };
        }

        const trips = await Crud.find(query);
        return trips;
    } catch (error) {
        console.error('Error searching for trips:', error);
        throw error;
    }
}



// Get all trips
exports.getAllTrips = async (req, res) => {
    try {
        const trips = await Crud.find({});
        res.status(200).send(trips);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.getAllTripsObj = async (req, res) => {
    try {
        const trips = await Crud.find({});
        return trips;
    } catch (error) {
        res.status(400).send(error);
    }
};
//here!
exports.getCategoryTrips = async (req, res) => {
    try {
        console.log('category');
        console.log(req.params.category);
        const trips = await Crud.find({ trip_category: req.params.category });
        console.log('trips');
        console.log(trips);
        return trips;
    } catch (error) {
        res.status(400).send(error);
    }
};


exports.getAllTripsObj = async (req, res) => {
    try {
        const trips = await Crud.find({});
        return trips;
    } catch (error) {
        res.status(400).send(error);
    }
};
// Get a single trip by ID
exports.getTripById = async (req, res) => {
    try {
        const trip = await Crud.findById(req.params.id);
        if (!trip) {
            return res.status(404).send();
        }
        res.status(200).send(trip);
        return trip;
    } catch (error) {
        res.status(400).send(error);
    }
};

// Doesnt send, but returns trip object
exports.getTrip = async (req, res) => {
    try {
        const trip = await Crud.findById(req.params.id);
        if (!trip) {
            return res.status(404).send();
        }
        return trip;
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update a trip by ID
exports.updateTripById = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['trip_name', 'trip_category', 'trip_transport', 'trip_duration', 'trip_description', 'trip_fotos', 'trip_programme_sdesc', 'trip_programme', 'trip_pickuppoints', 'trip_comment', 'trips', 'isactive'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const trip = await Crud.findById(req.params.id);
        if (!trip) {
            return res.status(404).send();
        }
        updates.forEach(update => trip[update] = req.body[update]);
        await trip.save();
        res.send(trip);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a trip by ID
exports.deleteTripById = async (req, res) => {
    try {
        const trip = await Crud.findByIdAndDelete(req.params.id);
        if (!trip) {
            return res.status(404).send();
        }
        res.send(trip);
    } catch (error) {
        res.status(400).send(error);
    }
};