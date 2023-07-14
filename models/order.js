const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({

    items: { type: [mongoose.Schema.Types.Mixed], required: true },
    totalAmount: { type: Number },
    totalItems: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, default: "pending" },
    selectedAddress: { type: [mongoose.Schema.Types.Mixed], required: true }


}, { timestamps: true })


const Order = mongoose.model('order', orderSchema);

module.exports = Order;