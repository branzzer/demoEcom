const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        default: 0,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }

}, { timestamps: true })


const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;

