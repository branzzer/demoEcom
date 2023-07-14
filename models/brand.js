const mongoose = require('mongoose');



const brandSchema = new mongoose.Schema({
    label: { type: String, required: true, unique: true },
    value: { type: String, required: true, unique: true },

}, { timestamps: true });


const Brand = mongoose.model('brand', brandSchema);

module.exports = Brand