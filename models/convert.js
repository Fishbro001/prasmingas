const mongoose = require('mongoose');
const Crud = require('../models/crudModel'); // Adjust the path to your model

async function convertDates() {
    try {
        const trips = await Crud.find({});

        for (const trip of trips) {
            for (const tripItem of trip.trips) {
                const [year, month, day] = tripItem.date.split('.').map(Number);
                tripItem.date = new Date(year, month - 1, day); // Months are 0-indexed in JavaScript
            }
            await trip.save();
        }

        console.log('Dates converted successfully');
    } catch (error) {
        console.error('Error converting dates:', error);
    }
}

module.exports = convertDates; 