const mongoose = require('mongoose');

//*---Parts of Schema
const daySchema = new mongoose.Schema({
    day_title: { type: String }, // Title of the day
    day_desc: { type: String }, // Description of the day's activities
    day_media: { type: [String], default: [] }, // Array of media file paths
});

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    author: { type: String, required: true },
});

const tripsSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    discount: { type: String, required: true },
    cost: { type: String, required: true },
    isguaranteed: { type: Boolean, default: false },
    seatstotal: { type: String, required: true },
    seatstaken: { type: String, required: true },
    seatsoccupied: { type: [String], default: [] },
});
//*---End

//Main Schema
const crudSchema = new mongoose.Schema({
    trip_name: { type: String, required: true },
    trip_category: { type: String, required: true },
    trip_transport: { type: String, required: true },
    trip_duration: { type: String, required: true },
    trip_description: { type: String },
    trip_fotos: [{ type: String }],
    trip_programme_sdesc: { type: String },
    trip_programme: { type: [daySchema], default: [] },
    trip_pickuppoints: { type: [String], default: [] },
    trip_comment: { type: [commentSchema], default: [] },
    trips: { type: [tripsSchema], default: [] },
    isactive: { type: Boolean, default: true },
}, { collection: 'prasmingas' });

module.exports = mongoose.model('Crud', crudSchema);