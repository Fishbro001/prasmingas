const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// const tripSchema = new mongoose.Schema({
//     trip_id: { type: String},
//     trip_date: { type: Date},
//     trip_seats: { type: [String]}
// });

//Main Schema
const userSchema = new mongoose.Schema({
    user_name: { type: String, required: true, unique:true },
    user_password: { type: String, required: true},
    user_email: { type: String, required: true},
    user_admin: { type: Boolean, default: false },
    user_order: { type: [String], default: [] },
    user_tickets: {type: [String], default: [] },
}, { collection: 'users' });


userSchema.pre('save', async function(next) {
    try {
    if (this.isModified('user_password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.user_password = await bcrypt.hash(this.user_password, salt);
    }
    next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', userSchema);