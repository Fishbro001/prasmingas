const Order = require('../models/orderModel');
// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.createOrderFromData = async (orderData) => {
    try {
        const order = new Order(orderData);
        await order.save();
        return order;
    } catch (error) {
        throw error;
    }
};
// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('tripTypeId').populate({
            path: 'tripId',
            populate: {
                path: 'trips',
                model: 'Crud'
            }
        });
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single order by ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('tripTypeId')
            .populate({
                path: 'tripId',
                populate: {
                    path: 'trips',
                    model: 'Crud'
                }
            });
        if (!order) {
            return res.status(404).send();
        }
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['orderNumber', 'tripTypeId', 'tripId', 'users', 'userEmail', 'userPhoneNumber', 'userAcc', 'extras', 'cityOfDeparture','documents'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).send();
        }

        updates.forEach(update => order[update] = req.body[update]);
        await order.save();
        res.send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.updateOrderDocument = async (orderid, doc) => {
    // const updates = Object.keys(req.body);
    // const allowedUpdates = ['orderNumber', 'tripTypeId', 'tripId', 'users', 'userEmail', 'userPhoneNumber', 'userAcc', 'extras', 'cityOfDeparture','documents'];
    // const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid updates!' });
    // }

    try {
        const order = await Order.findById(orderid);
        if (!order) {
            return res.status(404).send();
        }
        order.documents.push(doc);

        // updates.forEach(update => order[update] = req.body[update]);
        await order.save();
        res.send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).send();
        }
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
};
