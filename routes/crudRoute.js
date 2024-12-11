const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

router.post('/trips', crudController.createTrip);
router.get('/trips', crudController.getAllTrips);
router.get('/trips/:id', crudController.getTripById);
router.patch('/trips/:id', crudController.updateTripById);
router.delete('/trips/:id', crudController.deleteTripById);


router.get('/search', crudController.searchTrips);


module.exports = router;
