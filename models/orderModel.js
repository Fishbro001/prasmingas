const mongoose = require('mongoose');

// Define the schema for the order
const orderSchema = new mongoose.Schema({
    tripTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crud', // Reference to another model if applicable
        required: true
    },
    tripId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crud.trips', // Reference to another model if applicable
        required: true
    },
    users: [{
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        birthday: {
            type: String,
            required: true
        },
        socNumber: {
            type: String,
            required: true
        },
        telNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        cityOfDeparture: {
            type: String,
            required: true
        },
        placeOnBus: {
            type: String,
            required: true
        },
        pricePaid: {
            type: String,
            required: true
        },
        isAdvance: {
            type: Boolean,
            required: true        
        },
        extras: {
            type: String,
            default: null
        }
    }],
    userEmail: {
        type: String,
        required: true
    },
    userPhoneNumber: {
        type: String,
        required: true
    },
    userAcc: {
        type: String,
        default: null
    },
    extras: {
        type: String,
        default: null
    },
    cityOfDeparture: {
        type: String,
        required: true
    },
    tickets: {
        type: [String],
        required: true
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});


orderSchema.pre('save', async function (next) {
    if (!this.orderNumber) {
        try {
            // Generate a unique order number
            const orderNumber = await generateUniqueOrderNumber();
            this.orderNumber = orderNumber;
            console.log('Generated orderNumber:', this.orderNumber); // Log the generated orderNumber
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

// Function to generate a unique order number
async function generateUniqueOrderNumber() {
    const currentYear = new Date().getFullYear().toString().slice(-2);
    const randomPart = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit random number
    const orderNumber = `ORD${currentYear}${randomPart}`;

    // Check if the order number already exists
    const exists = await mongoose.models.Order.findOne({ orderNumber });
    if (exists) {
        // If exists, generate a new one
        return generateUniqueOrderNumber();
    }
    return orderNumber;
}

// Create the model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
